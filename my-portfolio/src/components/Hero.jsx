import React, { useState, useEffect } from 'react';

const Hero = () => {
  const roles = ["Software Engineer", "Web Developer", "UI/UX Designer", "Graphic Designer"];
  
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    const i = loopNum % roles.length;
    const fullText = roles[i];
    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && currentText === fullText) {
      typingSpeed = 1500; 
      const timeout = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      typingSpeed = 500; 
      const timeout = setTimeout(() => {}, typingSpeed);
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setCurrentText(fullText.substring(0, currentText.length + (isDeleting ? -1 : 1)));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, loopNum, roles]);

  return (
    <section className="hero-container" id="home">
      <div className="hero-image-wrapper">
        <div className="image-circle">
          <img src="/profile.jpg" alt="Mohomad Shylan" className="profile-photo" />
        </div>
      </div>

      <div className="hero-text-content">
        <span className="greeting-badge">Mohomad Shylan</span>
        
        <h1 className="name-title">
          I'm <span className="highlight">{currentText}</span>
          <span className="blinking-cursor">|</span>
        </h1>
        
        <p className="description">
          A software engineer combining expertise in full-stack web development, machine learning architectures, and AI with a creative foundation in graphic design. I build intelligent, data-driven applications that merge powerful backend logic with visually compelling user experiences.
        </p>
        
        <div className="hero-actions">
          {/* Hire Me links to the contact section */}
          <a 
            href="#contact" 
            className="btn-primary" 
            style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
          >
            Hire Me
          </a>
          
          {/* Download CV triggers a file download */}
          <a 
            href="/Mohomad_Shylan_CV.pdf" 
            download="Mohomad_Shylan_CV.pdf"
            className="btn-secondary" 
            style={{ textDecoration: 'none', display: 'inline-block', textAlign: 'center' }}
          >
            Download CV
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="social-icons">
          <a href="#" aria-label="WhatsApp" className="icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
          </a>
          <a href="https://www.linkedin.com/in/mohomad-shylan-91799129a/" aria-label="LinkedIn" className="icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
          <a href="#" aria-label="Website" className="icon-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
          </a>
          <a href="https://github.com/MohomedShylan" aria-label="GitHub" className="icon-btn">
             <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;