
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Capabilities from './components/Capabilities';
import Work from './components/Work';
import Experience from './components/Experience';
import About from './components/About';
import Footer from './components/Footer';
import './components/animations.css'; // Global animation styles
import './App.css';

const App = () => {
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <main>
        <Work />
        <Services />
        <Capabilities />
        <Experience />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
