import React from 'react'
import HomeImage from '../components/Home/HomeImage'
import HomeTypes from '../components/Home/HomeTypes'
import HomeOrder from '../components/Home/HomeOrder'
import HomePopular from '../components/Home/HomePopular'
import HomeOpportunity from '../components/Home/HomeOpportunity'
import HomeMap from '../components/Home/HomeMap'

const Home = () => {
    return (
        <>
            <HomeImage />
            <HomeTypes />
            <HomeOrder />
            <HomePopular />
            <HomeOpportunity />
            <HomeMap />
        </>
    )
}

export default Home