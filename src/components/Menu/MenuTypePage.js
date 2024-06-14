import React, { useEffect, useState } from "react";
import "./MenuTypePage.css";
import { Link, useParams } from "react-router-dom";
import Card from "../Pieces/Card";
import Error from "../Pieces/Error";
import Loading from "../Pieces/Loading";

const MenuTypePage = () => {
    const { type } = useParams();
    const [items, setItems] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [filterActive, setFilterActive] = useState(false);

    const handleFilterCase = () => {
        setFilterActive(!filterActive);
    };

    useEffect(() => {
        fetch("http://localhost:3000/menu")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Open Json Server! (npm run json)");
                }
                return res.json();
            })
            .then((data) => {
                const allItems = [...data.desserts, ...data.beverages];
                const selectedType = allItems.filter(
                    (types) => types.type.toLowerCase() === type.toLowerCase()
                );
                if (selectedType.length > 0) {
                    setItems(selectedType);
                } else {
                    setError(true);
                }
                setLoading(false);
            })
            .catch((error) => {
                setError(true);
                setLoading(false);
            });
    }, [type]);

    const isBeverages = items && items.some(item => item.type === 'cold' || item.type === 'hot');
    return (
        loading ? (
            <Loading />
        ) : error ? (
            <Error />
        ) : (
            <div className="content-type container">
                <div className="search-item">
                    <div className="menu-title" onClick={handleFilterCase}>
                        MENU
                    </div>
                    <form className="menu-form">
                        <input type="text" placeholder="Search" />
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </form>
                </div>
                
                <div className="item-type">
                    {isBeverages ? (
                        <>
                            <h2>Beverages</h2>
                            <ul className={`item-type__list ${filterActive ? "active" : ""}`}>
                                <li>
                                    <Link to={"/menu"}>All</Link>
                                </li>
                                <li>
                                    <Link to={"/menu/hot"}>Hot</Link>
                                </li>
                                <li>
                                    <Link to={"/menu/cold"}>Cold</Link>
                                </li>
                            </ul>
                            <i className="fa-solid fa-sliders" onClick={handleFilterCase}></i>
                        </>
                    ) : (
                        <>
                            <h2>Desserts</h2>
                            <ul className={`item-type__list ${filterActive ? "active" : ""}`}>
                                <li>
                                    <Link to={"/menu"}>All</Link>
                                </li>
                                <li>
                                    <Link to={"/menu/cake"}>Cakes</Link>
                                </li>
                                <li>
                                    <Link to={"/menu/pie"}>Pies</Link>
                                </li>
                            </ul>
                            <i className="fa-solid fa-sliders" onClick={handleFilterCase}></i>
                        </>
                    )}
                </div>
                <div className="item-list">
                    {items && items.map((item) => <Card item={item} key={item.id} />)}
                </div>
            </div>
        )
    );
};

export default MenuTypePage;
