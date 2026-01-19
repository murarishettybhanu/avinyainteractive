
import React from 'react';
import './Experience.css';

const experienceData = [
    {
        company: "Deloitte",
        role: "Creative Technologist",
        period: "May 2025 - Present",
        description: [
            "Lead cinematic real-time content creation using Unreal Engine, Disguise, and LED wall systems.",
            "Define tool selection and workflow strategy in collaboration with XR, design, and production teams.",
            "Execute LED volume setups with ROE panels, Brompton processors, and RedSpy tracking for cinematic fidelity.",
            "Integrate emerging GenAI tools to enhance visual storytelling and production efficiency.",
            "Train creative teams on Unreal Engine, virtual production methodologies, and AI-assisted workflows."
        ]
    },
    {
        company: "Double Negative",
        role: "Unreal Technical Director",
        period: "Jan 2023 - May 2025",
        description: [
            "Directed end-to-end real-time pipelines for virtual production on films like “Those About to Die” and “Here”.",
            "Architected environments, lighting, sequencer workflows, and Python automation tools.",
            "Served as the primary technical bridge between on-set teams and London production units.",
            "Built structured training curricula and documentation to enable artist upskilling.",
            "Campaigned for the integration of AI and generative technologies into cinematic workflows."
        ]
    },
    {
        company: "The Mill",
        role: "Unreal Technical Artist",
        period: "March 2022 - Dec 2022",
        description: [
            "Delivered cinematic content for major brands including Disney, Amazon, and NHL.",
            "Developed custom Unreal Engine pipelines, tools, and documentation for studio-wide adoption.",
            "Mentored artists and supervisors to scale real-time capabilities across departments."
        ]
    },
    {
        company: "Retrophiles Pvt Ltd",
        role: "Unreal Technical Artist",
        period: "Nov 2020 - March 2022",
        description: [
            "Contributed to feature film virtual production and previs for 'Adipurush'.",
            "Collaborated with directors and cinematographers to conceptualize environments.",
            "Managed on-set motion capture (Xsens, Faceware) for over 100 shooting days.",
            "Transitioned traditional VFX artists to real-time Unreal Engine workflows."
        ]
    },
    {
        company: "Xlenz LLP USA",
        role: "Unity Technical Artist",
        period: "July 2019 - Nov 2020",
        description: [
            "Developed AR/VR applications for medical, architectural, and educational sectors.",
            "Defined production pipelines for in-house VR products, bridging design and engineering.",
            "Conducted large-scale technical training for 40+ students per batch with NSDC."
        ]
    }
];

const teachingData = [
    {
        title: "Unreal Authorized Instructor",
        org: "Epic Games",
        period: "Jul 2023 – Present",
        desc: "Delivering advanced Unreal Engine and VP training to studios and universities globally."
    },
    {
        title: "Unreal Engine Mentor",
        org: "CG Spectrum",
        period: "Apr 2022 – Present",
        desc: "Mentoring global cohorts of professionals transitioning into VFX and games."
    },
    {
        title: "Visiting Faculty",
        org: "SPA JNAFAU, Hyderabad",
        period: "",
        desc: "Teaching Unreal Engine curricula to B.Arch, B.Des, and B.Tech students."
    }
];

const Experience = () => {
    return (
        <section id="experience" className="experience-section">
            <div className="container">
                <div className="section-header reveal-on-scroll">
                    <h2>Professional Experience</h2>
                    <p>A timeline of technical leadership and creative engineering.</p>
                </div>

                <div className="timeline">
                    {experienceData.map((item, index) => (
                        <div key={index} className="timeline-item reveal-on-scroll">
                            <div className="timeline-marker"></div>
                            <div className="timeline-content glass-panel">
                                <div className="timeline-header">
                                    <h3 className="company-name">{item.company}</h3>
                                    <span className="role-period">{item.period}</span>
                                </div>
                                <h4 className="role-title">{item.role}</h4>
                                <ul className="role-description">
                                    {item.description.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="teaching-section reveal-on-scroll">
                    <h3 className="teaching-title">Teaching & Mentorship</h3>
                    <div className="teaching-grid">
                        {teachingData.map((item, index) => (
                            <div key={index} className="teaching-card glass-panel">
                                <h4>{item.title}</h4>
                                <div className="teaching-meta">
                                    <span className="teaching-org">{item.org}</span>
                                    {item.period && <span className="teaching-period"> | {item.period}</span>}
                                </div>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
