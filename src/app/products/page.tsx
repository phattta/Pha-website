// src/app/products/page.tsx
"use client";

import Layout from '@/components/Layout';
import Image from 'next/image';
import { useCart } from '@/context/CartContext';

const dolls = [
  { id: 1, name: 'ตุ๊กตาน้องช้าง', price: 100, image: '/dolls/doll-a.jpg' },
  { id: 2, name: 'ตุ๊กตาน้องหมา', price: 150, image: '/dolls/doll-b.jpg' },
  { id: 3, name: 'ตุ๊กตาน้องแมว', price: 200, image: '/dolls/doll-c.jpg' },
  { id: 4, name: 'ตุ๊กตาน้องกอดจิ', price: 250, image: '/dolls/doll-d.jpg' },
  { id: 5, name: 'ตุ๊กตาน้องหมีขาว', price: 300, image: '/dolls/doll-e.jpg' },
  { id: 6, name: 'ตุ๊กตาน้องหมีเหลือง', price: 350, image: '/dolls/doll-f.jpg' },
  { id: 7, name: 'ตุ๊กตาน้องหมีน้ำตาล', price: 400, image: '/dolls/doll-g.jpg' },
  { id: 8, name: 'ตุ๊กตาน้องแพนด้า', price: 450, image: '/dolls/doll-h.jpg' },
  { id: 9, name: 'ตุ๊กตาน้องมังกร', price: 500, image: '/dolls/doll-i.jpg' },
  { id: 10, name: 'ตุ๊กตาน้องเป็ด', price: 550, image: '/dolls/doll-j.jpg' },
  { id: 11, name: 'ตุ๊กตาน้องหมีชมพู', price: 310, image: '/dolls/doll-k.jpg' },
  { id: 12, name: 'ตุ๊กตาน้องหมีน้ำตาลเข้ม', price: 300, image: '/dolls/doll-l.jpg' },
  { id: 13, name: 'ตุ๊กตาน้องมนุษย์ต่างดาว', price: 350, image: '/dolls/doll-m.jpg' },
  { id: 14, name: 'ตุ๊กตาน้องกอดจิน้ำตาล', price: 340, image: '/dolls/doll-n.jpg' },
  { id: 15, name: 'ตุ๊กตาน้องมังกรน้ำตาล', price: 295, image: '/dolls/doll-o.jpg' },
];

const Products = () => {
  const { addToCart } = useCart();

  return (
    <Layout>
      <h1>Our Dolls</h1>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {dolls.map((doll) => (
          <div key={doll.id} style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '15px', textAlign: 'center' }}>
            <Image
              src={doll.image}
              alt={doll.name}
              width={150}
              height={150}
              style={{ borderRadius: '8px' }}
            />
            <div>
              <p>{doll.name}</p>
              <p>{doll.price} บาท</p>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '10px' }}>
                <button
                  onClick={() => addToCart(doll)}
                  style={{
                    padding: '8px 12px',
                    backgroundColor: '#fff0e6',
                    color: '#ff6600',
                    border: '1px solid #ff6600',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px',
                  }}
                >
                  <Image src="/icon-cart-1.png" alt="Cart Icon" width={30} height={30} />
                  เพิ่มไปยังรถเข็น
                </button>
                <button
                  style={{
                    padding: '8px 12px',
                    backgroundColor: '#ff6600',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                  }}
                >
                  ซื้อสินค้า
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Products;
