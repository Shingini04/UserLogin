import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = ({ doLogin }) => {
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const nowLogin = () => {
    doLogin(newUsername, newPassword);
  }

  return (
    <div className="login-container">
      <div className="login-form">
        <input
          type="text"
          className="login-input"
          placeholder="Username"
          onChange={(e) => setNewUsername(e.target.value)}
        />
        <input
          type="password"
          className="login-input"
          placeholder="Password"
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Link to="/data">
          <button className="login-button" type="button" onClick={nowLogin}>Log In</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;

