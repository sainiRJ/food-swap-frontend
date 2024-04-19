import React from 'react';
import styles from './RegistrationPage.module.css'; // Import CSS module
import google from '../assets/images/google.jpeg';

function RegistrationPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button className={styles.closeButton}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <a className={styles.logo} href="#">
          <i className="fa-brands fa-twitter"></i>
        </a>
      </div>

      <div className={styles.content}>
        <h1>Registration</h1>

        <div className={styles.actionButtons}>
          <button className={`${styles.primaryButton} ${styles.signInButton}`}>
            <img src={google} alt="" />
            <span>Register with Google</span>
          </button>
        </div>

        <div className={styles.divider}>
          <p>or</p>
        </div>

        <div className={styles.emailRegister}>
          <input type="text" id="log-in" placeholder="Email" />
          <label htmlFor="log-in">Name</label>
        </div><br />

        <div className={styles.password}>
          <input type="password" id="log-in" placeholder="password" />
          <label htmlFor="log-in">Password</label>
        </div><br />

        <div className={styles.password}>
          <input type="password" id="log-in" placeholder="password" />
          <label htmlFor="log-in">Confirm-Password</label>
        </div>

        <div className={styles.actionButtons}>
          <button className={styles.primaryButton}>Next</button>
        </div>
      </div>
    </div>
  );
}

export default RegistrationPage;
