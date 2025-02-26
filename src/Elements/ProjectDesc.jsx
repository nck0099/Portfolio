import React from 'react';
import { useParams } from 'react-router-dom';
import project from './projectdata';

export default function ProjectDesc() {
  const { projectName } = useParams();
  const selectedProject = project.find(p => p.name === projectName);

  if (!selectedProject) {
    return <h1>Project Not Found</h1>;
  }

  const handleClick = (event) => {
    event.preventDefault();
    window.location.href = selectedProject.github;
  };

  const handleClick1 = (event) => {
    event.preventDefault();
    window.location.href = selectedProject.deployed;
  };

  return (
    <div className="projectdesc">
      <div className="project-image-container">
        <img id='proimg' src={selectedProject.image} alt={selectedProject.name} />
        <div className="overlay">
          <div className="overlay-content">
            <h1>{selectedProject.name}</h1>
            <h2>{selectedProject.techstack}</h2>
            <div className='toolslist'>
              {selectedProject.toolsused.map((tools)=>{
                return <><img id='tools' src={tools.imglink} alt="" /></>

              })}
            </div>
            <div className="projectdesc-btn">
              <button id="github" onClick={handleClick}>GitHub</button>
              <button id="live" onClick={handleClick1}>Live</button>
            </div>
          </div>
        </div>
      </div>
      
      <p>{selectedProject.desc}</p>
    </div>
  );
}
