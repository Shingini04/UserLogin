import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './components/signUp/signUp.jsx';
import Login from './components/login/login.jsx';
import Home from './components/home/home.jsx';
import Data from './components/data/data.jsx';
import Footer from './components/footer/footer.jsx';
import Header from './components/header/header.jsx';

const Root = () => {
  const [name, setName] = useState("John Doe");
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('johndoe@gmail.com');

  const doSignup = (newName, newPassword, newUsername, newEmail) => {
    setName(newName);
    setPassword(newPassword);
    setUsername(newUsername);
    setEmail(newEmail);
    console.log(newName, newPassword, newEmail, newUsername);
  }

  const doLogin = (newPassword, newUsername) => {
    setPassword(newPassword);
    setUsername(newUsername);
    console.log(newPassword, newUsername);
  }

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signUp" element={<SignUp doSignup={doSignup}/>}/>
        <Route path="/login" element={<Login doLogin={doLogin}/>}/>
        <Route path="/data" element={<Data name={name} password={password} username={username} email={email}/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default Root;

