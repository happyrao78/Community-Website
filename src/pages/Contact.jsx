import React, { useRef } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID;

    console.log("EmailJS service ID:", serviceId);   
    console.log("EmailJS template ID:", templateId); 
    console.log("EmailJS user ID:", userId);        

    emailjs.sendForm(serviceId, templateId, form.current, userId)
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);  
          alert('Message sent successfully!');
        },
        (error) => {
          console.error('Error sending email:', error.text); 
          alert('Oops! Something went wrong.');
        }
      );

    e.target.reset(); 
  };

  return (
    <div className="bg-gray-100 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
          Contact Us
        </h1>
        <p className="text-center text-gray-600 mb-8">
          We’d love to hear from you! Fill out the form below and we’ll get back to you as soon as possible.
        </p>
        <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
          <form ref={form} onSubmit={sendEmail}>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                placeholder="Your Message"
                rows="5"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
