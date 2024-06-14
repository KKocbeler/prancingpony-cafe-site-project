import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './SearchBar.css';

const SearchBar = () => {
    const navigate = useNavigate()
    const [keyword, setKeyword] = useState('')


    const handleSearch = (e) => {
        e.preventDefault();
        setKeyword(e.target.value)

        navigate(`/search?q=${keyword}`)
    }
  return (
    <div className="search-item">
        <div className="menu-title" >
            <Link to={'/menu'}>MENU</Link>
        </div>
        <form className='menu-form' onSubmit={handleSearch}>
            <input type="text" placeholder='Search' onChange={(e) => setKeyword(e.target.value)}/>
            <i className="fa-solid fa-magnifying-glass" onClick={handleSearch}></i>
        </form>
</div>
  )
}

export default SearchBar