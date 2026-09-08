import React from 'react';

const About = () => {
  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Me</h2>
      
      <div className="about-content">
        {/* Left Side: Introduction Card */}
        <div className="about-card">
          <h3>My introduction</h3>
          <p>
            An aspiring software engineer with a strong foundation in full-stack web development, 
            artificial intelligence, and machine learning architectures, currently completing my 
            final year of a Software Engineering degree. Complementing my technical expertise is 
            a deep passion for graphic design and UI/UX. I thrive on building robust, intelligent 
            applications from responsive React interfaces and scalable databases to advanced 
            multi-modal AI models. With strong problem-solving abilities, a keen eye for detail,
             and a commitment to continuous learning, I aim to create digital solutions that are 
             both highly functional and visually engaging.
          </p>
          <div className="download-wrapper">
            <button className="btn-download">
              Download CV 
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="7 10 12 15 17 10"></polyline>
                <line x1="12" y1="15" x2="12" y2="3"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Right Side: Skills Columns */}
        <div className="about-skills">
          <div className="skill-category">
            <h4>Frontend</h4>
            <div className="skill-tags">
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">React.js</span>
            </div>
          </div>

          <div className="skill-category">
            <h4>Backend & AI</h4>
            <div className="skill-tags">
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">MicroPython</span>
              <span className="skill-tag">Flask</span>
              <span className="skill-tag">LightGBM</span>
            </div>
          </div>

          <div className="skill-category">
            <h4>Database</h4>
            <div className="skill-tags">
              <span className="skill-tag">Firebase</span>
              <span className="skill-tag">MySQL</span>
            </div>
          </div>

          <div className="skill-category">
            <h4>Design Tools</h4>
            <div className="skill-tags">
              <span className="skill-tag"> Adobe Photoshop</span>
              <span className="skill-tag">Figma</span>
              <span className="skill-tag">Canva</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;