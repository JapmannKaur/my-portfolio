import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import Background from '../components/Background';
import { projdata } from '../data';
import '../css/Projects.css';

const Projects = ({isDarkMode}) => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProjectId, setHoveredProjectId] = useState(null);

  const handleDetailsClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  const handleMouseEnter = (id) => {
    setHoveredProjectId(id);
  };

  const handleMouseLeave = () => {
    setHoveredProjectId(null);
  };

  return (
    <div>
      <Navbar isDarkMode={isDarkMode}/>
      <Background />
      <div className={`my-projects ${isDarkMode?"dark4-color":"light4-color"}`}>
        My Recent <div className={`only-proj ${isDarkMode?"dark5-color":"light5-color"}`}>Projects</div>
      </div>
      <div className='all-projects'>
        {projdata.map((pdata) => {
          const { id, image, ptitle, tech, deploy, projdesc } = pdata;

          return (
            <div
              className={`myp-data ${isDarkMode?"dark7-color":"light8-color"}`}
              key={id}
              onMouseEnter={() => handleMouseEnter(id)}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={image}
                className={`projimage ${
                  hoveredProjectId === id ? 'projimage-hover' : ''
                }`}
              />
              <h3 className='projtitle'>{ptitle}</h3>
              {hoveredProjectId === id && (
                <button
                  className={`details-button ${isDarkMode?"dark":"light7-color"}`}
                  onClick={() => handleDetailsClick(pdata)}
                >
                  Details
                </button>
              )}
            </div>
          );
        })}
      </div>
      {selectedProject && (
        <div className='overlay'>
          <div className='modal'>
            <h4 className={`over-title ${isDarkMode?"dark5-color":"light5-color"}`}>{selectedProject.ptitle}</h4>
            <p className='my-tech'>Tech Framework: {selectedProject.tech}</p>
            <br />
            <a href={selectedProject.deploy} target='_blank' rel='noreferrer' className={`deploy-class ${isDarkMode?"dark5-color":"light5-color"}`}>
              Deployment Link
            </a> 
            <div className='proj-desc'>{selectedProject.projdesc}</div>
            <button className={`close-button ${isDarkMode?"dark":"light7-color"}`} onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
