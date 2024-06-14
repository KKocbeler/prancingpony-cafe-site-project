import React, { useEffect, useState } from 'react';
import './ShopPage.css';
import { Link } from 'react-router-dom';
import Loading from '../Pieces/Loading';
import Error from '../Pieces/Error';
import data from '../../data/data.json';

const ShopPage = () => {
    const [products, setProducts] = useState(null)
    const [defaultProducts, setDefaultProducts] = useState(null)
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false)

    const handleFavorite = (productId) => {
        const updatedProducts = products.map(product =>
            product.id === productId ? {...product, isFavorite: !product.isFavorite} : product
        );
        setProducts(updatedProducts);    
    }

    const sortProductsAZ = () => {
        const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
        setProducts(sortedProducts);
    }

    const sortProductsZA = () => {
        const sortedProducts = [...products].sort((a, b) => b.name.localeCompare(a.name));
        setProducts(sortedProducts);
    }

    const priceToLow = () => {
        const sortedProducts = [...products].sort((a, b) => b.price - a.price);
        setProducts(sortedProducts)
    }

    const priceToHigh = () => {
        const sortedProducts = [...products].sort((a, b) => a.price - b.price);
        setProducts(sortedProducts)
    }

    const handleSortChange = (e) => {
        const value = e.target.value;
        if (value === 'az') {
            sortProductsAZ();
        } else if (value === 'za') {
            sortProductsZA()
        } else if (value === 'default') {
            setProducts(defaultProducts)
        } else if (value === 'tolow') {
            priceToLow()
        } else if (value === 'tohigh') {
            priceToHigh()
        }
    }

    useEffect(() => {
        setProducts(data.shop);
        setDefaultProducts(data.shop);
        setLoading(false);
    }, [])

    console.log(products)
  return (
    <>
        {
            loading ? (
                <Loading /> 
            ) : error ? (
                <Error />
            ) :
            <>
            <div className="shop-image overlay"></div>
            <div className="shop-menu container">
                <div className='shop-title'>PRANCING <span>PONY</span> SHOP</div>
                <div className="shop-info">
                    <div className="shop-products">{products.length} Products</div>
                    <select className="shop-sort" onChange={handleSortChange}>
                        <option value="default">Default</option>
                        <option value="az">Alphabetically, A-Z</option>
                        <option value="za">Alphabetically, Z-A</option>
                        <option value="tohigh">Price, low to high</option>
                        <option value="tolow">Price, high to low</option>
                    </select>
                </div>
                <div className="shop-carts">
                    {
                        products && products.map((product, id) => (
                            <div className="shop-cart" key={id}>
                                <div className="shop-cart_icon">
                                    {
                                        product.isFavorite ? (
                                            <i className="fa-solid fa-heart" onClick={() => handleFavorite(product.id)}></i>
                                        ) :
                                            <i className="fa-regular fa-heart" onClick={() => handleFavorite(product.id)}></i>
                                    }
                                    
                                </div>
                                <div className="shop-cart_image">
                                    <img loading='lazy' src={product.image} alt={product.name} />
                                </div>
                                <div className="shop-cart_body">
                                    <h4>{product.name} <span>({product.capacity})</span></h4>
                                    <div className="shop-cart-price">${product.price.toFixed(2)}</div>
                                    <div className="shop-cart-button btn"><i className="fa-solid fa-bag-shopping"></i> Add to Cart</div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
            </>
        }
    </>
  )
}

export default ShopPage