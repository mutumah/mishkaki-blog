import React, { useState } from "react";
import { Helmet } from 'react-helmet-async'; // You'll need to install this package
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setError(""); // Clear any previous errors when user starts typing
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.name.trim()) {
      setError("Please enter your name");
      return false;
    }
    
    if (!emailRegex.test(formData.email.trim())) {
      setError("Please enter a valid email address");
      return false;
    }
    
    if (!formData.message.trim()) {
      setError("Please enter your message");
      return false;
    }
    
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (validateForm()) {
      try {
        // In a real-world scenario, you would replace this with an actual API call
        console.log("Form Submitted:", formData);
        setSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: "", email: "", message: "" });
        }, 3000);
      } catch (submitError) {
        setError("Failed to send message. Please try again.");
      }
    }
  };

  return (
    <div className="contact">
      {/* SEO Metadata */}
      <Helmet>
        <title>Contact Mishkaki Blog | BBQ Experts Await Your Message</title>
        <meta 
          name="description" 
          content="Connect with Mishkaki Blog's BBQ experts. Share your grilling questions, recipes, and passion for barbecue. We're eager to hear from fellow food enthusiasts!" 
        />
        <meta 
          name="keywords" 
          content="BBQ contact, grilling tips, barbecue blog, recipe sharing, cooking community" 
        />
        <link rel="canonical" href="/contact" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Mishkaki Blog Contact",
            "description": "Contact page for BBQ and grilling enthusiasts",
            "publisher": {
              "@type": "Organization",
              "name": "Mishkaki Blog"
            }
          })}
        </script>
      </Helmet>


      <div className="contact-header">
        <h1>Connect with Mishkaki</h1>
        <p>Got a sizzling question, secret recipe, or BBQ tip? We'd love to hear from you!</p>
      </div>

      {submitted ? (
        <div className="success-message">
          🔥 Thanks for reaching out! We'll get back to you soon. 🍖
        </div>
      ) : (
        <form 
          onSubmit={handleSubmit} 
          className="contact-form"
          aria-label="Contact form"
        >
          {error && <div className="error-message">{error}</div>}

          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input 
              id="name"
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              placeholder="Your full name"
              required 
              aria-required="true"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input 
              id="email"
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              placeholder="your.email@example.com"
              required 
              aria-required="true"
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea 
              id="message"
              name="message" 
              value={formData.message} 
              onChange={handleChange} 
              placeholder="Share your BBQ thoughts, questions, or ideas..."
              required 
              aria-required="true"
            />
          </div>

          <button 
            type="submit" 
            className="submit-button"
            aria-label="Send message"
          >
            Send Your Message
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;