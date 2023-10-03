"use client"; 
import React, { useEffect, useState } from 'react';
import styles from './AppCartas.module.css';

export default function AppCartas() {
  // Creación de la variable de estado carts
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    // Realiza una solicitud fetch a la API para obtener datos
    fetch('https://fakestoreapi.com/carts')
      .then(res => res.json()) 
      .then(data => setCarts(data)); // Actualiza el estado de carts con los datos recibidos
  }, []); 

  const handleMoreDetails = (cartId) => {
    localStorage.setItem('cartId', cartId.toString());
    window.location.href = 'appCartas/products';
}


  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>App</h1>
      </header>
      <div className={styles.content}>
        <nav className={styles.nav}>
          <ul>
            <li>Cartas</li>
            <li>Products</li>
            <li>New Product</li>
            <li>New Cart</li>
          </ul>
        </nav>
        <main className={styles.main}>
          <h2>Cartas</h2>
          <div className={styles.cardContainer}>
            {/* Itera sobre cada carrito en carts y ejecuta la función de flecha para cada carrito */}
            {carts.map((cart) => (
              <div key={cart.id} className={styles.card}>
                <h3>Cart ID: {cart.id}</h3>
                <p>Usuario ID: {cart.userId}</p>
                <p>Fecha: {cart.date}</p>
                <button onClick={() => handleMoreDetails(cart.id)}>Más detalles</button>
              </div>
            ))}
          </div>
        </main>
      </div>
      <footer className={styles.footer}>
        Desarrollo Juan Pablo Gutierrez 2023
      </footer>
    </div>
  );
}

