import React, { useState, useEffect } from 'react';
import heroVideo from "../assets/hero.mp4"; 
import myPhoto from "../assets/myPhoto.jpeg"; 
import "../components/style/Hero.css"; 

// IMPORT SOCIAL MEDIA ICONS
import { FaGithub, FaLinkedinIn, FaDiscord, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  const fullText = "Hi there, I'm Fozia Hussaini";
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  // MOBILE INTERFACE SIDEBAR TOGGLE HOOK
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    let timer;
    if (!isDeleting && index < fullText.length) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText.charAt(index));
        setIndex((prev) => prev + 1);
      }, 100); 
    } else if (!isDeleting && index === fullText.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 26300); 
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText((prev) => prev.slice(0, -1));
      }, 30); 
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setIndex(0);
    }
    return () => clearTimeout(timer);
  }, [index, isDeleting, displayedText]);

  return (
    <section className="hero-wrapper">
      
      {/* BACKGROUND LOOP LAYER COMPONENT ELEMENTS */}
      <video autoPlay loop muted playsInline className="hero-video-layer">
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hero-shadow-overlay" />
      
      {/* 2. MAIN NAVBAR CONTAINER */}
      <nav className="hero-navbar">
        <div className="nav-branding-title">
          <span>Mobile App Developer</span>
          <span className="pipe-accent">|</span>
          <span className="sub-tagline">frontend web developer</span>
        </div>
        
        {/* Desktop View Links */}
        <ul className="desktop-menu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#resume">Resume</a></li>
          <li><a href="#works">Works</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* HAMBURGER TRIGGER BUTTON LINK */}
        <div className="hamburger-icon" onClick={() => setNavOpen(true)}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>

      {/* 3. MOBILE SLIDE-OUT DRAWER LAYOUT OVERLAY */}
      <div className={`mobile-nav-drawer ${navOpen ? 'drawer-active' : ''}`}>
        
        {/* CROSS ICON ACTION TRIGGER */}
        <div className="close-cross-btn" onClick={() => setNavOpen(false)}>&times;</div>
        
        <ul className="mobile-drawer-links">
          <li><a href="#home" onClick={() => setNavOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setNavOpen(false)}>About</a></li>
          <li><a href="#resume" onClick={() => setNavOpen(false)}>Resume</a></li>
          <li><a href="#works" onClick={() => setNavOpen(false)}>Works</a></li>
          <li><a href="#projects" onClick={() => setNavOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setNavOpen(false)}>Contact</a></li>
        </ul>
      </div>

      {/* 4. TWO-COLUMN RESPONSIVE LAYOUT CONTENT WRAPPER */}
      <div className="hero-split-container">
        
        <div className="hero-bio-side">
          <h2>
            {displayedText}
            {displayedText.length > 0 && displayedText.length < fullText.length && (
              <span className="typewriter-cursor">{' '}</span>
            )}
          </h2>
          
          <p>
            As a Frontend and Mobile App Developer with a solid background in Disaster Management and Remote Sensing Engineering, 
            I leverage data, mapping, and modern code to build powerful tools that solve real-world challenges. 
            Utilizing a core tech stack that includes JavaScript (ES6+), HTML5, and CSS3, alongside frameworks like
            React and Node.js, I specialize in data visualization, geospatial data mapping, and UI/UX optimization. 
            With a primary focus on mobile application development, I specialize in using Flutter to build highly impactful, 
            cross-platform, and user-centric mobile Applications. 
            My work is driven by a passion for creating innovative solutions that make a meaningful difference in people's lives.
          </p>
        </div>

        <div className="hero-photo-side">
          <div className="blobsatelliteone" />
          <div className="blobsatellitetwo" />

          <div className="blobframe">
            <div className="blobgloss" />
            <img src={myPhoto} alt="Fozia Hussaini Profile Canvas Layout" />
          </div>
        </div>

      </div>

      {/* FIXED POSITION: Placed at the base of the section to allow true fullscreen absolute centering */}
      <div className="hero-social-footer">
        <a href="https://github.com/foziahussaini" target="_blank" rel="noreferrer" title="GitHub"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/fozia-hussaini-19b47738a/" target="_blank" rel="noreferrer" title="LinkedIn"><FaLinkedinIn /></a>
        <a href="https://discord.com/channels/@foziahussaini" target="_blank" rel="noreferrer" title="Discord"><FaDiscord /></a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" title="Twitter"><FaTwitter /></a>
      </div>

    </section>
  );
};

export default Hero;
