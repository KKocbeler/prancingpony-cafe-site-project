import React, { useContext, useEffect, useState } from "react";
import data from '../data/data.json';

const ProductContext = React.createContext();

export const useProductContext = () => {
    return useContext(ProductContext);
}

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState(null);
    const [selectedProducts, setSelectedProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    
    useEffect(() => {
        try {
            setProducts(data.menu);
            setLoading(false);
        } catch (error) {
            setError(true);
            setLoading(false);
        }
    }, [])

    const addProduct = (product) => {
        const existingProduct = selectedProducts.find(item => item.id === product.id);
            if (existingProduct) {
                setSelectedProducts(prevSelectedProducts =>
                    prevSelectedProducts.map(item =>
                        item.id === product.id
                            ? {...item, quantity: item.quantity + 1}
                            : item
                    )
                );
            } else {
                setSelectedProducts((prevSelectedProducts) => [...prevSelectedProducts, product])
        }
    }

    const deleteProduct = (productId) => {
        const updatedProducts = selectedProducts.filter(product => product.id !== productId);
        setSelectedProducts(updatedProducts)
    }

    const increaseProduct = (selectedProduct) => {
        addProduct(selectedProduct)
    }

    const decreaseProduct = (selectedProduct) => {
        const updatedProducts = selectedProducts.map(product => 
            product.id === selectedProduct.id
                ? { ...product, quantity: product.quantity - 1}
                : product
        ).filter(product => product.quantity > 0);

        setSelectedProducts(updatedProducts)

        if (selectedProduct.quantity === 1) {
            deleteProduct(selectedProduct.id);
        }
    }

    console.log(products)

    return (
        <ProductContext.Provider value={{ products, loading, error, setError, addProduct, deleteProduct, selectedProducts, increaseProduct, decreaseProduct}}>
            {children}
        </ProductContext.Provider>
    )
}



export default ProductContext;