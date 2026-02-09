// Assessment Management System
class AssessmentManager {
    constructor() {
        this.currentAssessment = null;
        this.currentQuestionIndex = 0;
        this.userResponses = {};
        this.assessmentResults = {};
        this.cognitiveProfile = {};
        this.assessmentModels = getAssessmentModels();
    }

    startAssessment(modelId) {
        this.currentAssessment = modelId;
        this.currentQuestionIndex = 0;
        this.userResponses = {};
        
        const questions = assessmentQuestions[modelId];
        if (!questions || questions.length === 0) {
            console.error(`No questions found for model: ${modelId}`);
            return false;
        }
        
        return true;
    }

    getCurrentQuestion() {
        if (!this.currentAssessment) return null;
        
        const questions = assessmentQuestions[this.currentAssessment];
        if (!questions || this.currentQuestionIndex >= questions.length) {
            return null;
        }
        
        return questions[this.currentQuestionIndex];
    }

    getTotalQuestions() {
        if (!this.currentAssessment) return 0;
        return assessmentQuestions[this.currentAssessment]?.length || 0;
    }

    recordResponse(questionIndex, responseValue) {
        const questionKey = `q${questionIndex}`;
        this.userResponses[questionKey] = responseValue;
    }

    getResponse(questionIndex) {
        const questionKey = `q${questionIndex}`;
        return this.userResponses[questionKey];
    }

    nextQuestion() {
        const totalQuestions = this.getTotalQuestions();
        if (this.currentQuestionIndex < totalQuestions - 1) {
            this.currentQuestionIndex++;
            return true;
        }
        return false;
    }

    previousQuestion() {
        if (this.currentQuestionIndex > 0) {
            this.currentQuestionIndex--;
            return true;
        }
        return false;
    }

    calculateResults() {
        if (!this.currentAssessment) return null;
        
        const questions = assessmentQuestions[this.currentAssessment];
        const results = {};
        
        // Calculate scores for each dimension
        questions.forEach((question, index) => {
            const questionKey = `q${index}`;
            const response = this.userResponses[questionKey];
            
            if (response === undefined) {
                console.warn(`No response for question ${index}`);
                return;
            }
            
            let score = parseInt(response);
            
            // Handle reversed scoring
            if (question.reversed) {
                score = 6 - score; // Reverse 1-5 scale
            }
            
            // Normalize to 0-1 range for visualization
            const normalizedScore = (score - 1) / 4;
            
            if (!results[question.dimension]) {
                results[question.dimension] = {
                    total: 0,
                    count: 0,
                    rawScores: [],
                    average: 0,
                    normalizedAverage: 0
                };
            }
            
            results[question.dimension].total += score;
            results[question.dimension].count++;
            results[question.dimension].rawScores.push(score);
        });
        
        // Calculate averages
        Object.keys(results).forEach(dimension => {
            const data = results[dimension];
            data.average = data.total / data.count;
            data.normalizedAverage = (data.average - 1) / 4; // Convert 1-5 to 0-1
        });
        
        // Store results
        this.assessmentResults[this.currentAssessment] = results;
        
        // Update cognitive profile
        this.updateCognitiveProfile();
        
        return results;
    }

    updateCognitiveProfile() {
        this.cognitiveProfile = {
            strengths: [],
            developmentAreas: [],
            cognitivePatterns: [],
            recommendations: [],
            dominantTraits: [],
            compatibility: {}
        };
        
        // Analyze each assessment
        Object.keys(this.assessmentResults).forEach(modelId => {
            const results = this.assessmentResults[modelId];
            
            switch(modelId) {
                case 'big-five':
                    this.analyzeBigFive(results);
                    break;
                case 'multiple-intelligences':
                    this.analyzeMultipleIntelligences(results);
                    break;
                case 'cognitive-style':
                    this.analyzeCognitiveStyle(results);
                    break;
                case 'learning-style':
                    this.analyzeLearningStyle(results);
                    break;
                case 'emotional-intelligence':
                    this.analyzeEmotionalIntelligence(results);
                    break;
                case 'stress-resilience':
                    this.analyzeStressResilience(results);
                    break;
            }
        });
        
        // Generate overall recommendations
        this.generateRecommendations();
    }

    analyzeBigFive(results) {
        const thresholds = {
            high: 4.0,
            low: 2.0
        };
        
        Object.keys(results).forEach(dimension => {
            const score = results[dimension].average;
            const label = this.getDimensionLabel(dimension);
            
            if (score >= thresholds.high) {
                this.cognitiveProfile.strengths.push({
                    category: 'Personality',
                    trait: label,
                    score: score,
                    description: this.getBigFiveDescription(dimension, score)
                });
            } else if (score <= thresholds.low) {
                this.cognitiveProfile.developmentAreas.push({
                    category: 'Personality',
                    trait: label,
                    score: score,
                    description: `Opportunity for growth in ${label.toLowerCase()}`
                });
            }
            
            // Store as dominant trait if significantly high
            if (score >= 4.2) {
                this.cognitiveProfile.dominantTraits.push(label);
            }
        });
    }

    analyzeMultipleIntelligences(results) {
        // Find top 3 intelligences
        const sortedIntelligences = Object.keys(results)
            .map(dimension => ({
                dimension,
                score: results[dimension].average,
                label: this.getDimensionLabel(dimension)
            }))
            .sort((a, b) => b.score - a.score);
        
        // Add top 3 as strengths
        sortedIntelligences.slice(0, 3).forEach(intelligence => {
            this.cognitiveProfile.strengths.push({
                category: 'Intelligence',
                trait: intelligence.label,
                score: intelligence.score,
                description: `Strong ${intelligence.label} intelligence`
            });
        });
        
        // Add lowest as development area
        if (sortedIntelligences.length > 0) {
            const lowest = sortedIntelligences[sortedIntelligences.length - 1];
            if (lowest.score < 3.0) {
                this.cognitiveProfile.developmentAreas.push({
                    category: 'Intelligence',
                    trait: lowest.label,
                    score: lowest.score,
                    description: `Potential to develop ${lowest.label.toLowerCase()} intelligence`
                });
            }
        }
    }

    analyzeCognitiveStyle(results) {
        const analyticScore = results['analytic_intuitive']?.average || 0;
        const holisticScore = results['holistic_analytic']?.average || 0;
        
        if (analyticScore > 3.5) {
            this.cognitiveProfile.cognitivePatterns.push({
                pattern: 'Analytical Thinker',
                description: 'Prefers logical, systematic approaches to problem-solving'
            });
        } else if (analyticScore < 2.5) {
            this.cognitiveProfile.cognitivePatterns.push({
                pattern: 'Intuitive Thinker',
                description: 'Relies on intuition and holistic understanding'
            });
        }
        
        if (holisticScore > 3.5) {
            this.cognitiveProfile.cognitivePatterns.push({
                pattern: 'Big Picture Thinker',
                description: 'Focuses on overall patterns and connections'
            });
        } else if (holisticScore < 2.5) {
            this.cognitiveProfile.cognitivePatterns.push({
                pattern: 'Detail-Oriented Thinker',
                description: 'Focuses on specific details and precision'
            });
        }
    }

    analyzeLearningStyle(results) {
        // Find dominant learning style
        const styles = ['visual', 'auditory', 'reading_writing', 'kinesthetic'];
        const styleScores = styles.map(style => ({
            style,
            score: results[style]?.average || 0
        })).sort((a, b) => b.score - a.score);
        
        if (styleScores.length > 0 && styleScores[0].score > 3.0) {
            const dominantStyle = styleScores[0];
            this.cognitiveProfile.recommendations.push({
                type: 'Learning Strategy',
                suggestion: `Utilize ${dominantStyle.style} learning methods for optimal retention`,
                priority: 'High'
            });
        }
    }

    analyzeEmotionalIntelligence(results) {
        const dimensions = ['self_awareness', 'self_regulation', 'motivation', 'empathy', 'social_skills'];
        const avgScore = dimensions.reduce((sum, dim) => 
            sum + (results[dim]?.average || 0), 0) / dimensions.length;
        
        if (avgScore >= 4.0) {
            this.cognitiveProfile.strengths.push({
                category: 'Emotional Intelligence',
                trait: 'High EQ',
                score: avgScore,
                description: 'Strong emotional awareness and regulation skills'
            });
        } else if (avgScore <= 2.5) {
            this.cognitiveProfile.developmentAreas.push({
                category: 'Emotional Intelligence',
                trait: 'EQ Development',
                score: avgScore,
                description: 'Opportunity to develop emotional intelligence skills'
            });
        }
    }

    analyzeStressResilience(results) {
        const resilienceScore = results['stress_tolerance']?.average || 0;
        const recoveryScore = results['recovery_capacity']?.average || 0;
        const avgResilience = (resilienceScore + recoveryScore) / 2;
        
        if (avgResilience >= 4.0) {
            this.cognitiveProfile.strengths.push({
                category: 'Resilience',
                trait: 'High Resilience',
                score: avgResilience,
                description: 'Excellent stress management and recovery abilities'
            });
        } else if (avgResilience <= 2.5) {
            this.cognitiveProfile.developmentAreas.push({
                category: 'Resilience',
                trait: 'Resilience Building',
                score: avgResilience,
                description: 'Opportunity to develop stress management skills'
            });
        }
    }

    generateRecommendations() {
        // Generate personalized recommendations based on profile
        this.cognitiveProfile.recommendations = [
            {
                type: 'General',
                suggestion: 'Practice mindfulness meditation for 10 minutes daily',
                priority: 'Medium',
                basedOn: 'Cognitive enhancement'
            },
            {
                type: 'Learning',
                suggestion: 'Use spaced repetition for skill development',
                priority: 'High',
                basedOn: 'Memory optimization'
            }
        ];
        
        // Add recommendations based on development areas
        this.cognitiveProfile.developmentAreas.forEach(area => {
            if (area.category === 'Emotional Intelligence') {
                this.cognitiveProfile.recommendations.push({
                    type: 'Emotional Development',
                    suggestion: 'Practice emotion labeling and regulation exercises',
                    priority: 'High',
                    basedOn: area.trait
                });
            }
        });
    }

    getDimensionLabel(dimension) {
        const labels = {
            // Big Five
            'extraversion': 'Extraversion',
            'agreeableness': 'Agreeableness',
            'conscientiousness': 'Conscientiousness',
            'neuroticism': 'Neuroticism',
            'openness': 'Openness',
            
            // Multiple Intelligences
            'linguistic': 'Linguistic Intelligence',
            'logical_mathematical': 'Logical-Mathematical Intelligence',
            'spatial': 'Spatial Intelligence',
            'musical': 'Musical Intelligence',
            'bodily_kinesthetic': 'Bodily-Kinesthetic Intelligence',
            'interpersonal': 'Interpersonal Intelligence',
            'intrapersonal': 'Intrapersonal Intelligence',
            'naturalistic': 'Naturalistic Intelligence',
            
            // Cognitive Style
            'analytic_intuitive': 'Analytic-Intuitive',
            'holistic_analytic': 'Holistic-Analytic',
            'quick_deliberate': 'Decision Speed',
            'structured_flexible': 'Structure Preference',
            'abstract_concrete': 'Abstract-Concrete',
            'experiential_theoretical': 'Learning Approach',
            'focused_diffuse': 'Focus Style',
            'multitasking_singletasking': 'Task Management',
            'conventional_innovative': 'Approach Style',
            'systematic_intuitive': 'Systematic-Intuitive',
            
            // Learning Style
            'visual': 'Visual',
            'auditory': 'Auditory',
            'reading_writing': 'Reading/Writing',
            'kinesthetic': 'Kinesthetic',
            
            // Emotional Intelligence
            'self_awareness': 'Self-Awareness',
            'self_regulation': 'Self-Regulation',
            'motivation': 'Motivation',
            'empathy': 'Empathy',
            'social_skills': 'Social Skills',
            'resilience': 'Resilience',
            
            // Stress Resilience
            'stress_tolerance': 'Stress Tolerance',
            'recovery_capacity': 'Recovery Capacity',
            'coping_mechanisms': 'Coping Mechanisms',
            'adaptation': 'Adaptation',
            'optimism': 'Optimism',
            'support_seeking': 'Support Seeking',
            'self_care': 'Self-Care',
            'reframing': 'Reframing',
            'boundary_setting': 'Boundary Setting',
            'growth_mindset': 'Growth Mindset'
        };
        
        return labels[dimension] || dimension.replace('_', ' ').toUpperCase();
    }

    getBigFiveDescription(dimension, score) {
        const descriptions = {
            'openness': score >= 4 ? 'Highly curious and creative' : 'Prefers routine and familiarity',
            'conscientiousness': score >= 4 ? 'Highly organized and reliable' : 'More spontaneous and flexible',
            'extraversion': score >= 4 ? 'Energized by social interaction' : 'Prefers quiet reflection',
            'agreeableness': score >= 4 ? 'Highly cooperative and compassionate' : 'More competitive and direct',
            'neuroticism': score >= 4 ? 'May experience emotional volatility' : 'Emotionally stable and resilient'
        };
        
        return descriptions[dimension] || '';
    }

    getModelName(modelId) {
        const model = this.assessmentModels.find(m => m.id === modelId);
        return model ? model.name : modelId;
    }

    getModelDescription(modelId) {
        const model = this.assessmentModels.find(m => m.id === modelId);
        return model ? model.description : '';
    }

    getAllResults() {
        return {
            assessmentResults: this.assessmentResults,
            cognitiveProfile: this.cognitiveProfile,
            timestamp: new Date().toISOString()
        };
    }

    reset() {
        this.currentAssessment = null;
        this.currentQuestionIndex = 0;
        this.userResponses = {};
        // Note: We don't reset assessmentResults or cognitiveProfile intentionally
    }
}

// Global assessment manager instance
let assessmentManager;

// Initialize assessment manager
function initAssessmentManager() {
    if (!assessmentManager) {
        assessmentManager = new AssessmentManager();
    }
    return assessmentManager;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { AssessmentManager, initAssessmentManager };
}