import React, { useState } from "react";
import roadmap from '../assests/CyberSecurity Roadmap 2025.png'
export default function RoadMap() {
  const [user, setUser] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name && user.email) {
      setSubmitted(true);
    }
  };

  const handleRestart = () => {
    setUser({ name: "", email: "" });
    setSubmitted(false);
  };

  return (
    <div className="roadmap-container">
      {!submitted ? (
        <form className="roadmap-form" onSubmit={handleSubmit}>
          <h2>Enter Your Details</h2>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={user.name}
            onChange={handleChange}
            className="roadmap-input"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={user.email}
            onChange={handleChange}
            className="roadmap-input"
            required
          />
          <button type="submit" className="roadmap-button">
            Show Roadmap
          </button>
        </form>
      ) : (
        <div className="roadmap-content">
          <h2>Welcome, {user.name}!</h2>
          <p>Here is your roadmap for success:</p>

          <div className="roadmap-step">
            <img src={roadmap}/>
          </div>

          
        </div>
      )}
    </div>
  );
}
