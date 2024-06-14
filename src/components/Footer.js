import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-menu">
        <div className="footer-list">
            <h3>QUICK LINKS</h3>
            <ul>
                <li><Link to="/">Beverage Menu</Link></li>
                <li><Link to="/">Food Menu</Link></li>
                <li><Link to="/">Shop PrancingPony</Link></li>
                <li><Link to="/">Beverage Menu</Link></li>
                <li><Link to="/">About</Link></li>
            </ul>
        </div>
        <div className="footer-list">
            <h3>STAY CONNECTED</h3>
            <ul>
                <li><Link to="/">Get the Mobile App</Link></li>
                <li><Link to="/">Join Email List</Link></li>
                <li><Link to="/">Loyalty Program</Link></li>
            </ul>
        </div>
        <div className="footer-list">
            <h3>JOIN TEXT CLUB</h3>
            <form action="">
                <input type="email" placeholder="Email" required/>
                <button type="submit">Subscribe</button>
            </form>
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
    </footer>
  );
};

export default Footer;
