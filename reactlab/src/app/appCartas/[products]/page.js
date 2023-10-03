"use client"; 
import React, { useEffect, useState } from 'react';
import './Products.css'; // Asegúrate de crear este archivo CSS en la misma carpeta que tu componente Products

export default function Products() {
    const [products, setProducts] = useState([]);
    const cartId = Number(localStorage.getItem('cartId'));

    useEffect(() => {
        fetch(`https://fakestoreapi.com/carts/${cartId}`)
            .then(res => res.json())
            .then(cart => {
                setProducts(cart.products);
            });
    }, [cartId]);

    const handleBack = () => {
        window.history.back();
    }

    return (
        <div className="products-container">
            <h1>Productos del Carrito {cartId}</h1>
            <button onClick={handleBack}>Volver atrás</button>
            <div className="products-list">
                {products.map((product, index) => (
                    <div key={index} className="product-card">
                        <p>Product ID: {product.productId}</p>
                        <p>Quantity: {product.quantity}</p>
                    </div>
                ))}
            </div>
            <footer>
                Desarrollo Juan Pablo Gutierrez 2023
            </footer>
        </div>
    );
}

