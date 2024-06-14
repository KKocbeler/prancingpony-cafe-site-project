import React, { useContext } from "react";
import './ShopCart.css';
import ProductContext from "../../contexts/ProductContext";

const ShopCart = ({ isShopCartOpen, handleShopCart }) => {

    const {selectedProducts, deleteProduct, decreaseProduct, increaseProduct} = useContext(ProductContext);
    const total = selectedProducts.reduce((top, product) => top + (product.price * product.quantity), 0);  /* reduce fonksiyonu bir dizideki herşeyi işle ve tek bir sonuç döner */

    return (
        <div className={`navbar-shop-cart ${isShopCartOpen ? "open" : ""}`}>
            <div className="shop-cart__title">
                <h2>Your Cart</h2>
                <i className="fa-solid fa-arrow-right" onClick={handleShopCart}></i>
            </div>
            <div className="your-carts">
                {
                    selectedProducts && selectedProducts.length > 0 ? (
                
                        selectedProducts.map(selectedProduct => (
                            <div className="your-cart" key={selectedProduct.id}>
                                <div className="item-name">
                                    <img loading="lazy" src={`images/menu/${selectedProduct.image}`} alt={selectedProduct.name}/>
                                    <div className="info">{selectedProduct.name}</div>
                                </div>
                                <div className="item-info">
                                    <div className="your-cart_piece">
                                    <div onClick={() => decreaseProduct(selectedProduct)}>-</div>
                                    <div className="product-piece">{selectedProduct.quantity}</div>
                                    <div onClick={() => increaseProduct(selectedProduct)}>+</div>
                                    </div>
                                    <div className="your-cart_price">
                                    <div>${(selectedProduct.price * selectedProduct.quantity).toFixed(2)}</div>
                                    </div>
                                </div>
                                <i className="fa-solid fa-x" onClick={() => deleteProduct(selectedProduct.id)}></i>
                            </div>
                        )) 
                    ) : (
                        <div className="empty-cart">
                            <img src="images/pieces/empty-cart.jpg" alt="" />
                            Your Cart is empty
                        </div>
                    )
                }
            </div>
            <div className="place-order">
                    <div className="total">
                        Total
                        <div className="total-price">
                            ${ total.toFixed(2) }
                        </div>
                    </div>
                    <div className="place-order_button">Place Order</div>
            </div>
        </div>
    );
};

export default ShopCart;
