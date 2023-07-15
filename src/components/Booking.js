import React, { useState } from 'react';
import './boking.css';


const BookingForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [submittedName, setSubmittedName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic
    setSubmittedName(name); // Save the submitted name
    console.log('Form submitted!');
  };

  return (
    <div className="booking-form" >
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form-heading">Book Now</h2>
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            className="form-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="date" className="form-label">
            Date
          </label>
          <input
            type="date"
            id="date"
            className="form-input"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="time" className="form-label">
            Time
          </label>
          <select
            id="time"
            className="form-input"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            <option value="">Select a time</option>
            <option value="morning">Morning</option>
            <option value="afternoon">Afternoon</option>
            <option value="evening">Evening</option>
          </select>
        </div>
        <button
              style={{
                width: 100,
                height: 35,
                left: 27,
                top: 420,
                position: "absolute",
                color: "white",
                fontSize: 14,
                fontFamily: "Poppins",
                fontWeight: "40",
                wordWrap: "break-word",
                background: "#4CAF50",
                borderRadius: 30,
              }}
            >
              Book Now
            </button>
      </form>
      
      {submittedName && <p className="submitted-name">Thank you, {submittedName}, for your submission!</p>}

      <div className="Group1" style={{width: 100, height: 90, position: 'absolute'}}>
  <div className="Rectangle1" style={{width: 1260, height: 99, left: -582, top: 349, position: 'absolute', background: '#008000', boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)'}} />
  <div className="2023TripPlanAllRightsReserved " style={{width: 400, height: 9,left: -100, top: 386, position: 'relative', color: 'white', fontSize: 20, fontFamily: 'Poppins', fontStyle: 'italic', fontWeight: '600', wordWrap: 'break-word'}}>© 2023  Trip Plan. All rights reserved</div>
</div>
    </div>
    
  );
};

export default BookingForm;