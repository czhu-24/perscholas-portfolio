import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

  // with useState, this component is re-rendering on each user input
  // but with useRef, it's persisting even after user input
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          // clear the form
          form.current.reset();
        },
        (error) => {
          console.error('Email sending failed:', error);
        }
      );
  };



  return (
    <div id="contactme" className="container">
      <h2 className="text-center">Contact Me</h2>
      <div className="row justify-content-center">
        <div className="col-lg-8" style={{ maxWidth: '70%' }}>
          <form ref={form} className="mb-3" onSubmit={sendEmail}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
              <input type="text" name="from_name" id="name" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" name="reply_to" id="email" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message:</label>
              <textarea name="message" id="message" rows="10" className="form-control" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
