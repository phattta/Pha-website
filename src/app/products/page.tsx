// src/app/products/page.tsx
"use client";

import Layout from '../../components/Layout';
import Image from 'next/image';

const dolls = [
  { id: 1, name: 'ตุ๊กตาน้องหมี', price: 300, image: '/dolls/doll-a.jpg' },
  { id: 2, name: 'ตุ๊กตาน้องกอดจิ', price: 400, image: '/dolls/doll-b.jpg' },
];

const Products = () => {
  return (
    <Layout>
      <h1>Our Dolls</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {dolls.map((doll) => (
          <li key={doll.id} style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
            <Image
              src={doll.image}
              alt={doll.name}
              width={150} 
              height={150} 
              style={{ borderRadius: '8px', marginRight: '15px' }}
            />
            <div>
              <p>{doll.name}</p>
              <p>${doll.price}</p>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Products;
