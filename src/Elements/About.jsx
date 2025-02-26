import React, { useEffect, useRef, useState } from 'react';
import personimg from '../assests/img/Rishabh Portfolio2742.jpg';
import Nav from './Nav';
import Loading from './Loading';
import Skills from './Skills';
import Course from './Course';
import Achievement from './Achievement';
import Footer from './Footer';
import Connect from '../Connect';

export default function About() {
    const imgRef = useRef(null);
    const [loading, setLoading] = useState(true);
    
      useEffect(() => {
        const timer = setTimeout(() => {
          setLoading(false);
        }, 500);
    
        return () => clearTimeout(timer);
      }, []);
    
      if (loading) {
        return (
          <Loading/>
        );
      }
      function handleLinkedin(){
        window.location.href = `https://www.linkedin.com/in/ishabhrishabh/`
      }

    const handleMouseMove = (e) => {
        const container = e.currentTarget;
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const percentX = x / rect.width;
        const percentY = y / rect.height;

        const offsetX = (percentX - 0.5) * 30;
        const offsetY = (percentY - 0.5) * 30;

        if (imgRef.current) {
            imgRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        }
    };

    const handleMouseLeave = () => {
        if (imgRef.current) {
            imgRef.current.style.transform = `translate(0, 0)`;
        }
    };

    return (
        <>
            {loading ?<Loading/>: <>
            <div className="header1">
                <div className="side11">
                    <div className="header1-content">

                    <p>
    <strong><span>Rishabh Pandey</span></strong>, a recognized expert in <span>cybersecurity and IoT security</span>, has contributed extensively to the field through research, mentorship, and hands-on expertise.
    With deep proficiency in red teaming, Active Directory security, and vulnerability assessment, his work has been instrumental in strengthening digital infrastructures.
</p>
<p>
    Over the years, contributions have been made to global security communities, including the disclosure of critical vulnerabilities (CVE-2021-33988, CVE-2021-32248).  
    Industry-leading certifications such as CISSP, OSCP, CRTP, CRTE, CRTO, and CEH have been acquired, further reinforcing expertise in penetration testing and security architecture.
</p>
<p>
    Extensive experience has been gained in securing IoT ecosystems, conducting in-depth security assessments, and integrating proactive defense strategies.  
    As a speaker, trainer, and mentor, cybersecurity awareness has been advanced, equipping professionals and organizations with the necessary tools to navigate modern security challenges.
</p>
<p>
    The journey in cybersecurity continues to be shaped by continuous research, knowledge-sharing, and collaboration with industry leaders to drive innovation in security methodologies.
</p>

                        <div className="contact-btn">
                            <button onClick={handleLinkedin} className="btn">Connect On Linkedin</button>
                        </div>
                    </div>
                </div>
                <div className="side12">
                    <div
                        className="personimg"
                        onMouseMove={handleMouseMove}
                        onMouseLeave={handleMouseLeave}
                    >
                        <img ref={imgRef} src={personimg} alt="person" />
                    </div>
                </div>
            </div>
            <Skills/>
            <Course/>
            <Achievement/>
            <Connect/>
            </>}
        </>
    );
}
