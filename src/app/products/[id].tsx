// src/app/products/[id]/page.tsx
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useRouter } from 'next/router';
import { useCart } from '@/context/CartContext';
import Image from 'next/image';

const ProductDetail = ({ params }: { params: { id: string } }) => {
  const { addToCart } = useCart();
  const doll = { id: Number(params.id), name: `Doll ${params.id}`, price: Number(params.id) * 100, image: `/dolls/doll-${params.id}.jpg` };

  return (
    <div>
      <h1>{doll.name}</h1>
      <Image src={doll.image} alt={doll.name} style={{ width: '200px' }} />
      <p>Price: ${doll.price}</p>
      <button onClick={() => addToCart(doll)}>Add to Cart</button>
    </div>
  );
};

export default ProductDetail;
