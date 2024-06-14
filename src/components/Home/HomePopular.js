import React, { useContext, useEffect, useState } from 'react';
import './HomePopular.css';
import { Link } from 'react-router-dom';
import Loading from '../Pieces/Loading';
import Error from '../Pieces/Error';
import ProductContext from '../../contexts/ProductContext';
import Card from '../Pieces/Card';

const HomePopular = () => {
    const {products, error, loading, addProduct} = useContext(ProductContext)
    const [popular, setPopular] = useState(null)

    useEffect(() => {
        if (products) {
            const popularProducts = products.desserts.filter(product => product.id <= 9);
            setPopular(popularProducts)
        }
    }, [products])

    console.log(popular)
  return (
    <div className='home-popular container'>
        <div className="popular-title">
            MOST POPULAR
        </div>
        <div className="popular-products">
            {
                loading ? (
                    <Loading />
                ) : error ? (
                    <Error />
                ) : (
                    popular && popular.map(item => (
                        <Card item={item} addProduct={() => addProduct(item)}/>
                    ))
                )
            }

        </div>
    </div>
  )
}

export default HomePopular