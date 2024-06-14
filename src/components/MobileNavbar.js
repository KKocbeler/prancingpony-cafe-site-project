import React from 'react';
import './MobileNavbar.css';
import { Link } from 'react-router-dom';
import ShopCart from './Shop/ShopCart';

const MobileNavbar = ({mobileMenu, handleToggleMenu, isShopCartOpen, handleShopCart}) => {
return (
    <div className={`mobile-navbar ${mobileMenu ? 'show' : ''}`}>
        <div className='mobile-header'>
            <i className="fa-solid fa-x" onClick={handleToggleMenu}></i>
        </div>
        <div className='mobile-cart'>
                <i className="fa-solid fa-bag-shopping" onClick={handleShopCart}></i>
                <ShopCart isShopCartOpen={isShopCartOpen} handleShopCart={handleShopCart}/>
            </div>
        <ul className="mobile-menu-list">
            <li>
                <Link to={'/'} onClick={handleToggleMenu}> <i className="fa-solid fa-house"></i> HOME </Link>
            </li>
            <li>
                <Link to={'/menu'} onClick={handleToggleMenu}><i className="fa-solid fa-book"></i> MENU</Link>
            </li>
            <li>
                <Link to={'/shop'} onClick={handleToggleMenu}><i className="fa-solid fa-shop"></i> SHOP</Link>
            </li>
            <li>
                <Link to={'/contact'} onClick={handleToggleMenu}><i className="fa-solid fa-message"></i> CONTACT US</Link>
            </li>

        </ul>
    </div>
)}

export default MobileNavbar