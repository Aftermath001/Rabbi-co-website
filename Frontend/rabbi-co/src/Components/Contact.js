import React from 'react'
// import { NavLink } from 'react-router-dom';
import '../App.css'
import emailjs from "@emailjs/browser";
import { useState, useRef} from "react";

const Contact = () => {
    const form = useRef();
    const [done, setDone] =useState(false)
    const sendEmail = (e) => {
    
      e.preventDefault();
  
      emailjs.sendForm('service_mq26hwp', 'template_jgslvc4', form.current, 'pdmJy99_J0YNVkPLW')
        .then((result) => {
            console.log(result.text);
               setDone(true)
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <section id="Contact" className="contact-section">
      <div>
        <p className="sub-title">Get In Touch</p>
        <h2>Contact Us</h2>
        <p className="text-lg">
         Send Me an Email
        </p>
      </div>
      <form className="contact-form-container" ref ={form} onSubmit={sendEmail}  >
        <div className="container">
          <label htmlFor="first-name" className="contact-label">
            <span className="text-md">First Name</span>
            <input
              type="text"
              className="contact-input text-md"
              name="first-name"
              id="first-name"
              required
            />
          </label>
          <label htmlFor="last-name" className="contact-label">
            <span className="text-md">Last Name</span>
            <input
              type="text"
              className="contact-input text-md"
              name="last-name"
              id="last-name"
              required
            />
          </label>
          <label htmlFor="email" className="contact-label">
            <span className="text-md">Email</span>
            <input
              type="email"
              className="contact-input text-md"
              name="email"
              id="email"
              required
            />
          </label>
          <label htmlFor="phone-number" className="contact-label">
            <span className="text-md">phone-number</span>
            <input
              type="number"
              className="contact-input text-md"
              name="phone-number"
              id="phone-number"
              required
            />
          </label>
        </div>
        <label htmlFor="choode-topic" className="contact-label">
          <span className="text-md">Choose a topic</span>
          <select id="choose-topic" className="contact-input text-md">
            <option>Select One...</option>
            <option>less than a month old</option>
            <option>2months-3months</option>
            <option>Older than 3 months</option>
          </select>
        </label>
        <label htmlFor="message" className="contact-label">
          <span className="text-md">Message</span>
          <textarea
            className="contact-input text-md"
            id="message"
            rows="8"
            placeholder="Type your message..."
          />
        </label>
        <label htmlFor="checkboc" className="checkbox-label">
          <input type="checkbox" required name="checkbox" id="checkbox" />
          <span className="text-sm">I accept the terms</span>
        </label>
        <div>
          <button className="btn btn-primary contact-form-btn">Submit</button>
        </div>
      </form>
    </section>
  )
}

export default Contact