import React, { useState } from "react";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");
  const [captchaToken, setCaptchaToken] = useState(null);

  const RECAPTCHA_SITE_KEY = "6LdFKeMqAAAAAGi7EWTgOBIYCMC5pYLFeIV5KQyI"; // Replace with actual reCAPTCHA v3 site key

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    if (!captchaToken) {
      alert("Please complete reCAPTCHA!");
      setLoading(false);
      return;
    }

    try {
      // Send the email if reCAPTCHA is valid
      const response = await axios.post("https://maild.netlify.app/api/mail", {
        to: email,
        subject: "From Portfolio",
        text: `Name: ${name}\n\nMessage: ${message}\n\nreCAPTCHA Token: ${captchaToken}`,
      });

      console.log(response.data);
      setStatus("Message sent successfully! ✅");
      alert("Message Sent successfully");
    } catch (error) {
      console.error(error);
      setStatus("Failed to send message. ❌");
    } finally {
      setLoading(false);
      setName("");
      setEmail("");
      setMessage("");
      setCaptchaToken(null); // Reset reCAPTCHA token
    }
  };

  return (
    <div className="contact-form">
      <h2>Get in Touch</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          name="name"
          placeholder="Enter your name"
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id="email"
          name="email"
          placeholder="Enter your email"
          required
        />
        <br />
        <label htmlFor="message">Message:</label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          name="message"
          placeholder="Enter your message"
          required
        />
        <br />
        
        {/* Invisible reCAPTCHA v3 */}
        <ReCAPTCHA
          sitekey={RECAPTCHA_SITE_KEY}
          size="invisible"
          onChange={(token) => setCaptchaToken(token)}
        />

        <br />
        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send"}
        </button>
      </form>
      {status && <p>{status}</p>}
    </div>
  );
}
