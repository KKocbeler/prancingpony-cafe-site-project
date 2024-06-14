import React, { useContext, useState } from 'react';
import './MenuPage.css';
import Card from '../Pieces/Card';
import Loading from '../Pieces/Loading';
import Error from '../Pieces/Error';
import { Link } from 'react-router-dom';
import ProductContext from '../../contexts/ProductContext';
import SearchBar from '../Pieces/SearchBar';

const MenuPage = () => {
    const {products, error, loading, addProduct} = useContext(ProductContext)
    const [filterActive, setFilterActive] = useState(false);

    const handleFilterCase = () => {
        setFilterActive(!filterActive)
    }

  return (
    <>
    {
        loading ? 
            ( <Loading /> ) :
        error ? 
            (<Error />) :
        <div className='menu-page container'>
            <SearchBar />
            <div className="item-type">
                <h2>Desserts</h2>
                <ul className={`item-type__list ${filterActive ? 'active' : ''}`}>
                    <li> <Link to={'/menu'}>All</Link> </li>
                    <li><Link to={'/menu/cake'}>Cakes</Link></li>
                    <li><Link to={'/menu/pie'}>Pies</Link></li>
                </ul>
                <i className="fa-solid fa-sliders" onClick={handleFilterCase}></i>
            </div>
            <div className="item-list">
                {
                    products.desserts.map((item) => (
                        <Card item ={item} key={item.id} addProduct={() => addProduct(item)}/>
                    ))
                }
            </div>
            <div className="item-type">
                <h2>Beverages</h2>
                <ul className={`item-type__list ${filterActive ? 'active' : ''}`}>
                    <li><Link to={'/menu'}>All</Link></li>
                    <li><Link to={'/menu/cold'}>Cold</Link></li>
                    <li><Link to={'/menu/hot'}>Hot</Link></li>
                </ul>
                <i className="fa-solid fa-sliders" onClick={handleFilterCase}></i>
            </div>
            <div className="item-list">
                {
                    products.beverages.map((item) => (
                        <Card item ={item} key={item.id} addProduct={() => addProduct(item)}/>
                    ))         
                }
            </div>
        </div>
    }
    </>

  )
}

export default MenuPage