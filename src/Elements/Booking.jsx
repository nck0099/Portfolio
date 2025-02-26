import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default function Booking() {
  const [selectedSession, setSelectedSession] = useState(null);
  const [formVisible, setFormVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [paymentId, setPaymentId] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);
  const [payment, setPayment] = useState(false);
  const [paymentCross, setPaymentCross] = useState(false);

  const sessions = [
    { id: 1, title: "Cybersecurity Career Guidance & Roadmap", duration: "30 mins", price: "₹1,599" },
    { id: 2, title: "1:1 Mentorship for Beginners", duration: "20 mins", price: "₹999" },
    { id: 3, title: "Ethical Hacking & Red Teaming Basics", duration: "35 mins", price: "₹1,799" },
    { id: 4, title: "Resume & LinkedIn Profile Review for Cybersecurity Roles", duration: "25 mins", price: "₹1,099" },
    { id: 5, title: "Advanced Cybersecurity Mentorship (Custom Topic)", duration: "60 mins", price: "₹2,999" },
  ];

  // Minimum selectable date is 24 hours from now
  const minDate = new Date();
  minDate.setHours(minDate.getHours() + 24);

  // Restrict available time slots
  const filterTime = (time) => {
    const selectedDay = selectedDate ? selectedDate.getDay() : new Date().getDay(); // Get the selected day
    const selectedHour = time.getHours();

    // Weekdays (Mon-Fri) -> Allow only 9PM - 11PM
    if (selectedDay >= 1 && selectedDay <= 5) {
      return selectedHour >= 21 && selectedHour < 23;
    }

    // Weekends (Sat-Sun) -> Allow only 1PM - 5PM
    if (selectedDay === 6 || selectedDay === 0) {
      return selectedHour >= 13 && selectedHour < 17;
    }

    return false;
  };

  // Handles session selection and opens the form
  const handleSelectSession = (session) => {
    setSelectedSession(session);
    setFormVisible(true);
  };

  // Handles form submission and sends confirmation email
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedDate) {
      setStatus('Please select a valid date and time.');
      return;
    }

    setLoading(true);
    setStatus('');

    try {
      const response = await axios.post('https://maild.netlify.app/api/mail', {
        to: email,
        subject: '1-on-1 Cybersecurity Session Booking Confirmation',
        text: `Hello ${name},\n\nYou have successfully booked a cybersecurity session:\n\nSession: ${selectedSession.title}\nDuration: ${selectedSession.duration}\nPrice: ${selectedSession.price}\nScheduled Date & Time: ${selectedDate}\n\nYou will receive a confirmation within 24 hours.\n\nThank you!`
      });

      console.log(response.data);
      setStatus('Booking confirmed! You have received an email acknowledging your request. We will verify your payment ID, and if confirmed, you will receive a final confirmation email within 24 hours.');
      alert('Booking confirmed! You have received an email acknowledging your request.');

      // Clear form fields
      setName('');
      setEmail('');
      setSelectedDate(null);
      setSelectedSession(null);
      setFormVisible(false);
      setPaymentCross(true);
    } catch (error) {
      console.error(error);
      setStatus('Failed to send booking request.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-container">
      <h2>Select a 1-on-1 Cybersecurity Session</h2>

      {/* Session Selection */}
      <div className="session-list">
        {sessions.map((session) => (
          <div key={session.id} className="session-box" onClick={() => handleSelectSession(session)}>
            <h3>{session.title}</h3>
            <p><strong>Duration:</strong> {session.duration}</p>
            <p><strong>Price:</strong> {session.price}</p>
          </div>
        ))}
      </div>

      {/* Booking Form */}
      {formVisible && selectedSession && (
        <div className="booking-form slide-down">
          <button className="close-btn" onClick={() => setFormVisible(false)}>✖</button>
          <br /><br />
          <h3>You Selected: {selectedSession.title}</h3>
          <p><strong>Duration:</strong> {selectedSession.duration}</p>
          <p><strong>Price:</strong> {selectedSession.price}</p>

          <form onSubmit={(e) => {
            e.preventDefault();
            setPayment(true);
            setFormVisible(false);
          }}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              id="name"
              placeholder="Enter your name"
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              placeholder="Enter your email"
              required
            />

            <label htmlFor="date">Select Date & Time:</label>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => setSelectedDate(date)}
              showTimeSelect
              filterTime={filterTime} // Restrict time selection
              minDate={minDate}
              dateFormat="MMMM d, yyyy h:mm aa"
              placeholderText="Choose a session time"
              required
            />

            <button type="submit" disabled={loading || !selectedDate}>
              {loading ? 'Booking...' : 'Book Now'}
            </button>
          </form>

          {status && <p className="status-message">{status}</p>}
        </div>
      )}

      {/* Payment Section */}
      {payment && (
        <div className="booking-form slide-down">
          {paymentCross && <button className="close-btn" onClick={() => setPayment(false)}>✖</button>}
          <br /><br />
          <h1>Scan the QR-Code to Pay</h1>
          <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg" alt="QR Code" />
          
          <form onSubmit={handleSubmit}>
            <label htmlFor="paymentId">Payment ID:</label>
            <input
              type="text"
              value={paymentId}
              onChange={(e) => setPaymentId(e.target.value)}
              id="paymentId"
              placeholder="Enter your payment ID"
              required
            />

            <button type="submit" disabled={loading || !selectedDate}>
              {loading ? 'Booking...' : 'Confirm Payment'}
            </button>
          </form>

          {status && <p className="status-message">{status}</p>}
        </div>
      )}
    </div>
  );
}
