import React, { useContext, useEffect, useRef, useState } from 'react';
import './MenuDetailsPage.css';
import { useParams } from 'react-router-dom';
import Loading from '../Pieces/Loading';
import Error from '../Pieces/Error';
import ProductContext from '../../contexts/ProductContext';

const MenuDetailsPage = () => {
    const deleteCommentRef = useRef();
    const { name } = useParams()
    const {products, error, loading, setError} = useContext(ProductContext)
    const [item, setItem] = useState(null);
    const [isItem, setIsItem] = useState(false);
    const [count, setCount] = useState(1);
    const [isWarning, setIsWarning] = useState(false);
    const [isAnswerOn, setIsAnswerOn] = useState(false);
    const [isCommentOpen, setIsCommentOpen] = useState(false);

    useEffect(() => {
        if (!loading) {
            const selectedItem = [...products.desserts, ...products.beverages].find(
                (i) => i.name.toLowerCase().replace(/ /g, '-') === name
            );
            if (selectedItem) {
                setItem(selectedItem)
            } else {
                setError(true);
            }
        }
    }, [loading, name, products, setError])


    const handleDeleteComment = () => {
        deleteCommentRef.current.innerHTML = '';
    }

    const handleAddItem = () => {
        setIsItem(true)
    }

    const handleShowAnswer = () => {
        setIsAnswerOn(!isAnswerOn);
        setTimeout(() => {
            deleteCommentRef.current.focus();
        }, 0);
    }

    const handleAnswerToggle = () =>{
        setIsCommentOpen(!isCommentOpen);
    }

    const handleDecraseCount = () => {
        if (count <= 1) {
            setIsItem(false)
        } else {
            setCount(count - 1)
            setIsWarning(false)
        }
    }

    const handleIncreaseCount = () => {
        if(count >= 5) {
            setIsWarning(true)
            setTimeout(() => {
                setIsWarning(false);
            }, 2000)
        } else {
            setIsWarning(false)
            setCount(count + 1);
        }
    }
    console.log(products)
return (
<>
    {
        loading ? (
            <Loading />
        ) : error ? (
            <Error />
        ) : (
            <div className="menu-details container">
                <div className="details-image">
                    <img src={`/images/menu/${item && item.image}`} alt={item && item.name} />
                </div>
                <div className="details-order">
                    <div className="title-price">
                        <h2>{item && item.name}</h2>
                        <h2>{item && item.price}$</h2>
                    </div>
                    <div className="details-info">
                        <ul>
                            <li>{item && item.description}</li>
                            <li>Energy: {item && item.calories} kcal</li>
                            <li>Piece: {item && item.servings}</li>
                        </ul>
                    </div>
                    <div className={`add-cart ${isItem ? 'hide-add-cart' : ''}`} onClick={handleAddItem}>
                        <i className="fa-solid fa-cart-shopping"></i> Add to Cart
                    </div>
                    <div className={`add-extra ${isItem ? 'added-item' : ''}`}>
                        <div onClick={handleDecraseCount}><i className="fa-solid fa-minus"></i></div>
                        <span>{count}</span>
                        <div onClick={handleIncreaseCount}><i className="fa-solid fa-plus"></i></div>
                    </div>
                    {isWarning && <p className='warning'>You cannot order more than this</p>}
                </div>
                <div className="details-comments">
                    <div className="write-comment">
                        <h2>Leave a Comment</h2>
                        <textarea name="" id="" placeholder='Comment...'></textarea>
                    </div>
                    <div className="comments">
                        <h3>Comments</h3>
                        <div className="comment">
                            <div className="main-comment">
                                <div className="comment-title">
                                    <div className="comment-name">Ismail Senturk</div>
                                    <div className='comment-reply' onClick={handleShowAnswer}><i className="fa-solid fa-reply"></i> Answer</div>
                                </div>
                                <div className="comment-body">
                                    "This chocolate soufflé is one of the most delicious desserts I've ever had.
                                    The outside is slightly crispy while the inside is incredibly gooey and rich with chocolate flavor.
                                    The vanilla ice cream served alongside it complements the warm soufflé perfectly.
                                    Every bite is like an explosion of flavor. It's definitely a dessert I would want to have again!"
                                </div>
                                <div className='toggle-answer' onClick={handleAnswerToggle}>
                                    {isCommentOpen ? (
                                        <i className="fa-solid fa-chevron-up"></i> 
                                    ) : (
                                        <i className="fa-solid fa-chevron-down"></i>
                                    )}
                                    <span> 1 Answer</span>
                                </div>
                            </div>
                            <div className="answers">
                                <div className={`answer ${isCommentOpen ? "open-comment" : ""}`}>
                                    <div className="answer-title">
                                        <div className="answer-name">Kemal Kocbeler</div>
                                    </div>
                                    <div className="answer-body">
                                        "This chocolate soufflé is one of the most delicious desserts I've ever had."
                                    </div>
                                </div>
                                <div className={`answer-message ${isAnswerOn ? 'open-answers' : ''}`}>
                                    <div className='yourname'>Kemal Kocbeler</div>
                                    <div className='merhaba' contentEditable="true" ref={deleteCommentRef}></div>
                                    <div className="answer-message-buttons">
                                        <button className='btn' onClick={handleDeleteComment}>Delete</button>
                                        <button className="btn">Comment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="comment">
                            <div className="main-comment">
                                <div className="comment-title">
                                    <div className="comment-name">Ismail Senturk</div>
                                    <div className='comment-reply' onClick={handleShowAnswer}><i className="fa-solid fa-reply"></i> Answer</div>
                                </div>
                                <div className="comment-body">
                                    "This chocolate soufflé is one of the most delicious desserts I've ever had.
                                    The outside is slightly crispy while the inside is incredibly gooey and rich with chocolate flavor.
                                    The vanilla ice cream served alongside it complements the warm soufflé perfectly.
                                    Every bite is like an explosion of flavor. It's definitely a dessert I would want to have again!"
                                </div>
                                <div className='toggle-answer' onClick={handleAnswerToggle}>
                                    {isCommentOpen ? (
                                        <i className="fa-solid fa-chevron-up"></i> 
                                    ) : (
                                        <i className="fa-solid fa-chevron-down"></i>
                                    )}
                                    <span> 1 Answer</span>
                                </div>
                            </div>
                            <div className="answers">
                                <div className={`answer ${isCommentOpen ? "open-comment" : ""}`}>
                                    <div className="answer-title">
                                        <div className="answer-name">Kemal Kocbeler</div>
                                    </div>
                                    <div className="answer-body">
                                        "This chocolate soufflé is one of the most delicious desserts I've ever had."
                                    </div>
                                </div>
                                <div className={`answer-message ${isAnswerOn ? 'open-answers' : ''}`}>
                                    <div className='yourname'>Kemal Kocbeler</div>
                                    <div className='merhaba' contentEditable="true" ref={deleteCommentRef}></div>
                                    <div className="answer-message-buttons">
                                        <button className='btn' onClick={handleDeleteComment}>Delete</button>
                                        <button className="btn">Comment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="comment">
                            <div className="main-comment">
                                <div className="comment-title">
                                    <div className="comment-name">Ismail Senturk</div>
                                    <div className='comment-reply' onClick={handleShowAnswer}><i className="fa-solid fa-reply"></i> Answer</div>
                                </div>
                                <div className="comment-body">
                                    "This chocolate soufflé is one of the most delicious desserts I've ever had.
                                    The outside is slightly crispy while the inside is incredibly gooey and rich with chocolate flavor.
                                    The vanilla ice cream served alongside it complements the warm soufflé perfectly.
                                    Every bite is like an explosion of flavor. It's definitely a dessert I would want to have again!"
                                </div>
                            </div>
                            <div className="answers">
                                <div className={`answer-message ${isAnswerOn ? 'open-answers' : ''}`}>
                                    <div className='yourname'>Kemal Kocbeler</div>
                                    <div className='merhaba' contentEditable="true" ref={deleteCommentRef}></div>
                                    <div className="answer-message-buttons">
                                        <button className='btn' onClick={handleDeleteComment}>Delete</button>
                                        <button className="btn">Comment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

</>
)}

export default MenuDetailsPage