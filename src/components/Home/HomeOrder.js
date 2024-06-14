import React from 'react';
import './HomeOrder.css';
import { Link } from 'react-router-dom';

const HomeOrder = () => {
    return (
        <div className='home-order'>
                <h1>ORDER ONLINE</h1>
                <h2>Pick Up YoureFavorite Food</h2>
                <p>Got a sweet craving? Don't worry - order now!</p>
                <Link to={'/menu'}>ORDER ONLINE</Link>
        </div>
    )
}

export default HomeOrder