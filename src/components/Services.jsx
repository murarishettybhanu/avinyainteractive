
import React from 'react';
import { Monitor, Film, Camera, Code, Layers, Box } from 'lucide-react';
import './Services.css';

const servicesData = [
    {
        icon: <Film size={32} />,
        title: "Virtual Production",
        desc: "LED volume workflows, In-Camera VFX, and real-time on-set supervision."
    },
    {
        icon: <Monitor size={32} />,
        title: "Real-Time Visualization",
        desc: "Previs, techvis, and final pixel rendering using Unreal Engine."
    },
    {
        icon: <Camera size={32} />,
        title: "Motion Capture",
        desc: "Full body and facial performance capture integration and cleanup."
    },
    {
        icon: <Layers size={32} />,
        title: "CG & VFX",
        desc: "High-end visual effects for commercials, features, and immersive experiences."
    },
    {
        icon: <Code size={32} />,
        title: "Pipeline Tools",
        desc: "Check automation, custom Python tools, and workflow optimization."
    },
    {
        icon: <Box size={32} />,
        title: "XR Experiences",
        desc: "Building immersive AR/VR applications for enterprise and education."
    }
];

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="container">
                <div className="section-header reveal-on-scroll">
                    <h2>Services</h2>
                    <p>End-to-end solutions for the virtual production pipeline.</p>
                </div>

                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div key={index} className={`service-card glass-panel reveal-on-scroll delay-${(index % 3 + 1) * 100}`}>
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
