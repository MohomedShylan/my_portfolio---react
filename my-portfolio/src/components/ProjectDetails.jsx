import React, { useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';

const ProjectDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Retrieve the project data passed from the link state
  const project = location.state?.project;

  // Force scroll to top when the page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Fallback if someone navigates directly to a URL without clicking a card
  if (!project) {
    return (
      <div className="error-container">
        <h2>Project details not found.</h2>
        <button onClick={() => navigate('/')} className="btn-primary">Return to Portfolio</button>
      </div>
    );
  }

  return (
    <div className="project-details-page">
      <div className="details-header">
        <Link to="/#projects" className="back-link">← Back to Projects</Link>
        <h1 className="details-title">{project.title}</h1>
        
        <div className="details-tech-stack">
          {project.tech.map((tech, index) => (
             <span className="skill-tag" key={index}>{tech}</span>
          ))}
        </div>
      </div>

      <div className="details-body">
        <div className="details-text-section">
          <h2>Project Overview</h2>
          <p>{project.fullDetails}</p>
          
          {/* This button only appears if the project has a websiteUrl */}
          {project.websiteUrl && (
            <a 
              href={project.websiteUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn-primary"
              style={{ textDecoration: 'none', display: 'inline-block', marginTop: '1rem' }}
            >
              Visit Live Site
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '8px', verticalAlign: 'middle' }}>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          )}
        </div>

        <div className="details-gallery">
          <h2>Gallery</h2>
          <div className="gallery-grid">
            {project.images.map((imgSrc, index) => (
              <div className="gallery-image-wrapper" key={index}>
                {/* Ensure you have these images in your public folder, otherwise this alt text will show */}
                <img src={imgSrc} alt={`${project.title} screenshot ${index + 1}`} className="gallery-img" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;