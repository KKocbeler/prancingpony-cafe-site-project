import React, { useContext, useEffect, useState } from 'react'
import SearchBar from '../Pieces/SearchBar'
import ProductContext from '../../contexts/ProductContext'
import { useSearchParams } from 'react-router-dom'
import Card from '../Pieces/Card'
import './SearchPage.css';

const SearchPage = () => {
    const {products, loading, error, addProduct} = useContext(ProductContext);
    const [searchParams] = useSearchParams();
    const query = searchParams.get("q");
    const [items, setItem] = useState([])

    useEffect(() => {
        if(products) {
            const allItems = [...products.desserts, ...products.beverages];
            const selectedItems = allItems.filter(item => item.name.toLowerCase().includes(query));
            setItem(selectedItems);
        }
    }, [query, products])


  return (
    <div className='search-page'>
        <SearchBar/>
        <div className="searched">
            <div className="searched-word">
                Results for "{query}"
                <span>{items.length} items found</span>
            </div>
            <div className="item-list">
                {
                    items.map((item) => (
                        <Card item ={item} key={item.id} addProduct={() => addProduct(item)}/>
                    ))         
                }
            </div>
        </div>
    </div>
  )
}

export default SearchPage