// Training Modules Management System
class TrainingModulesManager {
    constructor() {
        this.currentModule = null;
        this.userProgress = this.loadProgress();
        this.modules = trainingModules;
        this.completedExercises = {};
    }

    loadProgress() {
        try {
            const saved = localStorage.getItem('neuroMatrixTrainingProgress');
            return saved ? JSON.parse(saved) : {};
        } catch (error) {
            console.error('Error loading training progress:', error);
            return {};
        }
    }

    saveProgress() {
        try {
            localStorage.setItem('neuroMatrixTrainingProgress', JSON.stringify(this.userProgress));
        } catch (error) {
            console.error('Error saving training progress:', error);
        }
    }

    getModulesByAge(ageCategory) {
        return this.modules[ageCategory] || [];
    }

    getModuleById(moduleId) {
        for (const category in this.modules) {
            const module = this.modules[category].find(m => m.id === moduleId);
            if (module) return module;
        }
        return null;
    }

    getRecommendedModules(assessmentResults, ageCategory) {
        const allModules = this.getModulesByAge(ageCategory);
        const scores = {};
        const recommendations = [];
        
        // Analyze assessment results to determine needs
        if (assessmentResults['emotional-intelligence']) {
            const eiScore = assessmentResults['emotional-intelligence']['self_awareness']?.average || 0;
            if (eiScore < 3) {
                scores['emotional'] = 0.8;
            }
        }
        
        if (assessmentResults['stress-resilience']) {
            const stressScore = assessmentResults['stress-resilience']['stress_tolerance']?.average || 0;
            if (stressScore < 3) {
                scores['stress'] = 0.7;
            }
        }
        
        if (assessmentResults['cognitive-style']) {
            const cognitiveScore = assessmentResults['cognitive-style']['analytic_intuitive']?.average || 0;
            if (cognitiveScore < 2.5 || cognitiveScore > 3.5) {
                scores['cognitive'] = 0.6;
            }
        }
        
        if (assessmentResults['learning-style']) {
            const learningScore = Math.max(
                assessmentResults['learning-style']['visual']?.average || 0,
                assessmentResults['learning-style']['auditory']?.average || 0,
                assessmentResults['learning-style']['reading_writing']?.average || 0,
                assessmentResults['learning-style']['kinesthetic']?.average || 0
            );
            if (learningScore < 3) {
                scores['learning'] = 0.9;
            }
        }
        
        // Score each module based on relevance
        allModules.forEach(module => {
            let moduleScore = 0;
            
            // Check tags for relevance
            module.tags.forEach(tag => {
                const tagLower = tag.toLowerCase();
                if (tagLower.includes('emotional') && scores['emotional']) {
                    moduleScore += scores['emotional'];
                }
                if (tagLower.includes('stress') && scores['stress']) {
                    moduleScore += scores['stress'];
                }
                if (tagLower.includes('cognitive') && scores['cognitive']) {
                    moduleScore += scores['cognitive'];
                }
                if (tagLower.includes('learning') && scores['learning']) {
                    moduleScore += scores['learning'];
                }
                if (tagLower.includes('focus') || tagLower.includes('attention')) {
                    moduleScore += 0.3;
                }
                if (tagLower.includes('memory')) {
                    moduleScore += 0.4;
                }
                if (tagLower.includes('creativity')) {
                    moduleScore += 0.5;
                }
            });
            
            // Check category for relevance
            const categoryLower = module.category.toLowerCase();
            if (categoryLower.includes('emotional') && scores['emotional']) {
                moduleScore += scores['emotional'] * 1.5;
            }
            if (categoryLower.includes('stress') && scores['stress']) {
                moduleScore += scores['stress'] * 1.5;
            }
            
            // Add module to recommendations with score
            if (moduleScore > 0) {
                recommendations.push({
                    ...module,
                    relevanceScore: moduleScore,
                    matchPercentage: Math.min(100, Math.round(moduleScore * 100 / 3))
                });
            }
        });
        
        // Sort by relevance score
        recommendations.sort((a, b) => b.relevanceScore - a.relevanceScore);
        
        // If no specific recommendations, return all modules
        if (recommendations.length === 0) {
            return allModules.map(module => ({
                ...module,
                relevanceScore: 0.5,
                matchPercentage: 50
            }));
        }
        
        return recommendations;
    }

    startModule(moduleId) {
        this.currentModule = this.getModuleById(moduleId);
        
        if (!this.currentModule) {
            console.error(`Module not found: ${moduleId}`);
            return false;
        }
        
        // Initialize progress tracking for this module
        if (!this.userProgress[moduleId]) {
            this.userProgress[moduleId] = {
                started: new Date().toISOString(),
                completedExercises: 0,
                totalExercises: this.currentModule.exercises,
                lastAccessed: new Date().toISOString(),
                progress: 0
            };
        }
        
        this.completedExercises = {};
        this.saveProgress();
        
        return true;
    }

    completeExercise(exerciseId) {
        if (!this.currentModule) return false;
        
        if (!this.completedExercises[exerciseId]) {
            this.completedExercises[exerciseId] = true;
            
            // Update progress
            const completedCount = Object.keys(this.completedExercises).length;
            this.userProgress[this.currentModule.id].completedExercises = completedCount;
            this.userProgress[this.currentModule.id].progress = 
                (completedCount / this.currentModule.exercises) * 100;
            this.userProgress[this.currentModule.id].lastAccessed = new Date().toISOString();
            
            this.saveProgress();
            return true;
        }
        
        return false;
    }

    finishModule() {
        if (!this.currentModule) return false;
        
        this.userProgress[this.currentModule.id].completed = true;
        this.userProgress[this.currentModule.id].finished = new Date().toISOString();
        this.saveProgress();
        
        this.currentModule = null;
        this.completedExercises = {};
        
        return true;
    }

    getModuleProgress(moduleId) {
        return this.userProgress[moduleId] || {
            started: null,
            completedExercises: 0,
            totalExercises: this.getModuleById(moduleId)?.exercises || 0,
            progress: 0,
            completed: false
        };
    }

    getAllProgress() {
        const progress = {};
        
        Object.keys(this.userProgress).forEach(moduleId => {
            const module = this.getModuleById(moduleId);
            if (module) {
                progress[moduleId] = {
                    ...this.userProgress[moduleId],
                    moduleTitle: module.title,
                    moduleCategory: module.category
                };
            }
        });
        
        return progress;
    }

    getCompletionStats() {
        const allModules = [];
        Object.values(this.modules).forEach(categoryModules => {
            allModules.push(...categoryModules);
        });
        
        const totalModules = allModules.length;
        const completedModules = Object.keys(this.userProgress).filter(
            moduleId => this.userProgress[moduleId].completed
        ).length;
        
        const totalExercises = allModules.reduce((sum, module) => sum + module.exercises, 0);
        const completedExercises = Object.values(this.userProgress).reduce(
            (sum, progress) => sum + (progress.completedExercises || 0), 0
        );
        
        return {
            totalModules,
            completedModules,
            completionRate: totalModules > 0 ? (completedModules / totalModules) * 100 : 0,
            totalExercises,
            completedExercises,
            exerciseCompletionRate: totalExercises > 0 ? (completedExercises / totalExercises) * 100 : 0
        };
    }

    generateProgressReport() {
        const stats = this.getCompletionStats();
        const progress = this.getAllProgress();
        
        return {
            reportDate: new Date().toISOString(),
            overallStats: stats,
            moduleProgress: progress,
            recommendations: this.generateNextSteps(stats, progress)
        };
    }

    generateNextSteps(stats, progress) {
        const nextSteps = [];
        
        // Identify modules with progress but not completed
        Object.keys(progress).forEach(moduleId => {
            const moduleProgress = progress[moduleId];
            if (moduleProgress.progress > 0 && moduleProgress.progress < 100) {
                nextSteps.push({
                    action: 'Continue',
                    module: moduleProgress.moduleTitle,
                    progress: moduleProgress.progress,
                    priority: 'High'
                });
            }
        });
        
        // Suggest new modules based on low completion rate
        if (stats.completionRate < 30) {
            nextSteps.push({
                action: 'Start New Module',
                suggestion: 'Begin with a module matching your assessment results',
                priority: 'Medium'
            });
        }
        
        // Suggest revisiting completed modules if it's been a while
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
        
        Object.keys(progress).forEach(moduleId => {
            const moduleProgress = progress[moduleId];
            if (moduleProgress.completed && moduleProgress.finished) {
                const finishedDate = new Date(moduleProgress.finished);
                if (finishedDate < sixMonthsAgo) {
                    nextSteps.push({
                        action: 'Review',
                        module: moduleProgress.moduleTitle,
                        reason: 'Completed over 6 months ago',
                        priority: 'Low'
                    });
                }
            }
        });
        
        return nextSteps;
    }

    resetProgress(moduleId = null) {
        if (moduleId) {
            delete this.userProgress[moduleId];
        } else {
            this.userProgress = {};
        }
        this.saveProgress();
        return true;
    }
}

// Global training modules manager instance
let trainingManager;

// Initialize training manager
function initTrainingManager() {
    if (!trainingManager) {
        trainingManager = new TrainingModulesManager();
    }
    return trainingManager;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { TrainingModulesManager, initTrainingManager };
}