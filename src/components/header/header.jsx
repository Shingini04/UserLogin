import React from 'react'
import './header.css'

const Header = () => {
  return (
    <>
        <header className="header">
        <div className="logo" id="company-logo">Company Logo</div>
        <nav className="navigation">
            <ul className="nav-list">
                <div><li className="nav-item" id="home-link"><a href="#home">Home</a></li></div>
                <div><li className="nav-item" id="about-link"><a href="#about">About</a></li></div>
                <div><li className="nav-item" id="contact-link"><a href="#contact">Contact Us</a></li></div>
            </ul>
        </nav>
    </header>
    </>
  )
}

export default Header
