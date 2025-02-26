import React from 'react'
import '../App.css'
export default function Course() {
    const Cources = [
        {
            name: 'IoT SECURITY & NETWORK FUNDAMENTALS', 
            sub: 'Industry Expertise & Research', 
            des: 'Comprehensive knowledge of IoT security, network architectures, and communication protocols has been developed. Extensive research has been conducted on securing IoT ecosystems, including risk assessment and mitigation strategies to enhance security resilience.'
        },
        {
            name: 'RED TEAMING & ADVANCED PENTESTING', 
            sub: 'Hands-on Security Assessments', 
            des: 'Expertise in red teaming, Active Directory security, and advanced penetration testing techniques has been attained. Multiple enterprise environments have been assessed to simulate real-world attack scenarios, improving overall security posture.'
        },
        {
            name: 'ETHICAL HACKING & VULNERABILITY ASSESSMENT', 
            sub: 'Certified Professional Training', 
            des: 'In-depth training in ethical hacking methodologies, reconnaissance, and exploitation techniques has been completed. Specialized knowledge in Web Vulnerability Assessment and Penetration Testing (VAPT) has been applied to identify and remediate security flaws in enterprise and IoT environments.'
        }
    ];
    

  return (
      <div className='Courcework'>
          <div className='contactd'>
              <h1>ProfessionalTraining  </h1> </div>
          <div className='Courceworklower'>
              {Cources.map((res, idx) => (
                  <div className='Courceworkupper'>
                      <div className='linedesign '><div className='circle'> </div>
                          <div className='lineyellowbig'> </div> </div>
                      <div className='Courceworkblock' key={idx}>
                          <h1>{res.name}</h1>
                          <h3>{res.sub}</h3>
                          <p>{res.des}</p>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  )
}
