import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import MenuDetails from './pages/MenuDetails';
import MenuType from './pages/MenuType';
import ScrollToTop from './components/Pieces/ScrollToTop';
import { ProductProvider } from './contexts/ProductContext';
import NotFoundPage from './components/Pieces/NotFoundPage';
import Search from './pages/Search';

const App = () => {
    return (
        <ProductProvider >
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path='/' element={<MainLayout />}>
                        <Route path='/' element={<Home />} />
                        <Route path='/menu' element={<Menu />} />
                        <Route path='/menu/:type' element={<MenuType />}/>
                        <Route path='/menu-details/:name' element={<MenuDetails />} />
                        <Route path='/contact' element={<Contact />} />
                        <Route path='/shop' element={<Shop />} />
                        <Route path='/search' element={<Search />} />
                        <Route path='*' element={<NotFoundPage />} />
                    </Route>
                </Routes>
            </Router>
        </ProductProvider>
    )
}

export default App;
