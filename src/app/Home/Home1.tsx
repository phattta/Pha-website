// src/app/Home1.tsx
"use client";

import React from 'react';
import { useRouter } from 'next/navigation';

const Home1 = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push('/products'); // เปลี่ยนเส้นทางไปยังหน้าผลิตภัณฑ์
  };

  return (
    <div style={styles.container}>
      <div style={styles.overlay}></div>
      <section style={styles.hero}>
        <div style={styles.textContainer}>
          <h1 style={styles.heading}>ยินดีต้อนรับสู่เว็บขายตุ๊กตาครับ</h1>
          <p style={styles.description}>
            เราออกแบบเว็บนี้เฉพาะขายตุ๊กตาเท่านั้นครับ
          </p>
          <button style={styles.button} onClick={handleButtonClick}>
            เข้าสู่ร้านขายตุ๊กตาครับ
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home1;

const styles = {
  container: {
    position: 'fixed' as const,
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'white',
    backgroundImage: 'url("/Home1.png")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  overlay: {
    position: 'absolute' as const,
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  hero: {
    position: 'relative' as const,
    zIndex: 1,
    textAlign: 'center' as const,
  },
  textContainer: {
    padding: '20px',
    zIndex: 2,
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '15px',
    lineHeight: '1.2',
  },
  description: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    maxWidth: '600px',
    margin: '0 auto',
    marginBottom: '20px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#007bff',
    backgroundColor: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};
