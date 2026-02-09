// Brain Chart Visualization Module
class BrainChartVisualization {
    constructor(containerId) {
        this.container = document.getElementById(containerId) || this.createChartContainer();
        this.chart = null;
        this.regionData = [];
        this.assessmentData = null;
        
        this.init();
    }

    createChartContainer() {
        const container = document.createElement('div');
        container.id = 'brainChartContainer';
        container.className = 'brain-chart-container';
        container.style.cssText = `
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(10, 10, 30, 0.85);
            padding: 20px;
            border-radius: 15px;
            backdrop-filter: blur(15px);
            max-width: 320px;
            color: white;
            font-family: 'Inter', sans-serif;
            z-index: 100;
            border: 1px solid rgba(99, 102, 241, 0.3);
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
            display: none;
            animation: slideInChart 0.5s ease-out;
        `;
        
        // Add CSS animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideInChart {
                from {
                    opacity: 0;
                    transform: translateX(50px);
                }
                to {
                    opacity: 1;
                    transform: translateX(0);
                }
            }
            
            .brain-chart-container {
                transition: all 0.3s ease;
            }
            
            .chart-region-item {
                margin-bottom: 12px;
                padding: 10px;
                background: rgba(255, 255, 255, 0.05);
                border-radius: 8px;
                border-left: 3px solid;
                transition: all 0.3s ease;
            }
            
            .chart-region-item:hover {
                background: rgba(255, 255, 255, 0.1);
                transform: translateX(5px);
            }
            
            .chart-progress-bar {
                height: 8px;
                background: rgba(255, 255, 255, 0.1);
                border-radius: 4px;
                overflow: hidden;
                margin: 8px 0;
            }
            
            .chart-progress-fill {
                height: 100%;
                border-radius: 4px;
                transition: width 1.5s cubic-bezier(0.34, 1.56, 0.64, 1);
                position: relative;
                overflow: hidden;
            }
            
            .chart-progress-fill::after {
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: linear-gradient(90deg, 
                    transparent, 
                    rgba(255, 255, 255, 0.3), 
                    transparent);
                animation: shimmer 2s infinite;
            }
            
            @keyframes shimmer {
                0% { transform: translateX(-100%); }
                100% { transform: translateX(100%); }
            }
        `;
        document.head.appendChild(style);
        
        document.querySelector('.brain-container').appendChild(container);
        return container;
    }

    init() {
        // Initialize with default data
        this.regionData = this.getDefaultRegions();
        this.renderChart();
    }

    getDefaultRegions() {
        return [
            {
                id: 'frontal',
                name: 'Frontal Lobe',
                color: 'rgba(79, 70, 229, 0.9)',
                activation: 0.5,
                functions: ['Planning', 'Decision Making', 'Personality'],
                description: 'Executive functions and cognitive control'
            },
            {
                id: 'parietal',
                name: 'Parietal Lobe',
                color: 'rgba(236, 72, 153, 0.9)',
                activation: 0.5,
                functions: ['Sensory Processing', 'Spatial Awareness'],
                description: 'Integrates sensory information'
            },
            {
                id: 'temporal',
                name: 'Temporal Lobe',
                color: 'rgba(16, 185, 129, 0.9)',
                activation: 0.5,
                functions: ['Memory', 'Language', 'Hearing'],
                description: 'Memory formation and auditory processing'
            },
            {
                id: 'occipital',
                name: 'Occipital Lobe',
                color: 'rgba(245, 158, 11, 0.9)',
                activation: 0.5,
                functions: ['Visual Processing', 'Pattern Recognition'],
                description: 'Primary visual cortex'
            },
            {
                id: 'cerebellum',
                name: 'Cerebellum',
                color: 'rgba(139, 92, 246, 0.9)',
                activation: 0.5,
                functions: ['Coordination', 'Balance', 'Timing'],
                description: 'Motor control and coordination'
            },
            {
                id: 'limbic',
                name: 'Limbic System',
                color: 'rgba(239, 68, 68, 0.9)',
                activation: 0.5,
                functions: ['Emotion', 'Motivation', 'Memory'],
                description: 'Emotional processing and memory'
            }
        ];
    }

    renderChart() {
        // Sort regions by activation
        const sortedRegions = [...this.regionData].sort((a, b) => b.activation - a.activation);
        
        let html = `
            <div class="chart-header">
                <h3 style="margin: 0 0 5px 0; color: #c7d2fe; font-size: 1.1rem;">
                    <i class="fas fa-brain"></i> Brain Region Activation
                </h3>
                <p style="margin: 0 0 15px 0; color: #94a3b8; font-size: 0.8rem;">
                    Based on your assessment results
                </p>
            </div>
        `;
        
        sortedRegions.forEach(region => {
            const activationPercent = Math.round(region.activation * 100);
            const gradient = this.getGradientForPercent(activationPercent);
            
            html += `
                <div class="chart-region-item" data-region="${region.id}" 
                     style="border-left-color: ${region.color};">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 5px;">
                        <div>
                            <strong style="font-size: 0.9rem; color: ${region.color}">
                                ${region.name}
                            </strong>
                            <div style="font-size: 0.75rem; color: #94a3b8; margin-top: 2px;">
                                ${region.description}
                            </div>
                        </div>
                        <div style="font-size: 0.9rem; font-weight: 700; color: #ffffff;">
                            ${activationPercent}%
                        </div>
                    </div>
                    
                    <div class="chart-progress-bar">
                        <div class="chart-progress-fill" 
                             style="width: ${activationPercent}%; background: ${gradient};">
                        </div>
                    </div>
                    
                    <div style="display: flex; flex-wrap: wrap; gap: 5px; margin-top: 8px;">
                        ${region.functions.map(func => 
                            `<span style="font-size: 0.7rem; padding: 2px 8px; background: ${this.adjustAlpha(region.color, 0.2)}; 
                              color: ${region.color}; border-radius: 10px;">${func}</span>`
                        ).join('')}
                    </div>
                </div>
            `;
        });
        
        // Add assessment summary
        if (this.assessmentData) {
            html += this.renderAssessmentSummary();
        }
        
        this.container.innerHTML = html;
        this.container.style.display = 'block';
        
        // Add click handlers
        this.addInteractionHandlers();
    }

    getGradientForPercent(percent) {
        if (percent >= 80) {
            return 'linear-gradient(90deg, #10b981, #34d399)';
        } else if (percent >= 60) {
            return 'linear-gradient(90deg, #3b82f6, #60a5fa)';
        } else if (percent >= 40) {
            return 'linear-gradient(90deg, #f59e0b, #fbbf24)';
        } else {
            return 'linear-gradient(90deg, #ef4444, #f87171)';
        }
    }

    adjustAlpha(color, alpha) {
        const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
        return match ? 
            `rgba(${match[1]}, ${match[2]}, ${match[3]}, ${alpha})` : 
            color;
    }

    renderAssessmentSummary() {
        if (!this.assessmentData) return '';
        
        const completedAssessments = Object.keys(this.assessmentData).length;
        let totalScore = 0;
        let dimensionCount = 0;
        
        Object.values(this.assessmentData).forEach(model => {
            Object.values(model).forEach(dimension => {
                totalScore += dimension.normalizedAverage || 0;
                dimensionCount++;
            });
        });
        
        const avgScore = dimensionCount > 0 ? Math.round((totalScore / dimensionCount) * 100) : 0;
        
        return `
            <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid rgba(255, 255, 255, 0.1);">
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                    <div>
                        <strong style="font-size: 0.9rem; color: #c7d2fe;">
                            <i class="fas fa-chart-line"></i> Assessment Summary
                        </strong>
                    </div>
                    <div style="font-size: 0.9rem; font-weight: 700; color: #ffffff;">
                        ${avgScore}/100
                    </div>
                </div>
                <div class="chart-progress-bar">
                    <div class="chart-progress-fill" 
                         style="width: ${avgScore}%; background: linear-gradient(90deg, #8b5cf6, #a855f7);">
                    </div>
                </div>
                <div style="display: flex; justify-content: space-between; font-size: 0.8rem; color: #94a3b8; margin-top: 5px;">
                    <span>${completedAssessments} assessments completed</span>
                    <span>${avgScore}% average</span>
                </div>
            </div>
        `;
    }

    updateFromBrain(brainVisualization) {
        if (!brainVisualization || !brainVisualization.regions) return;
        
        // Update region data from brain visualization
        this.regionData = brainVisualization.regions.map(region => ({
            id: region.key,
            name: region.name,
            color: region.color,
            activation: region.activation,
            functions: region.functions || [],
            description: region.description || ''
        }));
        
        this.renderChart();
    }

    updateFromAssessment(assessmentResults) {
        this.assessmentData = assessmentResults;
        
        // Calculate region activations from assessment results
        if (assessmentResults) {
            const regionMapping = {
                'frontal': ['conscientiousness', 'extraversion', 'analytic_intuitive', 'structured_flexible', 'self_regulation', 'motivation'],
                'parietal': ['spatial', 'holistic_analytic'],
                'temporal': ['linguistic', 'musical', 'neuroticism', 'empathy'],
                'occipital': ['spatial', 'visual'],
                'cerebellum': ['bodily_kinesthetic', 'kinesthetic'],
                'limbic': ['self_awareness', 'empathy', 'neuroticism', 'agreeableness', 'stress_tolerance', 'recovery_capacity']
            };
            
            this.regionData.forEach(region => {
                let totalScore = 0;
                let dimensionCount = 0;
                
                regionMapping[region.id]?.forEach(dimension => {
                    // Search through all assessment models for this dimension
                    Object.values(assessmentResults).forEach(model => {
                        if (model[dimension]) {
                            totalScore += model[dimension].normalizedAverage || 0;
                            dimensionCount++;
                        }
                    });
                });
                
                if (dimensionCount > 0) {
                    region.activation = Math.min(1, Math.max(0.3, totalScore / dimensionCount));
                }
            });
        }
        
        this.renderChart();
    }

    addInteractionHandlers() {
        const regionItems = this.container.querySelectorAll('.chart-region-item');
        
        regionItems.forEach(item => {
            item.addEventListener('mouseenter', (e) => {
                const regionId = e.currentTarget.dataset.region;
                this.highlightRegion(regionId);
            });
            
            item.addEventListener('mouseleave', () => {
                this.removeHighlight();
            });
            
            item.addEventListener('click', (e) => {
                const regionId = e.currentTarget.dataset.region;
                this.showRegionDetails(regionId);
            });
        });
    }

    highlightRegion(regionId) {
        // Highlight corresponding region in brain visualization
        if (window.brainVisualization) {
            window.brainVisualization.highlightRegion(regionId);
        }
        
        // Visual feedback in chart
        const item = this.container.querySelector(`[data-region="${regionId}"]`);
        if (item) {
            item.style.transform = 'scale(1.02)';
            item.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.3)';
        }
    }

    removeHighlight() {
        if (window.brainVisualization) {
            window.brainVisualization.removeHighlight();
        }
        
        const items = this.container.querySelectorAll('.chart-region-item');
        items.forEach(item => {
            item.style.transform = '';
            item.style.boxShadow = '';
        });
    }

    showRegionDetails(regionId) {
        const region = this.regionData.find(r => r.id === regionId);
        if (!region) return;
        
        const detailModal = document.createElement('div');
        detailModal.className = 'region-detail-modal';
        detailModal.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: rgba(15, 15, 35, 0.95);
            padding: 30px;
            border-radius: 20px;
            backdrop-filter: blur(20px);
            max-width: 500px;
            width: 90%;
            z-index: 1000;
            border: 1px solid rgba(99, 102, 241, 0.3);
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.8);
            color: white;
            animation: modalFadeIn 0.3s ease-out;
        `;
        
        const activationPercent = Math.round(region.activation * 100);
        
        detailModal.innerHTML = `
            <div style="margin-bottom: 20px;">
                <h3 style="margin: 0 0 10px 0; color: ${region.color}; font-size: 1.4rem; display: flex; align-items: center; gap: 10px;">
                    <i class="fas fa-brain"></i> ${region.name}
                </h3>
                <p style="color: #94a3b8; margin: 0; font-size: 0.9rem;">${region.description}</p>
            </div>
            
            <div style="margin-bottom: 25px;">
                <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
                    <span style="font-weight: 600; color: #c7d2fe;">Activation Level</span>
                    <span style="font-weight: 700; color: #ffffff; font-size: 1.2rem;">${activationPercent}%</span>
                </div>
                <div style="height: 12px; background: rgba(255, 255, 255, 0.1); border-radius: 6px; overflow: hidden;">
                    <div style="height: 100%; width: ${activationPercent}%; 
                         background: ${this.getGradientForPercent(activationPercent)}; border-radius: 6px;"></div>
                </div>
            </div>
            
            <div style="margin-bottom: 25px;">
                <h4 style="margin: 0 0 10px 0; color: #c7d2fe; font-size: 1rem;">
                    <i class="fas fa-cogs"></i> Primary Functions
                </h4>
                <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                    ${region.functions.map(func => 
                        `<span style="padding: 6px 12px; background: ${this.adjustAlpha(region.color, 0.2)}; 
                          color: ${region.color}; border-radius: 20px; font-size: 0.85rem;">${func}</span>`
                    ).join('')}
                </div>
            </div>
            
            ${this.renderRegionAssessmentDetails(regionId)}
            
            <div style="text-align: center; margin-top: 30px;">
                <button class="close-modal-btn" 
                        style="padding: 10px 30px; background: var(--primary-gradient); color: white; 
                               border: none; border-radius: 25px; font-weight: 600; cursor: pointer; 
                               transition: all 0.3s ease;">
                    <i class="fas fa-times"></i> Close
                </button>
            </div>
        `;
        
        document.body.appendChild(detailModal);
        
        // Add modal backdrop
        const backdrop = document.createElement('div');
        backdrop.className = 'modal-backdrop';
        backdrop.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            backdrop-filter: blur(5px);
            z-index: 999;
            animation: backdropFadeIn 0.3s ease-out;
        `;
        
        document.body.appendChild(backdrop);
        
        // Add animations
        const style = document.createElement('style');
        style.textContent = `
            @keyframes modalFadeIn {
                from {
                    opacity: 0;
                    transform: translate(-50%, -60%);
                }
                to {
                    opacity: 1;
                    transform: translate(-50%, -50%);
                }
            }
            
            @keyframes backdropFadeIn {
                from { opacity: 0; }
                to { opacity: 1; }
            }
            
            .close-modal-btn:hover {
                transform: scale(1.05);
                box-shadow: 0 10px 20px rgba(102, 126, 234, 0.4);
            }
        `;
        document.head.appendChild(style);
        
        // Close handlers
        const closeBtn = detailModal.querySelector('.close-modal-btn');
        closeBtn.addEventListener('click', () => {
            document.body.removeChild(detailModal);
            document.body.removeChild(backdrop);
        });
        
        backdrop.addEventListener('click', () => {
            document.body.removeChild(detailModal);
            document.body.removeChild(backdrop);
        });
    }

    renderRegionAssessmentDetails(regionId) {
        if (!this.assessmentData) return '';
        
        const regionAssessments = this.getRegionAssessments(regionId);
        if (regionAssessments.length === 0) return '';
        
        let html = `
            <div style="margin-bottom: 20px;">
                <h4 style="margin: 0 0 10px 0; color: #c7d2fe; font-size: 1rem;">
                    <i class="fas fa-chart-bar"></i> Assessment Contributions
                </h4>
                <div style="font-size: 0.85rem;">
        `;
        
        regionAssessments.forEach(assessment => {
            const score = Math.round((assessment.score || 0) * 100);
            html += `
                <div style="display: flex; justify-content: space-between; margin-bottom: 8px; padding: 8px; 
                     background: rgba(255, 255, 255, 0.05); border-radius: 6px;">
                    <span style="color: #c7d2fe;">${assessment.dimension}</span>
                    <span style="color: #ffffff; font-weight: 600;">${score}%</span>
                </div>
            `;
        });
        
        html += `
                </div>
            </div>
        `;
        
        return html;
    }

    getRegionAssessments(regionId) {
        const regionMapping = {
            'frontal': [
                { dimension: 'Conscientiousness', score: this.getDimensionScore('big-five', 'conscientiousness') },
                { dimension: 'Self-Regulation', score: this.getDimensionScore('emotional-intelligence', 'self_regulation') },
                { dimension: 'Analytic Thinking', score: this.getDimensionScore('cognitive-style', 'analytic_intuitive') }
            ],
            'parietal': [
                { dimension: 'Spatial Intelligence', score: this.getDimensionScore('multiple-intelligences', 'spatial') },
                { dimension: 'Visual Learning', score: this.getDimensionScore('learning-style', 'visual') }
            ],
            'temporal': [
                { dimension: 'Linguistic Intelligence', score: this.getDimensionScore('multiple-intelligences', 'linguistic') },
                { dimension: 'Memory Skills', score: this.getDimensionScore('multiple-intelligences', 'musical') },
                { dimension: 'Empathy', score: this.getDimensionScore('emotional-intelligence', 'empathy') }
            ],
            'occipital': [
                { dimension: 'Visual Processing', score: this.getDimensionScore('learning-style', 'visual') },
                { dimension: 'Pattern Recognition', score: this.getDimensionScore('multiple-intelligences', 'spatial') }
            ],
            'cerebellum': [
                { dimension: 'Kinesthetic Learning', score: this.getDimensionScore('learning-style', 'kinesthetic') },
                { dimension: 'Physical Coordination', score: this.getDimensionScore('multiple-intelligences', 'bodily_kinesthetic') }
            ],
            'limbic': [
                { dimension: 'Emotional Awareness', score: this.getDimensionScore('emotional-intelligence', 'self_awareness') },
                { dimension: 'Stress Resilience', score: this.getDimensionScore('stress-resilience', 'stress_tolerance') },
                { dimension: 'Empathy', score: this.getDimensionScore('emotional-intelligence', 'empathy') }
            ]
        };
        
        return regionMapping[regionId] || [];
    }

    getDimensionScore(modelId, dimension) {
        if (!this.assessmentData || !this.assessmentData[modelId] || !this.assessmentData[modelId][dimension]) {
            return 0;
        }
        return this.assessmentData[modelId][dimension].normalizedAverage || 0;
    }

    show() {
        this.container.style.display = 'block';
    }

    hide() {
        this.container.style.display = 'none';
    }

    toggle() {
        if (this.container.style.display === 'none') {
            this.show();
        } else {
            this.hide();
        }
    }
}

// Initialize function
function initializeBrainChart() {
    if (!window.brainChart) {
        window.brainChart = new BrainChartVisualization('brainChartContainer');
    }
    return window.brainChart;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BrainChartVisualization;
}