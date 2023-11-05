import React, { useState } from 'react';
import emailjs from 'emailjs-com';


const ContactMe = () => {
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (error) => {
          console.error('Email sending failed:', error);
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div id="contactme" className="container">
      <h2 className="text-center">Contact Me</h2>
      <div className="row justify-content-center">
        <div className="col-lg-8" style={{ maxWidth: '70%' }}>
          <form className="mb-3" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <input type="text" name="name" id="name" className="form-control" onChange={handleChange} value={formData.name} />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" name="email" id="email" className="form-control" onChange={handleChange} value={formData.email} />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message:</label>
              <textarea name="message" id="message" rows="10" className="form-control" onChange={handleChange} value={formData.message} />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
