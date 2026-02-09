// Neural Network Background Animation
class NeuralNetworkBackground {
    constructor(containerId) {
        this.container = document.getElementById(containerId);
        this.nodes = [];
        this.connections = [];
        this.animationFrame = null;
        this.isAnimating = true;
        this.init();
    }

    init() {
        this.createNodes();
        this.createConnections();
        this.startAnimation();
        
        // Handle window resize
        window.addEventListener('resize', () => this.handleResize());
        
        // Handle visibility changes for performance
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.stopAnimation();
            } else {
                this.startAnimation();
            }
        });
    }

    createNodes() {
        const nodeCount = Math.min(50, Math.floor(window.innerWidth * window.innerHeight / 20000));
        
        for (let i = 0; i < nodeCount; i++) {
            this.createNode();
        }
    }

    createNode() {
        const node = document.createElement('div');
        node.className = 'neural-node';
        
        // Random position within viewport
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        // Random size and color
        const size = 2 + Math.random() * 4;
        const hue = 200 + Math.random() * 160;
        const saturation = 70 + Math.random() * 30;
        const lightness = 50 + Math.random() * 30;
        
        // Position and style
        node.style.position = 'absolute';
        node.style.left = `${x}%`;
        node.style.top = `${y}%`;
        node.style.width = `${size}px`;
        node.style.height = `${size}px`;
        node.style.borderRadius = '50%';
        node.style.background = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
        node.style.boxShadow = `0 0 ${size * 2}px hsl(${hue}, ${saturation}%, ${lightness}%)`;
        
        // Random animation properties
        const delay = Math.random() * 4;
        const duration = 3 + Math.random() * 2;
        node.style.animation = `pulse ${duration}s infinite ${delay}s`;
        
        this.container.appendChild(node);
        this.nodes.push({
            element: node,
            x, y, size, hue, saturation, lightness,
            originalX: x,
            originalY: y,
            speed: 0.1 + Math.random() * 0.3,
            angle: Math.random() * Math.PI * 2
        });
    }

    createConnections() {
        // Clear existing connections
        this.connections.forEach(conn => {
            if (conn.element.parentNode) {
                conn.element.parentNode.removeChild(conn.element);
            }
        });
        this.connections = [];
        
        // Create connections between nearby nodes
        for (let i = 0; i < this.nodes.length; i++) {
            for (let j = i + 1; j < this.nodes.length; j++) {
                const node1 = this.nodes[i];
                const node2 = this.nodes[j];
                
                // Calculate distance
                const dx = node1.x - node2.x;
                const dy = node1.y - node2.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                
                // Connect if nodes are close enough
                if (distance < 20) {
                    this.createConnection(node1, node2, distance);
                }
            }
        }
    }

    createConnection(node1, node2, distance) {
        const connection = document.createElement('div');
        connection.className = 'neural-connection';
        
        // Calculate connection properties
        const angle = Math.atan2(node2.y - node1.y, node2.x - node1.x) * 180 / Math.PI;
        const length = distance;
        
        // Style connection
        connection.style.position = 'absolute';
        connection.style.left = `${node1.x}%`;
        connection.style.top = `${node1.y}%`;
        connection.style.width = `${length}%`;
        connection.style.height = '1px';
        connection.style.background = `linear-gradient(90deg, 
            hsl(${node1.hue}, ${node1.saturation}%, ${node1.lightness}%), 
            hsl(${node2.hue}, ${node2.saturation}%, ${node2.lightness}%))`;
        connection.style.transform = `rotate(${angle}deg)`;
        connection.style.transformOrigin = '0 0';
        connection.style.opacity = '0.3';
        connection.style.transition = 'opacity 0.3s ease';
        
        this.container.appendChild(connection);
        this.connections.push({
            element: connection,
            node1, node2, distance,
            originalDistance: distance
        });
    }

    startAnimation() {
        if (this.animationFrame) return;
        
        const animate = () => {
            if (!this.isAnimating) return;
            
            const time = Date.now() / 1000;
            
            // Update nodes
            this.nodes.forEach(node => {
                // Gentle floating motion
                node.x = node.originalX + Math.sin(time * node.speed + node.angle) * 0.5;
                node.y = node.originalY + Math.cos(time * node.speed + node.angle) * 0.5;
                
                // Update element position
                node.element.style.left = `${node.x}%`;
                node.element.style.top = `${node.y}%`;
                
                // Pulsing effect
                const pulse = 1 + 0.3 * Math.sin(time * 2 + node.angle);
                node.element.style.transform = `scale(${pulse})`;
            });
            
            // Update connections
            this.connections.forEach(conn => {
                // Calculate current distance between nodes
                const dx = conn.node1.x - conn.node2.x;
                const dy = conn.node1.y - conn.node2.y;
                const currentDistance = Math.sqrt(dx * dx + dy * dy);
                
                // Update connection if nodes have moved significantly
                if (Math.abs(currentDistance - conn.distance) > 0.1) {
                    const angle = Math.atan2(conn.node2.y - conn.node1.y, conn.node2.x - conn.node1.x) * 180 / Math.PI;
                    
                    conn.element.style.width = `${currentDistance}%`;
                    conn.element.style.transform = `rotate(${angle}deg)`;
                    conn.distance = currentDistance;
                }
                
                // Pulsing opacity
                const opacity = 0.2 + 0.2 * Math.sin(time * 1.5 + conn.node1.angle);
                conn.element.style.opacity = opacity.toString();
            });
            
            this.animationFrame = requestAnimationFrame(animate);
        };
        
        this.isAnimating = true;
        animate();
    }

    stopAnimation() {
        this.isAnimating = false;
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
            this.animationFrame = null;
        }
    }

    handleResize() {
        // Recreate connections on resize
        this.createConnections();
    }

    updateIntensity(intensity) {
        // Adjust animation intensity based on user interaction or other factors
        this.nodes.forEach(node => {
            node.element.style.animationDuration = `${3 / intensity}s`;
        });
    }

    destroy() {
        this.stopAnimation();
        this.nodes.forEach(node => {
            if (node.element.parentNode) {
                node.element.parentNode.removeChild(node.element);
            }
        });
        this.connections.forEach(conn => {
            if (conn.element.parentNode) {
                conn.element.parentNode.removeChild(conn.element);
            }
        });
        this.nodes = [];
        this.connections = [];
    }
}

// Initialize neural background when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.neuralBackground = new NeuralNetworkBackground('neuralBg');
});

// Export for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NeuralNetworkBackground;
}