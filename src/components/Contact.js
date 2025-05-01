// import React from 'react'

// function Contact() {
//   return (
//     <div>

//     </div>
//   )
// }

// export default Contact;

import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [charCount, setCharCount] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "message") {
      setCharCount(value.length);
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate sending data to server
    setTimeout(() => {
      setSubmitted(true);
    }, 500);

    // Reset form
    setFormData({ name: "", email: "", message: "" });
    setCharCount(0);
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center">📞 Contact Us</h1>

      {submitted ? (
        <div className="text-green-600 text-center font-semibold">Thank you! We'll get back to you shortly.</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            required
            className="w-full px-4 py-2 border rounded"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            required
            className="w-full px-4 py-2 border rounded"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            required
            maxLength={500}
            rows={5}
            className="w-full px-4 py-2 border rounded resize-none"
          ></textarea>
          <p className="text-sm text-gray-500 text-right">{charCount}/500 characters</p>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;

