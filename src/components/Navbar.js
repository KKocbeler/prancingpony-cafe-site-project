import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';
import MobileNavbar from './MobileNavbar';
import ShopCart from './Shop/ShopCart';

const Navbar = () => {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isHomePage, setIsHomePage] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);
    const [isShopCartOpen, setIsShopCartOpen] = useState(false);

    const handleShopCart = () => {
        setIsShopCartOpen(!isShopCartOpen)
    }
 
    const handleToggleMenu = () => {
        setMobileMenu(!mobileMenu);
    }

    useEffect(() => {

        setIsHomePage(location.pathname === '/' || location.pathname === '/shop');

        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
                setMobileMenu(false);
            } else {
                setIsScrolled(false)
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [location.pathname])

  return (
    <nav style={{backgroundColor: isScrolled ? 'var(--dark-bg)' : (isHomePage ? "transparent" : 'var(--dark-bg)')}}>
        <h1> <Link to={'/'}>PRANCING <span>PONY</span></Link></h1>
        <i className="fa-solid fa-bars" onClick={handleToggleMenu}></i>
        <ul className="nav-list">
            <li><NavLink to="/" activeClassName="active">HOME</NavLink></li>
            <li><NavLink to="/menu" activeClassName="active">MENU</NavLink></li>
            <li><NavLink to="/shop" activeClassName="active">SHOP</NavLink></li>
            <li><NavLink to="/contact" activeClassName="active">CONTACT US</NavLink></li>
            <span>|</span>
            <li className={`icon-li ${isScrolled ? 'scrolled' : ''} ${isHomePage ? '' : 'scrolled'}`}>
                <i className="fa-solid fa-bag-shopping" onClick={handleShopCart}></i>
                <ShopCart isShopCartOpen={isShopCartOpen}/>
            </li>
        </ul>
        <MobileNavbar mobileMenu={mobileMenu} handleToggleMenu={handleToggleMenu} isShopCartOpen={isShopCartOpen} handleShopCart={handleShopCart}/>
    </nav>
  )
}

export default Navbar