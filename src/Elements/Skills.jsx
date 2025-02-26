import React from 'react';
import './index.css'
const threatmodeling = 'https://.files.wordpress.com/2021/08/threat-modeling.png?w=256';
const architecturereview = 'https://cdn.prod.-files.com/6225a414ab1e86e4cd4c71d0/6595c6f67e368fafb5033c61_we45%20sec%20arch.png';
const vapt = 'https://pentest-tools.com/blog/wp-content/uploads/2022/11/what-is-vulnerability-assessment-and-penetration-testing-1.png';
const burpsuite = 'https://portswigger.net/cms/images/61/96/bba45b8d0a5b-article-main.jpg';
const metasploit = 'https://upload.wikimedia.org/wikipedia/commons/3/34/Metasploit-logo.png';
const nmap = 'https://upload.wikimedia.org/wikipedia/commons/6/62/Nmap_logo.svg';
const wireshark = 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Wireshark_Logo.svg';
const nessus = 'https://tenable.secure.force.com/resource/1678471353000/NessusLogo';
const osint = 'https://www.osintme.com/static/osint-logo.png';
const exploitdevelopment = 'https://i0.wp.com/techworm.net/wp-content/uploads/2021/06/best-exploit-development-courses-768x442.png';
const securecodereview = 'https://securityintelligence.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2020/02/si-code-review.jpg.webp';
const redteaming = 'https://www.cyberstartupobservatory.com/wp-content/uploads/2019/07/red_teaming_sized.jpg';
const compliance = 'https://www.complianceforge.com/media/compliance_framework.png';
const mitreattack = 'https://attack.mitre.org/images/attack.svg';
const awssecurity = 'https://d1.awsstatic.com/logos/aws/AWS_Security_Hero%402x.8a2ae717a29e87af7f36f53f5d332b9fbeae021c.png';
const containersecurity = 'https://www.mirantis.com/wp-content/uploads/2020/02/2020-02-17-Kubernetes-Container-Security-1.png';
const websecurity = 'https://www.globalsign.com/application/files/2215/4060/7068/Blog_Security_Web_Security_Checklist_2017.png';
const apisecurity = 'https://api.security/wp-content/uploads/2021/09/API-Security-1.jpg';
const iotsecurity = 'https://www.iotforall.com/wp-content/uploads/2018/02/iot-security.jpg';
const wifihacking = 'https://cdn.hashnode.com/res/hashnode/image/upload/v1643588400296/Kyof1IzZW.png';
const vscode = 'https://code.visualstudio.com/assets/images/code-stable.png';
const postman = 'https://www.cdnlogo.com/logos/p/20/postman.svg';
const androidstudio = 'https://developer.android.com/static/studio/images/new-studio-logo-1_1920.png';
const docker = 'https://upload.wikimedia.org/wikipedia/commons/4/4e/Docker_%28container_engine%29_logo.svg';
const pycharm = 'https://resources.jetbrains.com/storage/products/pycharm/img/meta/pycharm_logo_300x300.png';
const vmware = 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Vmware_workstation_16_icon.svg/2051px-Vmware_workstation_16_icon.svg.png';
const virtualbox = 'https://miro.medium.com/v2/resize:fit:512/1*Dp6MA5Gux3Kp6dzITCO9oQ.png';
const kalilinux = 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Kali-dragon-icon.svg';
const parrotos = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWb4XCIcMpF6J3-37LaMWassk71PPNVWU7Qw&s';
const owaspzap = 'https://www.zaproxy.org/images/zap-logo.svg';
const mobsf = 'https://pbs.twimg.com/profile_images/1284747133432854529/rszZ-7xP_400x400.jpg';
const cyberchef = 'https://www.gchq.gov.uk/img/sources/OG_CyberChef.png';
const bloodhound = 'https://media.tenor.com/i1B_H9oPMqYAAAAd/bloodhound.gif';
const maltego = 'https://www.maltego.com/wp-content/uploads/2021/03/Asset-2.png';


export default function Skills() {
  const skills = [
      { name: 'Threat Modeling', img: threatmodeling },
      { name: 'Architecture Review', img: architecturereview },
      { name: 'Vulnerability Assessment (VAPT)', img: vapt },
      { name: 'Burp Suite', img: burpsuite },
      { name: 'Metasploit', img: metasploit },
      { name: 'Nmap', img: nmap },
      { name: 'Wireshark', img: wireshark },
      { name: 'Nessus', img: nessus },
      { name: 'OSINT', img: osint },
      { name: 'Exploit Development', img: exploitdevelopment },
      { name: 'Secure Code Review', img: securecodereview },
      { name: 'Red Teaming', img: redteaming },
      { name: 'Compliance & Gap Analysis', img: compliance },
      { name: 'MITRE ATT&CK Framework', img: mitreattack },
      { name: 'AWS Security', img: awssecurity },
      { name: 'Container Security (Docker & Kubernetes)', img: containersecurity },
      { name: 'Web Application Security', img: websecurity },
      { name: 'API Security', img: apisecurity },
      { name: 'IoT Security', img: iotsecurity },
      { name: 'WiFi Hacking & Pentesting', img: wifihacking }
  ];

  const tools = [
      { name: 'VSCode', img: vscode },
      { name: 'Postman', img: postman },
      { name: 'Android Studio', img: androidstudio },
      { name: 'Docker', img: docker },
      { name: 'Pycharm', img: pycharm },
      { name: 'VMware', img: vmware },
      { name: 'VirtualBox', img: virtualbox },
      { name: 'Kali Linux', img: kalilinux },
      { name: 'Parrot OS', img: parrotos },
      
  ];

  return (
      <div className="skills">
          <h2>Professional Skillset</h2>
          <div className="skill-grid">
              {skills.map((skill, index) => (
                  <div key={index} className="skill">
                      <img src={skill.img} alt={skill.name} />
                  </div>
              ))}
          </div>

          <h2>Tools I Use</h2>
          <div className="skill-grid">
              {tools.map((tool, index) => (
                  <div key={index} className="skill">
                      <img src={tool.img} alt={tool.name} />
                  </div>
              ))}
          </div>
      </div>
  );
}

