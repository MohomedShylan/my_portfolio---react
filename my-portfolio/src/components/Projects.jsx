import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  const projectData = [
    {
      id: "drone-pilot-system",
      title: "Drone Pilot Booking System",
      description: "Full-stack client and admin portals with Stripe integration and AI image analysis.",
      fullDetails: "A comprehensive management platform featuring role-based portals for clients and administrators. It incorporates automated assignment workflows and secure payment processing via the Stripe API. A key technical integration is a custom AI-driven agricultural image analysis module.",
      tech: ["React.js", "Firebase", "Stripe API", "Node.js"],
      images: ["/project1-a.jpg", "/project1-b.jpg"], 
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"></polygon><line x1="9" y1="3" x2="9" y2="18"></line><line x1="15" y1="6" x2="15" y2="21"></line></svg>
    },
    {
      id: "ai-prognosis-tool",
      title: "Multi-Modal AI Prognosis Tool",
      description: "Clinical ML application merging 1D-CNN ECG processing with LightGBM tabular data scoring.",
      fullDetails: "An advanced medical prognosis application designed to evaluate health risk metrics. The architecture trains on extensive datasets, merging 1D-Convolutional Neural Networks for ECG signal data processing with LightGBM models for clinical tabular histories to evaluate precision, recall, and AUC-ROC metrics.",
      tech: ["Python", "TensorFlow", "LightGBM", "Data Science"],
      images: ["/project2.png", "/project2-b.png"],
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>
    },
    {
      id: "iot-environmental-logger",
      title: "IoT Environmental Logger",
      description: "Hardware pipeline streaming telemetry to cloud spreadsheets via MicroPython.",
      fullDetails: "An automated hardware-to-cloud pipeline utilizing a Raspberry Pi Pico W. It interfaces directly with a BMP280 sensor via MicroPython to capture continuous temperature and pressure telemetry (ignoring humidity requirements per specific hardware constraints). The system manages live telemetry streams directly into cloud spreadsheets, featuring robust handling for offline network interruptions.",
      tech: ["MicroPython", "Raspberry Pi Pico W", "BMP280", "Cloud APIs"],
      images: ["/project3-a.jpg", "/project3-b.jpg"],
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect></svg>
    },
    {
      id: "cricket-broadcast-ui",
      title: "Cricket Broadcast UI",
      description: "Professional TV-style broadcast scorecard layout design for live sports streaming.",
      fullDetails: "A highly polished, professional TV-style broadcast user interface designed specifically for live cricket matches. The project focuses on high-visibility scorecard layouts, distinct typography hierarchy, and real-time data presentation structures suited for modern sports broadcasting.",
      tech: ["React.js", "Standard CSS", "UI/UX Design"],
      images: ["/project4-a.jpg", "/project4-b.jpg"],
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
    }
  ];

  const handleCardClick = (project) => {
    // Destructure the project object to separate the React Element (icon) from the data
    const { icon, ...safeProjectData } = project;
    
    // Pass ONLY the safe, text-based data through the router
    navigate(`/project/${safeProjectData.id}`, { state: { project: safeProjectData } });
  };

  return (
    <section className="projects-container" id="projects">
      <h2 className="projects-title">Projects</h2>
      <div className="projects-grid">
        {projectData.map((project) => (
          <div 
            className="project-card" 
            key={project.id} 
            onClick={() => handleCardClick(project)}
            style={{ cursor: 'pointer' }}
          >
            <div className="project-icon">
              {project.icon}
            </div>
            <h3 className="project-name">{project.title}</h3>
            <p className="project-desc">{project.description}</p>
            <span className="view-details-btn">View Details →</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;