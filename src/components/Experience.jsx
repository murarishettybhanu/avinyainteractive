
import React from 'react';
import './Experience.css';

const roles = [
    {
        title: "Unreal Technical Director",
        company: "Freelance / Studio",
        period: "2023 - Present",
        desc: "Leading real-time pipelines for virtual production, specializing in LED volume workflows and camera tracking integration."
    },
    {
        title: "Creative Technologist",
        company: "Avinya Interactive",
        period: "2021 - Present",
        desc: "Developing custom tools and interactive experiences using Unreal Engine, Unity, and TouchDesigner."
    },
    {
        title: "Technical Artist",
        company: "VFX House",
        period: "2019 - 2021",
        desc: "Shader development, optimization for real-time rendering, and asset pipeline automation."
    },
    {
        title: "Mocap Technician",
        company: "Animation Studio",
        period: "2018 - 2019",
        desc: "Operating Xsens and Faceware systems for high-fidelity performance capture and retargeting."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <div className="section-header">
                    <h2>Experience</h2>
                    <p>A timeline of technical and creative leadership.</p>
                </div>

                <div className="experience-list">
                    {roles.map((role, index) => (
                        <div key={index} className="experience-item glass-panel">
                            <div className="experience-period">{role.period}</div>
                            <div className="experience-details">
                                <h3>{role.title}</h3>
                                <h4 className="company-name">{role.company}</h4>
                                <p>{role.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
