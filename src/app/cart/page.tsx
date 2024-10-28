// src/app/cart/page.tsx
"use client";

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import Layout from '@/components/Layout';

const Cart = () => {
    const { cart, removeFromCart } = useCart();

    return (
        <Layout> 
            <h1>Your Cart</h1>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {cart.map((item) => (
                        <li key={item.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                            <Image
                                src={item.image} 
                                alt={item.name}
                                width={100}
                                height={100}
                            />
                            <div>
                                <p style={{ margin: 0 }}>{item.name}</p>
                                <p style={{ margin: 0 }}>${item.price}</p>
                                <button
                                    onClick={() => removeFromCart(item.id)}
                                    style={{
                                        marginTop: '5px',
                                        padding: '5px 10px',
                                        backgroundColor: '#ff6666',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '5px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Remove
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </Layout>
    );
};

export default Cart;
