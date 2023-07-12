import React, { useState } from 'react';
import "../styles/Contact.css";

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any fields are missing
    const errors = {};
    if (name.trim() === '') {
      errors.name = 'Name is required';
    }
    if (email.trim() === '') {
      errors.email = 'Email is required';
    }
    if (message.trim() === '') {
      errors.message = 'Message is required';
    }

    // Display errors if any
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    // Process form submission here
    console.log('Form submitted:', { name, email, message });
    
  };

  return (
    <section className="contact-section">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
