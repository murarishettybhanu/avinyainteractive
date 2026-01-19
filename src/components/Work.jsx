
import React from 'react';
import { Play } from 'lucide-react';
import './Work.css';

const projects = [
    {
        title: "Virtual Production Environments",
        category: "Virtual Production / Unreal Engine",
        url: "https://youtu.be/Q0-G3h27wFA",
        videoId: "Q0-G3h27wFA"
    },
    {
        title: "Vera AI Trailer Rough",
        category: "AI Visualization / Trailer",
        url: "https://youtu.be/JHSpk4rtfDk",
        videoId: "JHSpk4rtfDk"
    },
    {
        title: "Unreal Showreel",
        category: "Unreal Engine / Showreel",
        url: "https://youtu.be/oB8yZfsfExI",
        videoId: "oB8yZfsfExI"
    },
    {
        title: "Nill BLR Realtime Team Reel NDA",
        category: "Real-Time / Team Reel",
        url: "https://youtu.be/icBBq_GJWcE",
        videoId: "icBBq_GJWcE"
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
                        <a
                            key={index}
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="work-card reveal-on-scroll"
                        >
                            <div className="work-thumbnail">
                                <img
                                    src={`https://img.youtube.com/vi/${project.videoId}/maxresdefault.jpg`}
                                    alt={project.title}
                                    onError={(e) => { e.target.src = `https://img.youtube.com/vi/${project.videoId}/hqdefault.jpg`; }}
                                />
                                <div className="play-overlay">
                                    <Play size={48} fill="white" />
                                </div>
                            </div>
                            <div className="work-info">
                                <h3>{project.title}</h3>
                                <span>{project.category}</span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
