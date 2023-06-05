import React, { useState } from 'react';

import Navbar from '../components/Navbar';
import Background from '../components/Background';
import { projdata } from '../data';
import '../css/Projects.css';

const Projects = () => {
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
      <Navbar />
      <Background />
      <div className='my-projects'>
        My Recent <div className='only-proj'>Projects</div>
      </div>
      <div className='all-projects'>
        {projdata.map((pdata) => {
          const { id, image, ptitle, tech, deploy, projdesc } = pdata;

          return (
            <div
              className='myp-data'
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
                  className='details-button'
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
            <h4 className='over-title'>{selectedProject.ptitle}</h4>
            <p className='my-tech'>Tech Stack: {selectedProject.tech}</p>
            <br />
            <a href={selectedProject.deploy} target='_blank' rel='noreferrer' className='deploy-class'>
              Deployment Link
            </a>
            <div className='proj-desc'>{selectedProject.projdesc}</div>
            <button className='close-button' onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
