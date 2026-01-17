
import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="contact" className="footer">
            <div className="container footer-content">
                <div className="footer-section">
                    <h3>AVINYA INTERACTIVE</h3>
                    <p>Where Art Meets Engineering</p>
                </div>

                <div className="footer-section">
                    <h4>Connect</h4>
                    <div className="social-links">
                        <a href="mailto:avinyainteractive@gmail.com" aria-label="Email">
                            <Mail size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/harshit-penamata-63a464163" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <Linkedin size={24} />
                        </a>
                        <a href="https://github.com/harshitpenamata" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                            <Github size={24} />
                        </a>
                    </div>
                </div>

                <div className="footer-section footer-copyright">
                    <p>&copy; {new Date().getFullYear()} Harshit Penamata. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
