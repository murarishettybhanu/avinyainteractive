
import React from 'react';
import './Experience.css';

const roles = [
    {
        title: "Unreal Technical Director / Real-Time Supervisor",
        desc: "Overseeing end-to-end real-time pipelines, from pre-production to final pixel. Specializing in LED volume configuration, nDisplay setups, and on-set technical supervision."
    },
    {
        title: "Creative Technologist",
        desc: "Bridging the gap between art and engineering. Researching and developing novel workflows using emerging tech like GenAI, XR, and custom hardware integration."
    },
    {
        title: "Unreal Instructor & Mentor",
        desc: "Designing curriculum and training artists in Unreal Engine workflows, Blueprints, and Virtual Production best practices."
    },
    {
        title: "Technical Artist",
        desc: "Optimizing assets for real-time performance, developing custom shaders (HLSL/Nodes), and automating production tasks with Python."
    },
    {
        title: "Mocap Technician",
        desc: "Expertise in Xsens and Faceware systems, ensuring high-fidelity data capture, cleanup, and retargeting for digital human performance."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <div className="section-header reveal-on-scroll">
                    <h2>Roles & Expertise</h2>
                    <p>Key areas of technical and creative leadership.</p>
                </div>

                <div className="experience-list">
                    {roles.map((role, index) => (
                        <div key={index} className={`experience-item reveal-on-scroll delay-${(index % 3) * 100}`}>
                            <div className="experience-details">
                                <h3>{role.title}</h3>
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
