import React, { useEffect } from 'react';
import './App.css';
import IEEE_Logo from './assets/IEEE_Logo.png';
import bgVideo from './assets/bg.mp4';
import logoVideo from './assets/logo.webm';
function App() {
  useEffect(() => {
    const animatedElements = document.querySelectorAll('[class*="animate-"]');
    animatedElements.forEach(el => {
      void el.offsetWidth;
    });
  }, []);

  return (
    <div className="app">
      <header className="main-header">
        <img src={IEEE_Logo} alt="IEEE Logo" className="logo animate-fade-in delay-100" />
        <nav className="navbar animate-slide-in-right delay-200">
          <a href="#HOME">HOME</a>
          <a href="#ABOUT">ABOUT</a>
          <a href="#EVENTS">EVENTS</a>
          <a href="#GALLERY">GALLERY</a>
          <a href="#WIE">WIE</a>
          <a href="#CONTACT">CONTACT</a>
        </nav>
      </header>

      <video autoPlay muted loop id="bg-video">
        <source src={bgVideo} type="video/mp4" />
      </video>

      <div className="overlay"></div>

      <div className="hero-flex">
        <div className="content">
          <div className="ieee-logo-block">
            <div className="ieee-line animate-fade-in-up delay-300"></div>
            <div>
              <span className="ieee-text-main animate-fade-in-up delay-400">IEEE</span>
              <video className="ieee-video animate-fade-in delay-500" autoPlay muted loop>
                <source src={logoVideo} type="video/webm" />
              </video>
              <div className="ieee-text-sub animate-fade-in-up delay-500">STUDENT BRANCH JIIT</div>
            </div>
          </div>

          <h1 className="hero-heading animate-fade-in-up delay-600">
            <span className="no-break">Advancing Technology for</span><br />
            <span className="highlight">Humanity</span>
          </h1>
        </div>
        
        {/* Removed the model-viewer component */}
      </div>
    </div>
  );
}

export default App;