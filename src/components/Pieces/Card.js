import React, { useState } from 'react';
import './Card.css';
import { Link } from 'react-router-dom';


const Card = ({item, addProduct}) => {
    const [showAdded, setShowAdded] = useState(false)

    const handleAddProduct = () => {
        addProduct(item);
        setShowAdded(true)
        setTimeout(() => {
            setShowAdded(false)
        }, 200)
    }

  return (
    <>
        <div>
            <div className="item-card">
                <div className="card-image">
                    <img loading='lazy' src={`/images/menu/${item.image}`} alt="" />
                </div>
                <Link to={`/menu-details/${item.name.toLowerCase().replace(/ /g, '-')}`}>
                    <div className="card-body">
                            <h3>{item.name}</h3>
                            <div className='item-price'>${item.price}</div>
                    </div>
                </Link>
                <div className="add-item" key={item.id} onClick={handleAddProduct}>
                    <i className="fa-solid fa-plus"></i>
                </div>
                {
                    showAdded ? (
                        <div className="added-message">
                            <i className="fa-solid fa-check"></i>
                        </div>
                    ) : null

                }
            </div>
        </div>
    </>
  )
}

export default Card