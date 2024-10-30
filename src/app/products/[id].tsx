// src/app/products/[id]/page.tsx
"use client";

import { useCart } from '@/context/CartContext';
import Image from 'next/image';

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const { addToCart } = useCart();
  const doll = { id: Number(params.id), name: `Doll ${params.id}`, price: Number(params.id) * 100, image: `/dolls/doll-${params.id}.jpg` };

  return (
    <div>
      <h1>{doll.name}</h1>
      <Image src={doll.image} alt={doll.name} width={200} height={200} />
      <p>Price: ${doll.price}</p>
      <button onClick={() => addToCart(doll)} style={{ padding: '8px 12px', backgroundColor: '#ff6600', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        Add to Cart
      </button>
    </div>
  );
};

export default ProductDetail;
