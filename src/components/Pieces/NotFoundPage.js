import React from 'react';
import './NotFoundPage.css';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className='error'>
            <div className="error-number">404</div>
            <div className="error-title">
                This page is unknown or does not exist
                <div className="error-text">
                    Sorry about that, but the page you looking for is not avalible
                </div>
            </div>
            <div className="error-button btn">
                <Link to={'/'}>Go to Home</Link>
            </div>
        </div>
    )
}

export default NotFoundPage