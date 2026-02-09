// Main Application Controller
class NeuroMatrixApp {
    constructor() {
        this.userState = {
            ageCategory: null,
            selectedModels: [],
            currentAssessment: null,
            assessmentResults: {},
            cognitiveProfile: {},
            trainingProgress: {},
            settings: {
                soundEnabled: true,
                animationsEnabled: true,
                theme: 'dark',
                notifications: true
            }
        };
        
        this.assessmentManager = initAssessmentManager();
        this.trainingManager = initTrainingManager();
        this.brainVisualization = null;
        
        this.init();
    }

    init() {
        this.loadSavedState();
        this.setupEventListeners();
        this.setupUI();
        this.applyTheme();
        
        // Initialize brain visualization
        this.initializeBrainVisualization();
        
        // Show welcome notification
        setTimeout(() => {
            this.showNotification("Welcome to NeuroMatrix", "Begin your cognitive journey by selecting your age category.");
        }, 1000);
    }

    loadSavedState() {
        try {
            const savedState = localStorage.getItem('neuroMatrixState');
            if (savedState) {
                const parsed = JSON.parse(savedState);
                this.userState = { ...this.userState, ...parsed };
                
                // Load into managers
                if (parsed.assessmentResults) {
                    this.assessmentManager.assessmentResults = parsed.assessmentResults;
                }
                if (parsed.cognitiveProfile) {
                    this.assessmentManager.cognitiveProfile = parsed.cognitiveProfile;
                }
            }
        } catch (error) {
            console.error('Error loading saved state:', error);
        }
    }

    saveState() {
        try {
            // Update state from managers
            this.userState.assessmentResults = this.assessmentManager.assessmentResults;
            this.userState.cognitiveProfile = this.assessmentManager.cognitiveProfile;
            
            localStorage.setItem('neuroMatrixState', JSON.stringify(this.userState));
        } catch (error) {
            console.error('Error saving state:', error);
        }
    }

    setupEventListeners() {
        // Start journey button
        document.getElementById('startJourneyBtn').addEventListener('click', () => this.startJourney());
        
        // Age category selection
        document.querySelectorAll('.category-card').forEach(card => {
            card.addEventListener('click', (e) => this.selectAgeCategory(e.currentTarget.dataset.category));
        });
        
        // Assessment model selection (delegated)
        document.getElementById('assessmentModels').addEventListener('click', (e) => {
            const modelBtn = e.target.closest('.start-assessment-btn');
            if (modelBtn && modelBtn.dataset.model) {
                this.startAssessment(modelBtn.dataset.model);
            }
        });
        
        // Question navigation
        document.getElementById('prevBtn').addEventListener('click', () => this.previousQuestion());
        document.getElementById('nextBtn').addEventListener('click', () => this.nextQuestion());
        
        // Results navigation
        document.getElementById('backToAssessmentBtn').addEventListener('click', () => this.backToAssessment());
        document.getElementById('viewTrainingBtn').addEventListener('click', () => this.viewTrainingModules());
        
        // Training module selection (delegated)
        document.getElementById('modulesGrid').addEventListener('click', (e) => {
            const moduleBtn = e.target.closest('.start-module-btn');
            if (moduleBtn && moduleBtn.dataset.module) {
                this.startTrainingModule(moduleBtn.dataset.module);
            }
        });
        
        // Option selection (delegated)
        document.getElementById('optionsGrid').addEventListener('click', (e) => {
            const optionBtn = e.target.closest('.option-btn');
            if (optionBtn) {
                this.selectOption(optionBtn);
            }
        });
        
        // Chart controls
        document.getElementById('toggleChartBtn')?.addEventListener('click', () => {
            if (window.brainChart) {
                window.brainChart.toggle();
            }
        });

        document.getElementById('toggleLegendBtn')?.addEventListener('click', () => {
            this.toggleLegend();
        });
        
        // Window resize
        window.addEventListener('resize', () => this.handleResize());
        
        // Before unload - save state
        window.addEventListener('beforeunload', () => this.saveState());
    }

    setupUI() {
        // Initialize UI based on saved state
        if (this.userState.ageCategory) {
            this.selectAgeCategory(this.userState.ageCategory, true);
        }
    }

    applyTheme() {
        // Remove all theme classes
        document.body.classList.remove(
            'child-theme', 'teen-theme', 'young-adult-theme', 
            'adult-theme', 'senior-theme'
        );
        
        // Apply current theme if age category is selected
        if (this.userState.ageCategory) {
            document.body.classList.add(`${this.userState.ageCategory}-theme`);
        }
    }

    initializeBrainVisualization() {
        if (!this.brainVisualization) {
            this.brainVisualization = initializeBrainVisualization();
        }
    }

    startJourney() {
        this.hideSection('heroSection');
        this.showSection('categorySelector');
        
        // Animate category cards
        gsap.from('.category-card', {
            duration: 0.8,
            y: 50,
            opacity: 0,
            stagger: 0.1,
            ease: "power3.out"
        });
    }

    selectAgeCategory(category, silent = false) {
        this.userState.ageCategory = category;
        
        // Update UI
        document.querySelectorAll('.category-card').forEach(card => {
            card.classList.remove('active');
        });
        document.querySelector(`.category-card[data-category="${category}"]`).classList.add('active');
        
        // Apply theme
        this.applyTheme();
        
        // Show assessment panel
        this.hideSection('categorySelector');
        this.showSection('assessmentPanel');
        
        // Update selected category display
        document.getElementById('selectedCategory').textContent = 
            `Selected: ${category.replace('-', ' ').toUpperCase()}`;
        
        // Load assessment models
        this.loadAssessmentModels();
        
        // Animate panel entrance
        if (!silent) {
            gsap.from('#assessmentPanel', {
                duration: 0.6,
                y: 30,
                opacity: 0,
                ease: "power3.out"
            });
            
            this.showNotification("Age Category Selected", 
                `You've selected the ${category} category. Now choose assessment models to continue.`);
        }
        
        this.saveState();
    }

    loadAssessmentModels() {
        const modelsContainer = document.getElementById('assessmentModels');
        const models = getAssessmentModels();
        
        modelsContainer.innerHTML = models.map(model => `
            <div class="model-card" data-model="${model.id}">
                <div class="model-icon" style="background: ${model.color}">
                    <i class="${model.icon}"></i>
                </div>
                <h4>${model.name}</h4>
                <p class="model-desc">${model.description}</p>
                <div class="model-meta">
                    <span>${model.duration}</span>
                    <span>${model.questions} questions</span>
                </div>
                <button class="start-assessment-btn" data-model="${model.id}">
                    <i class="fas fa-play"></i> Start Assessment
                </button>
            </div>
        `).join('');
    }

    startAssessment(modelId) {
        const success = this.assessmentManager.startAssessment(modelId);
        if (!success) {
            this.showNotification("Error", "Could not start assessment. Please try again.");
            return;
        }
        
        this.userState.currentAssessment = modelId;
        
        // Hide assessment panel, show question panel
        this.hideSection('assessmentPanel');
        this.showSection('questionPanel');
        
        // Load first question
        this.loadQuestion();
        
        this.showNotification("Assessment Started", 
            `Beginning ${this.assessmentManager.getModelName(modelId)} assessment.`);
    }

    loadQuestion() {
        const question = this.assessmentManager.getCurrentQuestion();
        if (!question) {
            console.error('No question found');
            return;
        }
        
        const totalQuestions = this.assessmentManager.getTotalQuestions();
        const currentIndex = this.assessmentManager.currentQuestionIndex;
        
        // Update question text
        document.getElementById('questionText').textContent = question.question;
        
        // Update progress
        const progress = ((currentIndex + 1) / totalQuestions) * 100;
        document.getElementById('progressFill').style.width = `${progress}%`;
        document.getElementById('questionCounter').textContent = 
            `Question ${currentIndex + 1}/${totalQuestions}`;
        
        // Load options
        const optionsGrid = document.getElementById('optionsGrid');
        optionsGrid.innerHTML = '';
        
        question.options.forEach((option, index) => {
            const optionBtn = document.createElement('button');
            optionBtn.className = 'option-btn';
            optionBtn.textContent = option.text;
            optionBtn.dataset.value = option.value;
            optionBtn.dataset.index = index;
            
            // Check if this option was previously selected
            const currentResponse = this.assessmentManager.getResponse(currentIndex);
            if (currentResponse === option.value) {
                optionBtn.classList.add('selected');
            }
            
            optionsGrid.appendChild(optionBtn);
        });
        
        // Update navigation buttons
        document.getElementById('prevBtn').style.display = 
            currentIndex > 0 ? 'flex' : 'none';
            
        const nextBtn = document.getElementById('nextBtn');
        nextBtn.innerHTML = currentIndex < totalQuestions - 1 ? 
            'Next <i class="fas fa-arrow-right"></i>' : 
            'Complete Assessment <i class="fas fa-check"></i>';
        
        // Add animations
        gsap.from('#questionText', {
            duration: 0.5,
            y: 20,
            opacity: 0,
            ease: "power3.out"
        });
        
        gsap.from('.option-btn', {
            duration: 0.5,
            y: 20,
            opacity: 0,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.2
        });
    }

    selectOption(optionBtn) {
        const questionIndex = this.assessmentManager.currentQuestionIndex;
        const value = parseInt(optionBtn.dataset.value);
        
        // Deselect all options
        document.querySelectorAll('.option-btn').forEach(btn => {
            btn.classList.remove('selected');
        });
        
        // Select this option
        optionBtn.classList.add('selected');
        
        // Store response
        this.assessmentManager.recordResponse(questionIndex, value);
    }

    previousQuestion() {
        const success = this.assessmentManager.previousQuestion();
        if (success) {
            this.loadQuestion();
        }
    }

    nextQuestion() {
        const currentIndex = this.assessmentManager.currentQuestionIndex;
        const totalQuestions = this.assessmentManager.getTotalQuestions();
        
        // Check if current question is answered
        const currentResponse = this.assessmentManager.getResponse(currentIndex);
        if (currentResponse === undefined) {
            this.showNotification("Please Answer", "Please select an answer before continuing.");
            return;
        }
        
        if (currentIndex < totalQuestions - 1) {
            const success = this.assessmentManager.nextQuestion();
            if (success) {
                this.loadQuestion();
            }
        } else {
            // Assessment complete
            this.completeAssessment();
        }
    }

    completeAssessment() {
        // Calculate results
        const results = this.assessmentManager.calculateResults();
        if (!results) {
            this.showNotification("Error", "Could not calculate results. Please try again.");
            return;
        }
        
        // Store in user state
        this.userState.assessmentResults[this.userState.currentAssessment] = results;
        
        // Show results
        this.showResults();
        
        this.showNotification("Assessment Complete", 
            `Your ${this.assessmentManager.getModelName(this.userState.currentAssessment)} results are ready!`);
        
        this.saveState();
    }

    showResults() {
        // Hide question panel, show results panel
        this.hideSection('questionPanel');
        this.showSection('resultsPanel');
        
        // Generate results display
        this.generateResultsDisplay();
        
        // Update brain visualization
        if (this.brainVisualization) {
            this.brainVisualization.updateAssessmentData(this.assessmentManager.assessmentResults);
        }
        
        // Initialize and update brain chart
        setTimeout(() => {
            if (!window.brainChart) {
                initializeBrainChart();
            }
            
            if (window.brainChart) {
                window.brainChart.updateFromAssessment(this.assessmentManager.assessmentResults);
                window.brainChart.show();
            }
        }, 500);
        
        // Add animations
        gsap.from('.results-header', {
            duration: 0.6,
            y: -30,
            opacity: 0,
            ease: "power3.out"
        });
        
        gsap.from('.brain-container', {
            duration: 0.8,
            scale: 0.9,
            opacity: 0,
            ease: "power3.out",
            delay: 0.2
        });
        
        gsap.from('.result-card', {
            duration: 0.6,
            y: 30,
            opacity: 0,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.4
        });
        
        this.showNotification("Assessment Complete", 
            `Your ${this.assessmentManager.getModelName(this.userState.currentAssessment)} results are ready!`);
        
        this.saveState();
    }

    generateResultsDisplay() {
        const resultsGrid = document.getElementById('resultsGrid');
        const results = this.assessmentManager.getAllResults();
        
        resultsGrid.innerHTML = '';
        
        // Create result cards for each assessment
        Object.keys(results.assessmentResults).forEach(modelId => {
            const modelResults = results.assessmentResults[modelId];
            const card = document.createElement('div');
            card.className = 'result-card';
            
            let html = `
                <h4>
                    <i class="fas fa-chart-bar"></i>
                    ${this.assessmentManager.getModelName(modelId)}
                </h4>
                <ul class="trait-list">
            `;
            
            Object.keys(modelResults).forEach(dimension => {
                const data = modelResults[dimension];
                const score = data.average;
                const percentage = Math.round((score / 5) * 100);
                
                // Create progress bar
                const progressBar = `
                    <div class="trait-progress">
                        <div class="trait-progress-fill" style="width: ${percentage}%"></div>
                    </div>
                `;
                
                html += `
                    <li class="trait-item">
                        <span class="trait-name">${this.assessmentManager.getDimensionLabel(dimension)}</span>
                        <div class="trait-score-container">
                            ${progressBar}
                            <span class="trait-score">${score.toFixed(1)}/5.0</span>
                        </div>
                    </li>
                `;
            });
            
            html += '</ul>';
            card.innerHTML = html;
            resultsGrid.appendChild(card);
        });
        
        // Add cognitive profile card
        const profileCard = document.createElement('div');
        profileCard.className = 'result-card';
        
        let profileHtml = `
            <h4>
                <i class="fas fa-user-cog"></i>
                Cognitive Profile Summary
            </h4>
            <div class="profile-summary">
        `;
        
        if (results.cognitiveProfile.strengths.length > 0) {
            profileHtml += `
                <div class="profile-section">
                    <h5><i class="fas fa-star"></i> Key Strengths</h5>
                    <ul class="strength-list">
            `;
            
            results.cognitiveProfile.strengths.forEach(strength => {
                profileHtml += `
                    <li>
                        <strong>${strength.trait}</strong> (${strength.category})
                        <div class="strength-desc">${strength.description}</div>
                    </li>
                `;
            });
            
            profileHtml += '</ul></div>';
        }
        
        if (results.cognitiveProfile.developmentAreas.length > 0) {
            profileHtml += `
                <div class="profile-section">
                    <h5><i class="fas fa-bullseye"></i> Development Areas</h5>
                    <ul class="development-list">
            `;
            
            results.cognitiveProfile.developmentAreas.forEach(area => {
                profileHtml += `
                    <li>
                        <strong>${area.trait}</strong> (${area.category})
                        <div class="development-desc">${area.description}</div>
                    </li>
                `;
            });
            
            profileHtml += '</ul></div>';
        }
        
        profileHtml += `
                <div class="profile-section">
                    <h5><i class="fas fa-lightbulb"></i> Recommendations</h5>
                    <ul class="recommendation-list">
        `;
        
        results.cognitiveProfile.recommendations.forEach(rec => {
            profileHtml += `
                <li>
                    <strong>${rec.type}:</strong> ${rec.suggestion}
                    <div class="recommendation-priority ${rec.priority.toLowerCase()}">
                        Priority: ${rec.priority}
                    </div>
                </li>
            `;
        });
        
        profileHtml += `
                    </ul>
                </div>
            </div>
        `;
        
        profileCard.innerHTML = profileHtml;
        resultsGrid.appendChild(profileCard);
        
        // Add CSS for new elements
        this.addResultsStyles();
    }

    addResultsStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .trait-progress {
                flex-grow: 1;
                height: 8px;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 4px;
                overflow: hidden;
                margin-right: 10px;
            }
            
            .trait-progress-fill {
                height: 100%;
                background: var(--primary-gradient);
                border-radius: 4px;
                transition: width 0.3s ease;
            }
            
            .trait-score-container {
                display: flex;
                align-items: center;
                min-width: 150px;
            }
            
            .profile-summary {
                margin-top: 15px;
            }
            
            .profile-section {
                margin-bottom: 20px;
            }
            
            .profile-section h5 {
                font-size: 1.1rem;
                margin-bottom: 10px;
                color: var(--text-secondary);
                display: flex;
                align-items: center;
                gap: 8px;
            }
            
            .strength-list,
            .development-list,
            .recommendation-list {
                list-style: none;
                margin-left: 10px;
            }
            
            .strength-list li,
            .development-list li,
            .recommendation-list li {
                padding: 8px 0;
                border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            }
            
            .strength-desc,
            .development-desc {
                font-size: 0.9rem;
                color: var(--text-muted);
                margin-top: 4px;
            }
            
            .recommendation-priority {
                display: inline-block;
                padding: 2px 8px;
                border-radius: 12px;
                font-size: 0.8rem;
                margin-top: 4px;
            }
            
            .recommendation-priority.high {
                background: rgba(239, 68, 68, 0.2);
                color: #f87171;
            }
            
            .recommendation-priority.medium {
                background: rgba(245, 158, 11, 0.2);
                color: #fbbf24;
            }
            
            .recommendation-priority.low {
                background: rgba(16, 185, 129, 0.2);
                color: #34d399;
            }
        `;
        
        document.head.appendChild(style);
    }

    backToAssessment() {
        // Hide results panel, show assessment panel
        this.hideSection('resultsPanel');
        this.showSection('assessmentPanel');
        
        // Reset assessment manager for new assessment
        this.assessmentManager.reset();
        this.userState.currentAssessment = null;
    }

    viewTrainingModules() {
        // Hide results panel, show training modules
        this.hideSection('resultsPanel');
        this.showSection('trainingModules');
        
        // Load age-specific training modules
        this.loadTrainingModules();
        
        // Add animation
        gsap.from('.modules-grid', {
            duration: 0.6,
            y: 30,
            opacity: 0,
            stagger: 0.1,
            ease: "power3.out"
        });
    }

    loadTrainingModules() {
        const modulesGrid = document.getElementById('modulesGrid');
        const recommendedModules = this.trainingManager.getRecommendedModules(
            this.assessmentManager.assessmentResults,
            this.userState.ageCategory
        );
        
        modulesGrid.innerHTML = recommendedModules.map(module => {
            const progress = this.trainingManager.getModuleProgress(module.id);
            const progressPercentage = progress.progress || 0;
            
            return `
                <div class="module-card" data-module="${module.id}">
                    <div class="module-header">
                        <div class="module-icon">
                            <i class="${module.icon}"></i>
                        </div>
                        <div>
                            <h4>${module.title}</h4>
                            <div class="module-category">${module.category} • ${module.duration}</div>
                            ${module.matchPercentage ? 
                                `<div class="module-match">${module.matchPercentage}% match</div>` : ''}
                        </div>
                    </div>
                    <p class="module-desc">${module.description}</p>
                    <div class="module-tags">
                        ${module.tags.map(tag => `<span class="module-tag">${tag}</span>`).join('')}
                        <span class="module-tag">${module.difficulty}</span>
                        <span class="module-tag">${module.ageSpecific}</span>
                    </div>
                    <div class="module-progress-container">
                        <div class="module-progress-bar">
                            <div class="module-progress-fill" style="width: ${progressPercentage}%"></div>
                        </div>
                        <span class="module-progress-text">${Math.round(progressPercentage)}% Complete</span>
                    </div>
                    <button class="start-module-btn" data-module="${module.id}">
                        <i class="fas fa-play-circle"></i> 
                        ${progressPercentage > 0 ? 'Continue Module' : 'Start Module'}
                    </button>
                </div>
            `;
        }).join('');
        
        // Add CSS for progress bars
        this.addModuleStyles();
    }

    addModuleStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .module-match {
                background: var(--primary-gradient);
                color: white;
                padding: 3px 10px;
                border-radius: 12px;
                font-size: 0.8rem;
                margin-top: 5px;
                display: inline-block;
            }
            
            .module-progress-container {
                margin-bottom: 20px;
            }
            
            .module-progress-bar {
                height: 6px;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 3px;
                overflow: hidden;
                margin-bottom: 5px;
            }
            
            .module-progress-fill {
                height: 100%;
                background: var(--primary-gradient);
                border-radius: 3px;
                transition: width 0.3s ease;
            }
            
            .module-progress-text {
                font-size: 0.85rem;
                color: var(--text-muted);
            }
        `;
        
        document.head.appendChild(style);
    }

    startTrainingModule(moduleId) {
        const success = this.trainingManager.startModule(moduleId);
        if (success) {
            this.showNotification("Module Started", 
                `Beginning ${this.trainingManager.getModuleById(moduleId).title}. Good luck!`);
            
            // In a full implementation, this would navigate to the actual module
            // For now, just show a success message
            setTimeout(() => {
                this.showNotification("Module Active", 
                    "You are now in the training environment. Complete exercises to develop your skills!");
            }, 1000);
        } else {
            this.showNotification("Error", "Could not start module. Please try again.");
        }
    }

    hideSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'none';
        }
    }

    showSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
            section.style.display = 'block';
        }
    }

    showNotification(title, message) {
        const notification = document.getElementById('notification');
        document.getElementById('notificationTitle').textContent = title;
        document.getElementById('notificationMessage').textContent = message;
        
        // Show notification
        notification.classList.add('show');
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            notification.classList.remove('show');
        }, 5000);
        
        // Play sound if enabled
        if (this.userState.settings.soundEnabled) {
            this.playNotificationSound();
        }
    }

    playNotificationSound() {
        // Create a simple notification sound
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.value = 800;
        oscillator.type = 'sine';
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.1, audioContext.currentTime + 0.1);
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 0.3);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    }

    handleResize() {
        if (this.brainVisualization) {
            this.brainVisualization.handleResize();
        }
    }

    toggleLegend() {
        const legend = document.querySelector('.chart-legend');
        if (!legend) {
            this.createLegend();
        } else {
            legend.style.display = legend.style.display === 'none' ? 'block' : 'none';
        }
    }

    createLegend() {
        const legend = document.createElement('div');
        legend.className = 'chart-legend';
        legend.style.cssText = `
            position: absolute;
            top: 60px;
            left: 20px;
            background: rgba(0, 0, 0, 0.8);
            padding: 15px;
            border-radius: 10px;
            backdrop-filter: blur(10px);
            max-width: 250px;
            color: white;
            font-family: 'Inter', sans-serif;
            z-index: 10;
            border: 1px solid rgba(99, 102, 241, 0.3);
        `;
        
        legend.innerHTML = `
            <h4 style="margin: 0 0 10px 0; color: #c7d2fe; font-size: 0.9rem;">
                <i class="fas fa-key"></i> Activation Levels
            </h4>
            <div class="legend-item">
                <div class="legend-color" style="background: linear-gradient(90deg, #10b981, #34d399);"></div>
                <span>High Activation (80-100%)</span>
            </div>
            <div class="legend-item">
                <div class="legend-color" style="background: linear-gradient(90deg, #3b82f6, #60a5fa);"></div>
                <span>Strong Activation (60-79%)</span>
            </div>
            <div class="legend-item">
                <div class="legend-color" style="background: linear-gradient(90deg, #f59e0b, #fbbf24);"></div>
                <span>Moderate Activation (40-59%)</span>
            </div>
            <div class="legend-item">
                <div class="legend-color" style="background: linear-gradient(90deg, #ef4444, #f87171);"></div>
                <span>Low Activation (0-39%)</span>
            </div>
            <div style="margin-top: 15px; padding-top: 10px; border-top: 1px solid rgba(255,255,255,0.1);">
                <p style="margin: 0; font-size: 0.8rem; color: #94a3b8;">
                    <i class="fas fa-lightbulb"></i> Click on chart items to view detailed region information.
                </p>
            </div>
        `;
        
        // Add legend item styles
        const style = document.createElement('style');
        style.textContent = `
            .legend-item {
                display: flex;
                align-items: center;
                margin-bottom: 8px;
                font-size: 0.8rem;
            }
            
            .legend-color {
                width: 12px;
                height: 12px;
                border-radius: 50%;
                margin-right: 10px;
                border: 2px solid rgba(255, 255, 255, 0.3);
            }
        `;
        document.head.appendChild(style);
        
        document.querySelector('.brain-container').appendChild(legend);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.neuroMatrixApp = new NeuroMatrixApp();
});

// Export for use in other modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NeuroMatrixApp;
}