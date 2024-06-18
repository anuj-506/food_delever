import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className='footer-content-left'>
          <img src={assets.logo} alt='' />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi accusantium accusamus blanditiis rerum dignissimos quaerat quo magnam eaque quia expedita!</p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className='footer-content-center'>
        <h2>Company</h2>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Delivery</li>
          <li>privacy policy</li>
        </ul>
        </div>
        <div className='footer-content-right'>
         <h2>GET IN TOUCH</h2>
         <ul>
          <li>+1-287-458-8786</li>
          <li>mail@tomato.com</li>
         </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">copyright-2024 @ Tomato.com-All rights Reserved</p>
    </div>
  )
}

export default Footer