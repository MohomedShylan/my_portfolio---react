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