import { useState } from 'react';
import GalleryModal from '../components/GalleryModal';

const Projects = () => {
  const [activeGallery, setActiveGallery] = useState(null); // Add this line

  const openGallery = (projectTitle) => {
    setActiveGallery(projectTitle);
  };

  const closeGallery = () => {
    setActiveGallery(null);
  };
  const projects = [
    {
      title: "Cableway Inspection Report GUI",
      desc: "Developed a PyQt5-based desktop application to digitize cableway inspection reports, enabling inspectors to input structural data, drag-and-drop images, and generate formatted reports with ease.",
      link: "https://github.com/wycg22/Cableway-Report-GUI",
      tags: ["Python", "PyQt5", "FPDF", "QPixmap"]
    },
    {
      title: "F1tenth Autonomous Driving Algorithm",
      desc: "Developed a competitive self-driving algorithm for F1/10 scale racecars using ROS2 and OpenCV, implementing gap-following navigation and PID control to reduce lap times while avoiding obstacles.",
      tags: ["C++", "Python", "OpenCV", "ROS2", "Ubuntu"]
    },
    {
      title: "Chatroom Web Application",
      desc: "Full-featured chat application combining real-time messaging (WebSockets), protected data persistence (MongoDB), and innovative AI functionality within a responsive JavaScript interface.",
      link: "https://github.com/wycg22/AI-ChatRoom",
      tags: ["Javacript", "HTML", "CSS", "MongoDB", "Node.js", "LLM", "REST"]
    },
    {
      title: "FPGA Audio Player",
      desc: "Built an audio player on Altera’s DE1-SoC FPGA, designing Verilog memory controllers for on-board flash storage and implementing real-time playback controls (play/pause/speed) with a PicoBlaze-processor-driven volume meter.",
      link: "https://github.com/wycg22/FPGA_Audio_Player",
      tags: ["Verilog", "PicoBlaze Assembly", "DE1-SoC", "Quartus", "ModelSim"]
    },
    {
      title: "Simple RISC Machine",
      desc: "Implemented a 16-bit RISC processor with custom datapath (ALU/register file/shifter) and finite-state machine controller, supporting full instruction cycle execution.",
      tags: ["System Verilog", "DE1-SoC", "Quartus", "ModelSim"]
    }
  ];

  return (
    <div className="projects-page">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className="tags">
              {project.tags.map(tag => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="project-buttons">
              <button 
                className="gallery-button"
                onClick={() => openGallery(project.title)} 
              >
                View Project
              </button>
              {project.link && (
                <a 
                  href={project.link} 
                  className="github-button"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
      {activeGallery && (
      <GalleryModal 
        projectTitle={activeGallery} 
        onClose={closeGallery} 
      />
    )}
    </div>
  );
};

export default Projects;