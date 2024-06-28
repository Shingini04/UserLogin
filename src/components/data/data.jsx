import React from 'react';
import './data.css';

const Data = ({ name, password, username, email }) => {
  return (
    <div className="data-wrap">
    <div className="data-container">
      <h1 className="data-title">Your Profile</h1>
      <div className="data-card">
        <div className="data-field">
          <span className="data-label">Name</span>
          <span className="data-value">{name}</span>
        </div>
        <div className="data-field">
          <span className="data-label">Username</span>
          <span className="data-value">{username}</span>
        </div>
        <div className="data-field">
          <span className="data-label">Email</span>
          <span className="data-value">{email}</span>
        </div>
        <div className="data-field">
          <span className="data-label">Password</span>
          <span className="data-value">{password}</span>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Data;
