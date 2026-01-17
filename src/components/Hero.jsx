
import React from 'react';
import { ArrowDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-background">
                {/* Placeholder for video or cinematic background */}
                <div className="video-overlay"></div>
                <div className="cinematic-gradient"></div>
            </div>

            <div className="container hero-content">
                <h1 className="hero-title fade-in-up delay-1">
                    HARSHIT <span className="outline-text">PENAMATA</span>
                </h1>
                <h2 className="hero-subtitle fade-in-up delay-2">
                    Creative Technologist
                </h2>
                <p className="hero-description fade-in-up delay-3">
                    Bridging cinematic storytelling with real-time technology.
                </p>

                <div className="hero-cta fade-in-up delay-4">
                    <a href="#work" className="btn-primary">View Work</a>
                    <a href="#contact" className="btn-secondary">Contact Me</a>
                </div>
            </div>

            <div className="scroll-indicator fade-in delay-5">
                <p>Scroll to Explore</p>
                <ArrowDown size={20} className="bounce-animation" />
            </div>
        </section>
    );
};

export default Hero;
