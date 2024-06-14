import React from 'react';
import './HomeMap.css';

const HomeMap = () => {
  return (
    <div className='home-map container'>
        <div className="home-map__map">
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1852.215267669081!2d29.41221992072393!3d38.67089458372161!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2str!4v1716757386629!5m2!1str!2str"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
        <div className="home-map__contact">
            <div className="slogan">
                <h2>Welcome to Our Cozy Cafe!</h2>
            </div>
            <div className='address'>
                <p><strong>Address:</strong> 123 Example St, Istanbul</p>
                <p><strong>Phone:</strong> (123) 456-7890</p>
                <p><strong>Email:</strong> info@cafe.com</p>
                <p><strong>Operating Hours:</strong> 09:00 - 22:00</p>
            </div>

        </div>
    </div>
  )
}

export default HomeMap