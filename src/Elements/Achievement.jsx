import React from 'react'

export default function Achievement() {
    const AchievementList = [
        { 
            Head: 'CVE Contributions & Security Research', 
            Detail: 'Critical vulnerabilities were identified and responsibly disclosed, leading to the assignment of CVE-2021-33988 and CVE-2021-32248. These disclosures contributed to strengthening security measures and industry-wide vulnerability awareness.' 
        },
        { 
            Head: 'Red Teaming & IoT Security Expertise', 
            Detail: 'Significant contributions have been made to red teaming engagements and IoT security research, enhancing cybersecurity resilience for enterprises. Hands-on assessments have been conducted to identify security flaws in critical infrastructures.' 
        },
        { 
            Head: 'Industry Certifications & Recognition', 
            Detail: 'Industry-leading certifications, including CISSP, OSCP, CRTP, CRTE, CRTO, and CEH, have been attained. Recognition has been received for expertise in cybersecurity, penetration testing, and threat intelligence.' 
        },
        { 
            Head: 'Mentorship & Cybersecurity Awareness', 
            Detail: 'Security awareness has been actively promoted through mentorship, training sessions, and workshops. Contributions have been made to the cybersecurity community by guiding professionals and organizations in secure coding, ethical hacking, and red teaming strategies.' 
        }
    ];
    
  return (
      <div className='Achievement'>
          <div className='contactd'>
              <h1>Achievement</h1>  </div>
          <div className='lowerAchievement'>
              {AchievementList.map((res, idx) => (
                  <div className='Achievementblock' key={idx}>
                      <h1>{res.Head}</h1>
                      <p>{res.Detail}</p>
                  </div>
              ))}
          </div>
      </div>
  )
}
