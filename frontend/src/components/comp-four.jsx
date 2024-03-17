import React, { useState } from 'react';
import axios from 'axios';
import data from "../../src/restApi.json"
import "./css/comp-four.css";

// dotenv.config({ path: "../../config/config.env" });
const FormFrontend = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });


    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: data.BACKEND_URL + 'api/v1/form/send',
            data: formData,
        })
            .then((response) => {
                console.log(response.data);
                setSuccessMessage('Your Message has been Recorder!');
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
            email: '',
            phone: '',
            message: '',
        });
    };




    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <div className="container container-selected">
            <div className="row col-md-7">
                
            <img className="contact-img" src="contact.jpg" alt="" />


            </div>

            <div id="Form-sec" className="container mt-3 col-md-5">
                <form className="mb-6" onSubmit={handleSubmit}>
                    
                <h1>Talk With Us </h1>
                    {/* First Name */}
                    <div className="mb-3">
                        <label>First Name:</label>
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
                    
                    {/* message */}
                    <div className="mb-3">
                        <label className="form-label">Message:</label>
                        <textarea
                        className="form-control"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="2"
                        minLength="2"
                        required
                    ></textarea>
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
                    <button type="submit" >
                        Submit
                    </button>
                </form>
            </div>

        </div>
    );
};

export default FormFrontend;
