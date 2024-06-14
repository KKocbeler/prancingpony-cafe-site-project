import React from 'react';
import './HomeTypes.css';
import { Link } from 'react-router-dom';

const HomeTypes = () => {
  return (
    <div className="home-types container">
        <div className="type-title">
            <h2>Dessert Varieties</h2>
        </div>
        <div className='dessert-types'>
            <div className='dessert-type'>
                <img src="/images/home/types-1.webp" alt="" />
                <div className='dessert-type__describtion'>
                    <Link to={'/menu/cake'}>CAKES</Link>
                </div>
            </div>
            <div className='dessert-type'>
                <img src="/images/home/types-2.webp" alt="" />
                <div className='dessert-type__describtion'>
                    <Link to={'/menu'}>BAKLAVA</Link>
                </div>
            </div>
            <div className='dessert-type'>
                <img src="/images/home/types-3.jpg" alt="" />
                <div className='dessert-type__describtion'>
                    <Link to={'/menu'}>COOKIES</Link>
                </div>
            </div>
            <div className='dessert-type'>
                <img src="/images/home/types-4.jpg" alt="" />
                <div className='dessert-type__describtion'>
                    <Link to={'/menu/pie'}>PIES</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeTypes