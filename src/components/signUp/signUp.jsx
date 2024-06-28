import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signUp.css'; 

const SignUp = ({ doSignup }) => {
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const nowSignup = () => {
    doSignup(newName, newPassword, newUsername, newEmail);
  }

  return (
    <div className="signup-container">
      <div className="signup-form">
        <h1 className="signup-title">Create Your Account</h1>
        <input
          type="text"
          className="signup-input"
          placeholder="Name"
          aria-label="First name"
          onChange={(e) => setNewName(e.target.value)}
        />
        <input
          type="email"
          className="signup-input"
          placeholder="Email"
          aria-label="Last name"
          onChange={(e) => setNewEmail(e.target.value)}
        />
        <input
          type="text"
          className="signup-input"
          placeholder="Username"
          aria-label="Username"
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <input
          type="password"
          className="signup-input"
          placeholder="Password"
          aria-label="Password"
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Link to="/data">
          <button className="signup-button" type="button" onClick={nowSignup}>Sign Up</button>
        </Link>
      </div>
    </div>
  );
}

export default SignUp;
