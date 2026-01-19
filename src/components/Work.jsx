
import React from 'react';
import { Play } from 'lucide-react';
import './Work.css';

const projects = [
    {
        title: "Virtual Production Demo",
        category: "ICVFX / Unreal Engine",
        color: "#00dc82"
    },
    {
        title: "Automotive Configurator",
        category: "Real-Time / Pixel Streaming",
        color: "#007bff"
    },
    {
        title: "Cinematic Short Film",
        category: "Director / Tech Director",
        color: "#ff0055"
    },
    {
        title: "AR Brand Experience",
        category: "Mobile AR / Unity",
        color: "#ffaa00"
    }
];

const Work = () => {
    return (
        <section id="work" className="work-section">
            <div className="container">
                <div className="section-header reveal-on-scroll">
                    <h2>Selected Work</h2>
                    <p>Highlighting recent projects in virtual production and immersive tech.</p>
                </div>

                <div className="work-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="work-card reveal-on-scroll">
                            <div className="work-thumbnail" style={{ '--project-color': project.color }}>
                                <div className="play-overlay">
                                    <Play size={48} fill="white" />
                                </div>
                            </div>
                            <div className="work-info">
                                <h3>{project.title}</h3>
                                <span>{project.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
