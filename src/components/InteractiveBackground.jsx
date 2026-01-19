
import React, { useEffect, useRef } from 'react';

const InteractiveBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        // Particle configuration
        const particleCount = 100;
        const particles = [];
        let mouseX = 0;
        let mouseY = 0;
        let targetX = 0;
        let targetY = 0;

        const colors = ['rgba(0, 220, 130, 0.5)', 'rgba(255, 255, 255, 0.3)', 'rgba(0, 220, 130, 0.2)'];

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.z = Math.random() * 2 + 0.5; // Depth factor
                this.size = Math.random() * 2;
                this.color = colors[Math.floor(Math.random() * colors.length)];
                this.baseX = this.x;
                this.baseY = this.y;
                this.density = (Math.random() * 30) + 1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                // Idle movement (always active but subtle)
                // Using sine/cosine for organic floating
                const time = Date.now() * 0.001;
                const idleX = Math.sin(time + this.z) * 0.5;
                const idleY = Math.cos(time + this.z) * 0.5;

                // Mouse influence
                // If mouse hasn't moved yet (mouseX/Y are 0 or centered), rely mostly on idle
                // We'll treat target interaction as an offset calculation

                const dx = (mouseX - width / 2) * 0.05 * this.z;
                const dy = (mouseY - height / 2) * 0.05 * this.z;

                // Smooth ease towards target position (Base + Idle + MouseOffset)
                // We continuously update baseX/baseY to simulate "drift" if desired, 
                // but for now keeping them fixed relative to origin creates a "tethered" float.
                // Let's make them drift slowly if no mouse interaction

                this.x += (this.baseX + idleX * 20 + dx - this.x) * 0.05;
                this.y += (this.baseY + idleY * 20 + dy - this.y) * 0.05;

                this.draw();
            }
        }

        const init = () => {
            particles.length = 0;
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, width, height);

            // Mouse smoothing
            targetX = mouseX;
            targetY = mouseY;

            particles.forEach(particle => particle.update());

            // Connect nearby particles for a "network" feel (optional, kept subtle)
            // connect(); 

            animationFrameId = requestAnimationFrame(animate);
        };

        /*
        const connect = () => {
            for (let a = 0; a < particles.length; a++) {
                for (let b = a; b < particles.length; b++) {
                    let dx = particles[a].x - particles[b].x;
                    let dy = particles[a].y - particles[b].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.strokeStyle = `rgba(0, 220, 130, ${0.1 - distance/1000})`;
                        ctx.lineWidth = 1;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        }
        */

        const handleResize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            init();
        };

        const handleMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        init();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 0 // Behind content but in front of gradient if needed
            }}
        />
    );
};

export default InteractiveBackground;
