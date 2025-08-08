import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <img className='logo' src={assets.logo} alt="" />
            <p>Fast delivery | Fresh ingredients | 24/7 service</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+919857548343</li>
                    <li>contact@mealmatrix.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">© 2025 Food Delivery App. All rights reserved.</p>
    </div>
  )
}

export default Footer
