
import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container about-container">
                <div className="about-content">
                    <h2 className="about-title">Where Art Meets Engineering</h2>
                    <div className="about-text">
                        <p>
                            I'm a Creative Technologist working at the intersection of cinematic storytelling
                            and real-time technology. With a hybrid background spanning traditional filmmaking
                            and cutting-edge virtual production, I bring a unique perspective to every project.
                        </p>
                        <p>
                            My expertise lies in building real-time pipelines, LED volume workflows, and creative
                            tooling that empowers storytellers. From feature films to immersive experiences,
                            I specialize in translating creative vision into technical reality.
                        </p>
                        <p className="highlight-text">
                            I believe the best technology is invisible—it should amplify creativity, not constrain it.
                        </p>
                    </div>
                </div>
                <div className="about-image-container reveal-on-scroll delay-2">
                    <img
                        src="/avinyainteractive/harshit-portrait-t.png"
                        alt="Harshit Penamata"
                        className="about-portrait"
                    />
                </div>
            </div>
        </section>
    );
};

export default About;
