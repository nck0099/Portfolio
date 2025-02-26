import React from 'react'

import   project  from './Elements/projectdata';
import { Link } from 'react-router';
export default function PinnedProject() {
  return (
    <div className='pinned-project'>
          <h1 style={{alignSelf:'center'}}> Pinned Projects</h1>
          <div className='project' >
              {project.map((project) => (
                  project.category != 'pinned' ? '' : <Link 
                              to={`/projectdesc/${project.name}`} key={project.id} className="project-item">
                      <img src={project.image} alt={project.name} />
                      <div className="project-info">
                          <p>{project.name}</p>
                      </div>
                  </Link>
              ))}
          </div>
    </div>
  )
}
