import React, { useRef, useState, useEffect } from 'react';
import './index.css';
import personimg from '../assests/img/Rishabh Portfolio2796.jpg';
import resume from '../assests/img/Devesh_Pandey_Resume.pdf';
import { useNavigate } from 'react-router';
export default function Header() {
    const navigate=useNavigate()
    const imgRef = useRef(null);
    const roles = [
        "Technical Lead - IoT Security",
        "Red Team Analyst",
        "InfoSec Consultant",
        "Certified Red Team Professional",
        "IoT/Cyber Security Specialist",
        "Fullstack Security Researcher",
        "Vulnerability Assessment & Penetration Tester",
        "Active Directory Security Specialist",
        "CVE Contributor (CVE-2021-33988, CVE-2021-32248)",
        "Security Instructor & CEH Trainer"
      ];
    const [text, setText] = useState("");
    const [roleIndex, setRoleIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout = null;

        if (!isDeleting && text !== currentRole) {
            timeout = setTimeout(() => {
                setText(currentRole.substring(0, text.length + 1));
            }, 150);
        } else if (!isDeleting && text === currentRole) {
            timeout = setTimeout(() => {
                setIsDeleting(true);
            }, 2000);
        } else if (isDeleting && text !== "") {
            timeout = setTimeout(() => {
                setText(currentRole.substring(0, text.length - 1));
            }, 100);
        } else if (isDeleting && text === "") {
            setIsDeleting(false);
            setRoleIndex((roleIndex + 1) % roles.length);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, roleIndex, roles]);

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
        navigate('/booking')
        
    }

    return (
        <div className="header">
            <div className="side1">
                <div className="header-content">
                    <h1 style={{ fontSize: '40px' }}>
                        Hi, I'm <span style={{ color: 'blue', fontSize: '60px' }}>Rishabh</span>{' '}
                        <span style={{ color: 'red', fontSize: '60px' }}>Pandey</span>
                    </h1>
                    <p style={{ fontSize: '24px', color: 'red' }}>
                        {text}
                        <span className="cursor">|</span>
                    </p>
                    <div className="contact-btn">
                        <button onClick={handleClick} className="btn">Book 1 on 1 Session</button>
                    </div>
                </div>
            </div>
            <div className="side2">
                <div
                    className="personimg"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                >
                    <img ref={imgRef} src={personimg} alt="person" />
                </div>
            </div>
        </div>
    );
}
