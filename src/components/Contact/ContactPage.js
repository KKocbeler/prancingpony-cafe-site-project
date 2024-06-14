import React from 'react';
import './ContactPage.css';
import { Link } from 'react-router-dom';

const ContactPage = () => {
  return (
    <div className='contact-page content container'>
        <div className="contact-main">
            <div className="contact-title">CONTACT US</div>
            <div className="contact-form">
                <h2>ONLINE INQUIRY</h2>
                <form>
                    <div className="input-box">
                        <input type="text" id="name" required/>
                        <label for="name">Name</label>
                    </div>
                    <div className="input-box">
                        <input type="text" id="last-name" required/>
                        <label for="last-name">Last Name</label>
                    </div>
                    <div className="input-box">
                        <input type="email" id="email" required/>
                        <label for="email">Email</label>
                    </div>
                    <div className="input-box">
                        <textarea id="message" required></textarea>
                        <label for="message">Message</label>
                    </div>
                    <button className='btn' type='submit'>
                        Send Message
                    </button>
                </form>
            </div>
            <div className="contact-address">
                <h2>CONTACT DETAILS</h2>
                <div className="address-details">
                    <div className='detail-box'>
                        <i className="fa-solid fa-location-dot"></i>
                        <p> <strong>Address</strong> <br /> 123 Example Street, Example City, EX 12345 </p>
                    </div>
                    <div className='detail-box'>
                        <i className="fa-solid fa-phone"></i>
                        <p> <strong>Phone</strong> <br /> (123) 456-7890 </p>
                    </div>
                    <div className='detail-box'>
                        <i className="fa-solid fa-envelope"></i>
                        <p> <strong>Email</strong> <br /> kkocbeler@gmail.com </p>
                    </div>
                </div>
                <div className="social-links">
                <Link>
                    <i className="fa-brands fa-facebook-f"></i>
                </Link>
                <Link>
                    <i className="fa-brands fa-x-twitter"></i>
                </Link>
                <Link>
                    <i className="fa-brands fa-instagram"></i>
                </Link>
                <Link>
                    <i className="fa-solid fa-envelope"></i>
                </Link>
            </div>
            </div>
        </div>
    </div>
  )
}

export default ContactPage