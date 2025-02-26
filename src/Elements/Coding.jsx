import React from 'react'
import leetcode from '../assests/img/youtube.png'
import gfg from '../assests/img/insta.png'
import hackerrank from '../assests/img/linkedin.png'
import './index.css'
export default function Coding() {
    const handleleetcode=()=>{
        window.location.href ="https://www.youtube.com/@CyberRishabh"
    }
    const handlegfg = () => {
        window.location.href = "https://www.instagram.com/cyberrishabh/"

    }
    const handlehackerrank = () => {
        window.location.href = "https://www.linkedin.com/in/cyberrishabh/"

          }
  return (
      <div className='project1'>
              <div onClick={handleleetcode} className="project1-item">
                  <img src={leetcode}/>
                  <div className="project1-info">
                      <p>Youtube</p>
                  </div>
              </div>
          <div onClick={handlegfg} className="project1-item">
              <img src={gfg} />
              <div className="project1-info">
                  <p>Instagram</p>
              </div>
          </div>
          <div onClick={handlehackerrank} className="project1-item">
              <img src={hackerrank} />
              <div className="project1-info">
                  <p>Linkedin</p>
              </div>
          </div>
      </div>
  )
}
