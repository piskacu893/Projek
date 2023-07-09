// src/components/About.js

import React, { useState } from 'react';
import Styles from "../components/boking.css";
const Booking = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    // Display a thank you message
    setIsSubmitted(true);

    // Reset the form
    setName('');
    setEmail('');
    setDate('');
    setTime('');
  };

  return (
    <div className="overlay" style={{ backgroundImage: 'url("path/img/istockphoto-160238476-612x612.jpg")' }}>
      <div className="container mx-auto max-w-md p-4 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4">Booking Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-bold">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block mb-2 font-bold">Date:</label>
            <input
              type="date"
              id="date"
              name="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block mb-2 font-bold">Time:</label>
            <select
              id="time"
              name="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              required
              className="w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Select a time</option>
              <option value="morning">Morning</option>
              <option value="afternoon">Afternoon</option>
              <option value="evening">Evening</option>
            </select>
          </div>
          <div className="mb-4">
            <input type="submit" value="Book Now" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 cursor-pointer" />
          </div>
        </form>
        {isSubmitted && (
          <p className="message">
            Thank you, {name}! Your booking has been confirmed.
          </p>
        )}
      </div>
    </div>
  );
};

export default Booking;