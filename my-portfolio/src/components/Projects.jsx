import React from 'react';
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const navigate = useNavigate();

  const projectData = [
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
      id: "apl-auction-system",
      title: "APL Auction Dashboard",
      description: "A custom digital auction and bidding management system built for the Ambanpola Premier League.",
      fullDetails: "Engineered a comprehensive React-based auction management dashboard for the Ambanpola Premier League (APL), handling the complete digital draft for local cricket franchises. The system facilitates live franchise bidding, tracks remaining team budgets and purse limits in real-time, and manages extensive player registration pools. It also incorporates custom franchise branding and dynamic auction statistics to ensure a seamless, professional live event experience.",
      websiteUrl: "https://apl-auction-kohl.vercel.app/players",
      tech: ["React.js", "CSS  ", "JavaScript", "Firebase"],
      images: ["/apl-auction-1.png", "/apl-auction-2.png", "/apl-auction-3.png", "/apl-auction-4.png"],
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>
    },
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
      id: "graphic-design-portfolio",
      title: "Graphic Design & Branding",
      description: "A collection of visual assets including promotional posters, leaflets, name tags, and team branding.",
      fullDetails: "A comprehensive showcase of my graphic design and visual identity work. This collection features custom promotional posters, informative leaflets, and professional name tags designed for various events. It also highlights my broader experience in branding, including the creation of custom team logos, sports jerseys, and cohesive event banners to establish strong, recognizable aesthetics across both digital and print media.",
      tech: ["Graphic Design", "Visual Identity", "Typography", "Print Design"],
      images: ["/poster1.jpg", "/poster2.jpg",, "/poster.jpg", "/nametag.png"],
      icon: <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>
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