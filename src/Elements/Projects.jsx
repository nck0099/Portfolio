import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router'
import Connect from '../Connect'
import project from './projectdata'
export default function 
() {

  return (
    <> 
    <div className='project'>
        {project.map((project) => (
          <Link
            key={project.id}
            to={`/projectdesc/${project.name}`}
            className="project-item"
          >
                <img src={project.image} alt={project.name} />
                <div className="project-info">
                  <p>{project.name}</p>
                </div>
          </Link>
            ))}
    </div>
    <Connect/>
    </>
  )
}
