// Advanced Brain Visualization System with Proper Chart Integration
class BrainVisualization {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext('2d');
        this.regions = [];
        this.paths = [];
        this.animationFrame = null;
        this.isAnimating = false;
        this.assessmentData = null;
        this.regionActivation = {};
        this.time = 0;
        
        // Enhanced brain region definitions with functional mapping
        this.brainRegions = {
            frontal: {
                name: "Frontal Lobe",
                description: "Executive functions, decision making, planning, personality",
                color: "rgba(79, 70, 229, 0.9)",
                position: { x: 0.45, y: 0.3 },
                radius: 0.13,
                functions: ["Planning", "Problem Solving", "Emotional Control", "Personality"],
                assessmentMapping: {
                    'big-five': ['conscientiousness', 'extraversion'],
                    'cognitive-style': ['analytic_intuitive', 'structured_flexible'],
                    'emotional-intelligence': ['self_regulation', 'motivation']
                }
            },
            parietal: {
                name: "Parietal Lobe",
                description: "Sensory processing, spatial awareness, attention",
                color: "rgba(236, 72, 153, 0.9)",
                position: { x: 0.65, y: 0.45 },
                radius: 0.11,
                functions: ["Spatial Reasoning", "Attention", "Sensory Integration"],
                assessmentMapping: {
                    'multiple-intelligences': ['spatial'],
                    'cognitive-style': ['holistic_analytic']
                }
            },
            temporal: {
                name: "Temporal Lobe",
                description: "Memory, language processing, auditory perception",
                color: "rgba(16, 185, 129, 0.9)",
                position: { x: 0.55, y: 0.65 },
                radius: 0.12,
                functions: ["Memory", "Language", "Hearing", "Emotion Processing"],
                assessmentMapping: {
                    'multiple-intelligences': ['linguistic', 'musical'],
                    'emotional-intelligence': ['empathy'],
                    'big-five': ['neuroticism']
                }
            },
            occipital: {
                name: "Occipital Lobe",
                description: "Visual processing, pattern recognition",
                color: "rgba(245, 158, 11, 0.9)",
                position: { x: 0.3, y: 0.6 },
                radius: 0.1,
                functions: ["Visual Processing", "Pattern Recognition", "Color Detection"],
                assessmentMapping: {
                    'multiple-intelligences': ['spatial'],
                    'learning-style': ['visual']
                }
            },
            cerebellum: {
                name: "Cerebellum",
                description: "Coordination, balance, motor learning, cognitive functions",
                color: "rgba(139, 92, 246, 0.9)",
                position: { x: 0.7, y: 0.75 },
                radius: 0.09,
                functions: ["Coordination", "Balance", "Timing", "Attention"],
                assessmentMapping: {
                    'multiple-intelligences': ['bodily_kinesthetic'],
                    'learning-style': ['kinesthetic']
                }
            },
            limbic: {
                name: "Limbic System",
                description: "Emotions, motivation, memory formation",
                color: "rgba(239, 68, 68, 0.9)",
                position: { x: 0.4, y: 0.5 },
                radius: 0.08,
                functions: ["Emotion", "Motivation", "Memory", "Learning"],
                assessmentMapping: {
                    'emotional-intelligence': ['self_awareness', 'empathy'],
                    'big-five': ['neuroticism', 'agreeableness'],
                    'stress-resilience': ['stress_tolerance', 'recovery_capacity']
                }
            }
        };
        
        this.init();
    }

    init() {
        this.setupCanvas();
        this.createRegions();
        this.createNeuralPaths();
        this.startAnimation();
        
        window.addEventListener('resize', () => this.handleResize());
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.stopAnimation();
            } else {
                this.startAnimation();
            }
        });
    }

    setupCanvas() {
        const container = this.canvas.parentElement;
        const dpr = window.devicePixelRatio || 1;
        
        // Set canvas dimensions
        this.canvas.width = container.clientWidth * dpr;
        this.canvas.height = container.clientHeight * dpr;
        this.ctx.scale(dpr, dpr);
        
        // Set display dimensions
        this.canvas.style.width = `${container.clientWidth}px`;
        this.canvas.style.height = `${container.clientHeight}px`;
    }

    createRegions() {
        this.regions = [];
        
        Object.keys(this.brainRegions).forEach(regionKey => {
            const region = this.brainRegions[regionKey];
            this.regions.push({
                ...region,
                key: regionKey,
                activation: 0.3 + Math.random() * 0.2, // Base activation
                currentRadius: region.radius,
                pulsePhase: Math.random() * Math.PI * 2,
                glowIntensity: 0,
                connections: []
            });
        });
    }

    createNeuralPaths() {
        this.paths = [];
        const numPaths = 40;
        
        for (let i = 0; i < numPaths; i++) {
            const startRegion = this.regions[Math.floor(Math.random() * this.regions.length)];
            const endRegion = this.regions[Math.floor(Math.random() * this.regions.length)];
            
            if (startRegion !== endRegion) {
                // Calculate path strength based on region similarity
                const similarity = Math.random() * 0.7 + 0.3;
                
                this.paths.push({
                    start: startRegion,
                    end: endRegion,
                    progress: Math.random(),
                    speed: 0.1 + Math.random() * 0.4,
                    width: 0.5 + Math.random() * 1.5,
                    color: this.blendColors(startRegion.color, endRegion.color, similarity),
                    phase: Math.random() * Math.PI * 2,
                    strength: similarity,
                    active: Math.random() > 0.3
                });
                
                // Add to region connections
                startRegion.connections.push(endRegion);
                endRegion.connections.push(startRegion);
            }
        }
    }

    blendColors(color1, color2, ratio = 0.5) {
        const rgb1 = this.extractRGB(color1);
        const rgb2 = this.extractRGB(color2);
        
        const r = Math.floor(rgb1.r * (1 - ratio) + rgb2.r * ratio);
        const g = Math.floor(rgb1.g * (1 - ratio) + rgb2.g * ratio);
        const b = Math.floor(rgb1.b * (1 - ratio) + rgb2.b * ratio);
        
        return `rgba(${r}, ${g}, ${b}, 0.7)`;
    }

    extractRGB(rgbaString) {
        const match = rgbaString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
        return match ? {
            r: parseInt(match[1]),
            g: parseInt(match[2]),
            b: parseInt(match[3])
        } : { r: 0, g: 0, b: 0 };
    }

    startAnimation() {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        this.animate();
    }

    stopAnimation() {
        this.isAnimating = false;
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = null;
        }
    }

    animate() {
        if (!this.isAnimating) return;
        
        this.time += 0.016; // Approximately 60fps
        
        this.clearCanvas();
        this.drawBrainSilhouette();
        this.updateRegions();
        this.drawRegions();
        this.updatePaths();
        this.drawPaths();
        this.drawNeuralActivity();
        this.drawRegionLabels();
        this.drawFunctionIndicators();
        
        this.animationFrame = requestAnimationFrame(() => this.animate());
    }

    clearCanvas() {
        const width = this.canvas.width / (window.devicePixelRatio || 1);
        const height = this.canvas.height / (window.devicePixelRatio || 1);
        
        // Create gradient background
        const gradient = this.ctx.createRadialGradient(
            width * 0.5, height * 0.5, 0,
            width * 0.5, height * 0.5, Math.max(width, height) * 0.8
        );
        
        gradient.addColorStop(0, 'rgba(15, 15, 35, 0.95)');
        gradient.addColorStop(1, 'rgba(8, 8, 20, 0.95)');
        
        this.ctx.fillStyle = gradient;
        this.ctx.fillRect(0, 0, width, height);
    }

    drawBrainSilhouette() {
        const width = this.canvas.width / (window.devicePixelRatio || 1);
        const height = this.canvas.height / (window.devicePixelRatio || 1);
        
        this.ctx.save();
        
        // Draw brain outline with more detail
        this.ctx.beginPath();
        
        // Left hemisphere
        this.ctx.moveTo(width * 0.35, height * 0.15);
        this.ctx.bezierCurveTo(
            width * 0.15, height * 0.3,
            width * 0.15, height * 0.7,
            width * 0.35, height * 0.85
        );
        
        // Central sulcus left
        this.ctx.bezierCurveTo(
            width * 0.4, height * 0.8,
            width * 0.4, height * 0.8,
            width * 0.45, height * 0.75
        );
        
        // Corpus callosum curve
        this.ctx.bezierCurveTo(
            width * 0.5, height * 0.7,
            width * 0.5, height * 0.7,
            width * 0.55, height * 0.75
        );
        
        // Right hemisphere
        this.ctx.bezierCurveTo(
            width * 0.6, height * 0.8,
            width * 0.6, height * 0.8,
            width * 0.65, height * 0.85
        );
        this.ctx.bezierCurveTo(
            width * 0.85, height * 0.7,
            width * 0.85, height * 0.3,
            width * 0.65, height * 0.15
        );
        
        // Central sulcus right
        this.ctx.bezierCurveTo(
            width * 0.6, height * 0.2,
            width * 0.6, height * 0.2,
            width * 0.55, height * 0.25
        );
        
        // Corpus callosum top
        this.ctx.bezierCurveTo(
            width * 0.5, height * 0.3,
            width * 0.5, height * 0.3,
            width * 0.45, height * 0.25
        );
        this.ctx.bezierCurveTo(
            width * 0.4, height * 0.2,
            width * 0.4, height * 0.2,
            width * 0.35, height * 0.15
        );
        
        this.ctx.closePath();
        
        // Fill with subtle gradient
        const brainGradient = this.ctx.createLinearGradient(0, 0, width, height);
        brainGradient.addColorStop(0, 'rgba(79, 70, 229, 0.08)');
        brainGradient.addColorStop(1, 'rgba(139, 92, 246, 0.05)');
        
        this.ctx.fillStyle = brainGradient;
        this.ctx.fill();
        
        // Stroke with glowing effect
        this.ctx.strokeStyle = 'rgba(99, 102, 241, 0.3)';
        this.ctx.lineWidth = 2;
        this.ctx.shadowBlur = 15;
        this.ctx.shadowColor = 'rgba(99, 102, 241, 0.5)';
        this.ctx.stroke();
        
        this.ctx.restore();
    }

    updateRegions() {
        this.regions.forEach(region => {
            // Update activation pulse
            const pulse = 0.8 + 0.4 * Math.sin(this.time * 1.5 + region.pulsePhase) * region.activation;
            region.currentRadius = region.radius * pulse;
            
            // Update glow intensity based on activation
            region.glowIntensity = region.activation * (0.7 + 0.3 * Math.sin(this.time * 2 + region.pulsePhase));
            
            // Update pulse phase
            region.pulsePhase += 0.01;
        });
    }

    drawRegions() {
        const width = this.canvas.width / (window.devicePixelRatio || 1);
        const height = this.canvas.height / (window.devicePixelRatio || 1);
        
        this.regions.forEach(region => {
            const x = width * region.position.x;
            const y = height * region.position.y;
            const radius = Math.min(width, height) * region.currentRadius;
            
            // Draw region glow
            const glowRadius = radius * (1 + region.glowIntensity * 0.5);
            const glowGradient = this.ctx.createRadialGradient(
                x, y, radius * 0.3,
                x, y, glowRadius
            );
            
            glowGradient.addColorStop(0, this.adjustAlpha(region.color, 0.9 * region.activation));
            glowGradient.addColorStop(0.5, this.adjustAlpha(region.color, 0.3 * region.activation));
            glowGradient.addColorStop(1, this.adjustAlpha(region.color, 0));
            
            this.ctx.save();
            this.ctx.globalCompositeOperation = 'lighter';
            this.ctx.beginPath();
            this.ctx.arc(x, y, glowRadius, 0, Math.PI * 2);
            this.ctx.fillStyle = glowGradient;
            this.ctx.fill();
            this.ctx.restore();
            
            // Draw region core
            this.ctx.beginPath();
            this.ctx.arc(x, y, radius * 0.7, 0, Math.PI * 2);
            
            const coreGradient = this.ctx.createRadialGradient(
                x, y, 0,
                x, y, radius * 0.7
            );
            coreGradient.addColorStop(0, this.adjustAlpha(region.color, 0.8));
            coreGradient.addColorStop(1, this.adjustAlpha(region.color, 0.4));
            
            this.ctx.fillStyle = coreGradient;
            this.ctx.fill();
            
            // Draw region border
            this.ctx.beginPath();
            this.ctx.arc(x, y, radius * 0.7, 0, Math.PI * 2);
            this.ctx.strokeStyle = this.adjustAlpha(region.color, 0.6);
            this.ctx.lineWidth = 2;
            this.ctx.stroke();
        });
    }

    updatePaths() {
        this.paths.forEach(path => {
            if (path.active) {
                path.progress += path.speed * 0.02 * path.strength;
                if (path.progress > 1) path.progress = 0;
                
                // Update activity based on connected regions' activation
                const avgActivation = (path.start.activation + path.end.activation) / 2;
                path.strength = Math.max(0.2, avgActivation);
                
                // Pulsing width
                const widthPulse = 0.5 + 0.5 * Math.sin(this.time * 3 + path.phase);
                path.currentWidth = path.width * widthPulse * path.strength;
            }
        });
    }

    drawPaths() {
        const width = this.canvas.width / (window.devicePixelRatio || 1);
        const height = this.canvas.height / (window.devicePixelRatio || 1);
        
        this.paths.forEach(path => {
            if (!path.active) return;
            
            const startX = width * path.start.position.x;
            const startY = height * path.start.position.y;
            const endX = width * path.end.position.x;
            const endY = height * path.end.position.y;
            
            // Current point along path
            const currentX = startX + (endX - startX) * path.progress;
            const currentY = startY + (endY - startY) * path.progress;
            
            // Draw path with gradient
            const pathGradient = this.ctx.createLinearGradient(startX, startY, endX, endY);
            pathGradient.addColorStop(0, this.adjustAlpha(path.start.color, 0.6 * path.strength));
            pathGradient.addColorStop(1, this.adjustAlpha(path.end.color, 0.6 * path.strength));
            
            this.ctx.save();
            this.ctx.globalCompositeOperation = 'lighter';
            this.ctx.beginPath();
            this.ctx.moveTo(startX, startY);
            this.ctx.lineTo(currentX, currentY);
            this.ctx.strokeStyle = pathGradient;
            this.ctx.lineWidth = path.currentWidth;
            this.ctx.lineCap = 'round';
            this.ctx.stroke();
            this.ctx.restore();
            
            // Draw traveling neuron
            this.ctx.save();
            this.ctx.globalCompositeOperation = 'lighter';
            this.ctx.beginPath();
            this.ctx.arc(currentX, currentY, 3 + path.currentWidth, 0, Math.PI * 2);
            this.ctx.fillStyle = path.color;
            this.ctx.shadowBlur = 10;
            this.ctx.shadowColor = path.color;
            this.ctx.fill();
            this.ctx.restore();
        });
    }

    drawNeuralActivity() {
        const width = this.canvas.width / (window.devicePixelRatio || 1);
        const height = this.canvas.height / (window.devicePixelRatio || 1);
        
        // Draw random neural sparks
        for (let i = 0; i < 20; i++) {
            const region = this.regions[Math.floor(Math.random() * this.regions.length)];
            if (region.activation < 0.4) continue;
            
            const angle = Math.random() * Math.PI * 2;
            const distance = Math.random() * Math.min(width, height) * region.currentRadius * 0.5;
            const x = width * region.position.x + Math.cos(angle) * distance;
            const y = height * region.position.y + Math.sin(angle) * distance;
            
            const size = 1 + Math.random() * 3 * region.activation;
            const alpha = 0.3 + Math.random() * 0.7 * region.activation;
            
            this.ctx.save();
            this.ctx.globalCompositeOperation = 'lighter';
            this.ctx.beginPath();
            this.ctx.arc(x, y, size, 0, Math.PI * 2);
            this.ctx.fillStyle = this.adjustAlpha(region.color, alpha);
            this.ctx.shadowBlur = size * 3;
            this.ctx.shadowColor = region.color;
            this.ctx.fill();
            this.ctx.restore();
        }
    }

    drawRegionLabels() {
        const width = this.canvas.width / (window.devicePixelRatio || 1);
        const height = this.canvas.height / (window.devicePixelRatio || 1);
        
        this.ctx.font = 'bold 14px Inter, sans-serif';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        
        this.regions.forEach(region => {
            const x = width * region.position.x;
            const y = height * (region.position.y + region.currentRadius) + 25;
            
            // Label background with glow
            this.ctx.save();
            this.ctx.shadowBlur = 10;
            this.ctx.shadowColor = region.color;
            this.ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
            this.ctx.fillRect(x - 70, y - 18, 140, 36);
            this.ctx.restore();
            
            // Region name
            this.ctx.fillStyle = region.activation > 0.5 ? '#ffffff' : '#94a3b8';
            this.ctx.fillText(region.name, x, y - 3);
            
            // Activation percentage
            this.ctx.font = '12px Inter, sans-serif';
            const activationPercent = Math.round(region.activation * 100);
            this.ctx.fillText(`${activationPercent}% active`, x, y + 12);
            this.ctx.font = 'bold 14px Inter, sans-serif';
        });
    }

    drawFunctionIndicators() {
        const width = this.canvas.width / (window.devicePixelRatio || 1);
        const height = this.canvas.height / (window.devicePixelRatio || 1);
        
        this.ctx.font = '11px Inter, sans-serif';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        
        this.regions.forEach(region => {
            region.functions.forEach((func, index) => {
                const angle = (Math.PI * 2 / region.functions.length) * index;
                const distance = Math.min(width, height) * region.currentRadius * 1.2;
                const x = width * region.position.x + Math.cos(angle) * distance;
                const y = height * region.position.y + Math.sin(angle) * distance;
                
                // Draw function indicator
                this.ctx.save();
                this.ctx.globalAlpha = 0.7 * region.activation;
                this.ctx.beginPath();
                this.ctx.arc(x, y, 4, 0, Math.PI * 2);
                this.ctx.fillStyle = region.color;
                this.ctx.fill();
                
                // Draw connecting line
                this.ctx.beginPath();
                this.ctx.moveTo(width * region.position.x, height * region.position.y);
                this.ctx.lineTo(x, y);
                this.ctx.strokeStyle = this.adjustAlpha(region.color, 0.3);
                this.ctx.lineWidth = 1;
                this.ctx.stroke();
                
                // Draw function label
                this.ctx.fillStyle = '#ffffff';
                this.ctx.fillText(func, x, y + 15);
                this.ctx.restore();
            });
        });
    }

    adjustAlpha(color, alpha) {
        const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
        return match ? 
            `rgba(${match[1]}, ${match[2]}, ${match[3]}, ${alpha})` : 
            color;
    }

    updateAssessmentData(assessmentResults) {
        if (!assessmentResults) return;
        
        // Reset activations
        this.regionActivation = {};
        Object.keys(this.brainRegions).forEach(key => {
            this.regionActivation[key] = 0.3; // Base activation
        });
        
        // Calculate region activations from assessment results
        Object.keys(assessmentResults).forEach(modelId => {
            const modelResults = assessmentResults[modelId];
            if (!modelResults) return;
            
            Object.keys(modelResults).forEach(dimension => {
                const dimensionScore = modelResults[dimension]?.normalizedAverage || 0;
                
                // Map dimension to brain regions
                Object.keys(this.brainRegions).forEach(regionKey => {
                    const region = this.brainRegions[regionKey];
                    if (region.assessmentMapping[modelId]?.includes(dimension)) {
                        this.regionActivation[regionKey] += dimensionScore * 0.2;
                    }
                });
            });
        });
        
        // Normalize activations
        Object.keys(this.regionActivation).forEach(key => {
            this.regionActivation[key] = Math.min(1, Math.max(0.3, this.regionActivation[key]));
            
            // Apply to visualization regions
            const region = this.regions.find(r => r.key === key);
            if (region) {
                region.activation = this.regionActivation[key];
            }
        });
        
        // Update path activity based on new activations
        this.updatePathActivity();
        
        // Update UI with assessment insights
        this.updateAssessmentInsights(assessmentResults);
    }

    updatePathActivity() {
        this.paths.forEach(path => {
            const startActivation = path.start.activation;
            const endActivation = path.end.activation;
            const avgActivation = (startActivation + endActivation) / 2;
            
            path.active = avgActivation > 0.4;
            path.strength = avgActivation;
            path.speed = 0.1 + avgActivation * 0.3;
            path.width = 0.5 + avgActivation * 2;
            
            // Update color based on activation
            path.color = this.blendColors(
                this.adjustAlpha(path.start.color, 0.3 + avgActivation * 0.7),
                this.adjustAlpha(path.end.color, 0.3 + avgActivation * 0.7),
                avgActivation
            );
        });
    }

    updateAssessmentInsights(assessmentResults) {
        const insights = [];
        
        // Generate insights based on assessment results
        if (assessmentResults['big-five']) {
            const openness = assessmentResults['big-five']['openness']?.average || 0;
            if (openness > 4) {
                insights.push("High Openness: Strong creative and imaginative thinking");
                this.regionActivation.frontal += 0.2;
            }
            
            const conscientiousness = assessmentResults['big-five']['conscientiousness']?.average || 0;
            if (conscientiousness > 4) {
                insights.push("High Conscientiousness: Excellent planning and organizational skills");
                this.regionActivation.frontal += 0.2;
            }
        }
        
        if (assessmentResults['multiple-intelligences']) {
            const spatial = assessmentResults['multiple-intelligences']['spatial']?.average || 0;
            if (spatial > 4) {
                insights.push("Strong Spatial Intelligence: Excellent visual-spatial processing");
                this.regionActivation.parietal += 0.3;
                this.regionActivation.occipital += 0.2;
            }
            
            const linguistic = assessmentResults['multiple-intelligences']['linguistic']?.average || 0;
            if (linguistic > 4) {
                insights.push("Strong Linguistic Intelligence: Advanced language processing");
                this.regionActivation.temporal += 0.3;
            }
        }
        
        if (assessmentResults['emotional-intelligence']) {
            const eqAvg = Object.values(assessmentResults['emotional-intelligence'])
                .reduce((sum, dim) => sum + (dim?.average || 0), 0) / 6;
            if (eqAvg > 3.5) {
                insights.push("High Emotional Intelligence: Strong emotional processing and regulation");
                this.regionActivation.limbic += 0.3;
                this.regionActivation.frontal += 0.2;
            }
        }
        
        // Update overlay with insights
        this.updateInsightsOverlay(insights);
    }

    updateInsightsOverlay(insights) {
        const overlay = document.querySelector('.brain-overlay');
        if (overlay && insights.length > 0) {
            let html = `
                <h4><i class="fas fa-brain"></i> Neural Activation Map</h4>
                <p>Your dominant cognitive patterns visualized</p>
                <div class="insights">
                    <h5><i class="fas fa-lightbulb"></i> Key Insights:</h5>
                    <ul>
            `;
            
            insights.slice(0, 3).forEach(insight => {
                html += `<li>${insight}</li>`;
            });
            
            html += `
                    </ul>
                </div>
            `;
            
            overlay.innerHTML = html;
        }
    }

    handleResize() {
        this.setupCanvas();
    }

    createChart() {
        // Create a separate chart visualization for detailed results
        const chartContainer = document.createElement('div');
        chartContainer.className = 'brain-chart-container';
        chartContainer.style.cssText = `
            position: absolute;
            top: 20px;
            right: 20px;
            background: rgba(0, 0, 0, 0.7);
            padding: 20px;
            border-radius: 10px;
            backdrop-filter: blur(10px);
            max-width: 300px;
            color: white;
            font-family: Inter, sans-serif;
            z-index: 10;
        `;
        
        let chartHTML = `
            <h4 style="margin-bottom: 15px; color: #c7d2fe;">
                <i class="fas fa-chart-bar"></i> Region Activation Analysis
            </h4>
        `;
        
        // Sort regions by activation
        const sortedRegions = [...this.regions].sort((a, b) => b.activation - a.activation);
        
        sortedRegions.forEach(region => {
            const activationPercent = Math.round(region.activation * 100);
            const barWidth = Math.max(20, activationPercent * 2);
            
            chartHTML += `
                <div style="margin-bottom: 12px;">
                    <div style="display: flex; justify-content: space-between; margin-bottom: 5px;">
                        <span style="font-size: 12px; color: ${region.color}">
                            ${region.name}
                        </span>
                        <span style="font-size: 12px; font-weight: 600;">
                            ${activationPercent}%
                        </span>
                    </div>
                    <div style="height: 6px; background: rgba(255,255,255,0.1); border-radius: 3px; overflow: hidden;">
                        <div style="height: 100%; width: ${barWidth}px; background: ${region.color}; border-radius: 3px;"></div>
                    </div>
                </div>
            `;
        });
        
        chartContainer.innerHTML = chartHTML;
        
        // Add to brain container
        const brainContainer = document.querySelector('.brain-container');
        if (brainContainer) {
            // Remove existing chart if any
            const existingChart = brainContainer.querySelector('.brain-chart-container');
            if (existingChart) {
                existingChart.remove();
            }
            brainContainer.appendChild(chartContainer);
        }
    }

    destroy() {
        this.stopAnimation();
        this.regions = [];
        this.paths = [];
    }
}

// Initialize function
function initializeBrainVisualization() {
    if (!window.brainVisualization) {
        window.brainVisualization = new BrainVisualization('brainCanvas');
    }
    return window.brainVisualization;
}

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = BrainVisualization;
}