
import React from 'react';
import './Capabilities.css';

const capabilities = [
    {
        category: "Real-Time Engines",
        items: ["Unreal Engine 5", "Unity", "TouchDesigner"]
    },
    {
        category: "3D & Animation",
        items: ["Maya", "Houdini", "Blender", "3ds Max", "MotionBuilder"]
    },
    {
        category: "Virtual Production",
        items: ["Disguise", "Brompton", "RedSpy", "Vicon", "OptiTrack"]
    },
    {
        category: "Development",
        items: ["Python", "C++", "Blueprints", "HLSL/GLSL", "React"]
    },
    {
        category: "Compositing & Edit",
        items: ["Nuke", "Davinci Resolve", "Premiere Pro", "After Effects"]
    },
    {
        category: "GenAI & Emerging",
        items: ["Stable Diffusion", "Midjourney", "ChatGPT/Claude API", "Nerf/Gaussian Splats"]
    }
];

const Capabilities = () => {
    return (
        <section id="capabilities" className="capabilities-section">
            <div className="container">
                <div className="section-header reveal-on-scroll">
                    <h2>Capabilities</h2>
                    <p>Tools & Technologies powering the workflow.</p>
                </div>

                <div className="capabilities-grid">
                    {capabilities.map((cap, index) => (
                        <div key={index} className={`capability-card glass-panel reveal-on-scroll delay-${(index % 3) * 100}`}>
                            <h3 className="capability-category">{cap.category}</h3>
                            <div className="capability-tags">
                                {cap.items.map((item, i) => (
                                    <span key={i} className="tech-tag">{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Capabilities;
