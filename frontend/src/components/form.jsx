import React, { useState } from 'react';
import axios from 'axios';
import dotenv from "dotenv";

// dotenv.config({ path: "./config/config.env" });
const FormFrontend = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    date: '',
    time: '',
    email: '',
    phone: '',
  });


  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    axios({
      method: 'post',
      url: 'process.env.FRONTEND_URL  + '/api/v1/form/send',
      data: formData,
    })
      .then((response) => {
        console.log(response.data);
        setSuccessMessage('Appointment Booked!');
        clearForm();
      })
      .catch((error) => {
        console.error('Error sending form data:', error);
        setErrorMessage('Error submitting form. Please try again.');
      });
    
    // Clear messages after 5 seconds
    setTimeout(() => {
      setSuccessMessage('');
      setErrorMessage('');
    }, 5000);
  };
  
  const clearForm = () => {
    setFormData({
      firstName: '',
      lastName: '',
      date: '',
      time: '',
      email: '',
      phone: '',
    });
  };
  



  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id="Form-sec" className="container mt-3 col-6">
      <h1 className="appointment mb-4">Book Appointment</h1>
      <form onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="mb-3">
          <label className="form-label">First Name:</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            minLength="3"
            maxLength="30"
            required
          />
        </div>

        {/* Last Name */}
        <div className="mb-3">
          <label className="form-label">Last Name:</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            minLength="3"
            maxLength="30"
            required
          />
        </div>

        {/* Date */}
        <div className="mb-3">
          <label className="form-label">Date:</label>
          <input
            type="date"
            className="form-control"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />
        </div>

        {/* Time */}
        <div className="mb-3">
          <label className="form-label">Time:</label>
          <input
            type="time"
            className="form-control"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />
        </div>

        {/* Email */}
        <div className="mb-3">
          <label className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        {/* Phone */}
        <div className="mb-3">
          <label className="form-label">Phone:</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            minLength="11"
            maxLength="11"
            required
          />
        </div>

        {errorMessage && (
            <div className="alert alert-danger col-4" role="alert">
              {errorMessage}
            </div>
          )}


        {successMessage && (
            <div className="alert alert-success col-4" role="alert">
              {successMessage}
            </div>
          )}


        {/* Submit Button */}
        <button type="submit" className="btn btn-primary ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormFrontend;
