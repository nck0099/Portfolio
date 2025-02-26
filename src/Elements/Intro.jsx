import React, { useRef, useState, useEffect } from 'react';
import './index.css';

import personimg from '../assests/img/Rishabh Portfolio2784.jpg'

import { useNavigate } from 'react-router-dom';
export default function Intro() {
    const navigate=useNavigate()
    const imgRef = useRef(null);

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
    function handleClick() {
        navigate('/contact');
    }
    return (
        <div className="header">
            <div className='side1'>
                <div className='header-content'>
                    <h1 style={{ fontSize: '40px' } }>
                        MEET <span style={{ color: 'blue',fontSize:60 }}>Rishabh Pandey </span> – A Leader in IoT Security
                    </h1>
                    <p style={{ fontSize: '20px', color: 'black' }}>
                    With extensive experience in information security, Rishabh Pandey has established himself as a thought leader in securing IoT ecosystems. Specializing in security assessments, red teaming, and advanced security implementations, he has played a crucial role in strengthening digital infrastructures.</p>
<p style={{ fontSize: '20px', color: 'black' }}>
With over eight years in the field, Rishabh has developed expertise in red teaming, Active Directory security, open-source intelligence, infrastructure security, and vulnerability assessment. Holding multiple industry-recognized certifications—including CISSP, OSCP, CRTP, CRTE, CRTO, and CEH—he continues to push the boundaries of cybersecurity excellence.</p>
<p style={{ fontSize: '20px', color: 'black' }}>
Throughout his career, Rishabh has led penetration testing initiatives, guided cross-functional teams in enhancing security controls, and identified critical vulnerabilities, contributing to CVE disclosures (CVE-2021-33988, CVE-2021-32248). His meticulous research and analysis have been instrumental in implementing effective mitigation strategies for enterprise and IoT environments.</p>
<p style={{ fontSize: '20px', color: 'black' }}>
Beyond technical expertise, he actively contributes to security research, red team methodologies, and the training of professionals in ethical hacking and penetration testing. With core skills in network security, vulnerability management, threat intelligence, and cloud security, Rishabh remains dedicated to advancing cybersecurity awareness and best practices.</p>

                    <div className='contact-btn'>
                        <button onClick={handleClick} className='btn'>Contact Me</button>
                    </div>
                </div>
            </div>
            <div className='side2'>
                <div
                    className='personimg'
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <img style={{maxHeight:400}} ref={imgRef} src={personimg} alt="person" />
                </div>
            </div>
        </div>
    )
}
