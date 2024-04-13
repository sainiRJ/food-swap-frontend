import React from 'react';
import './RegistrationPage.css';
import google from '../assets/images/google.jpeg'



function Registration_page() {
  return (
    <div className="container">
    <div className="header">
      <button className="close-button">
        <i className="fa-solid fa-xmark"></i>
      </button>
      <a className="logo" href="#">
        <i className="fa-brands fa-twitter"></i>
      </a>
    </div>

    <div className="content">
      <h1>Registration</h1>


      <div className="action-buttons">
        <button className="primary-button sign-in-button">
          <img src={google} alt="" />
          <span>Register with Google</span>
        </button>
      </div>

      <div className="divider">
        <p>or</p>
      </div>

      <div className="email-register">
        <input type="text" id="log-in" placeholder="Email" />
        <label htmlFor="log-in">Name</label>
      </div><br />

      <div className="password">
        <input type="password" id="log-in" placeholder="password" />
        <label htmlFor="log-in">Password</label>
      </div><br />

      <div className="password">
        <input type="password" id="log-in" placeholder="password" />
        <label htmlFor="log-in">Confirm-Password</label>
      </div>

      <div className="action-buttons">
        <button className="primary-button">Next</button>
      </div>
    </div>
  </div>
  );
}

export default Registration_page;
