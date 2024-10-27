import React from 'react';
import Image from 'next/image';

export default function Section2() {
  const items = [
    { src: '/section2-1.png', title: 'กำหนด', description: 'ธุรกิจของคุณ' },
    { src: '/section2-2.png', title: 'เพิ่ม', description: 'โลโก้ของคุณ' },
    { src: '/section2-3.png', title: 'เลือก', description: 'ฟีเจอร์เพิ่มเติม' },
    { src: '/section2-4.png', title: 'เลือก', description: 'ธีมที่คุณชื่นชอบ' },
  ];

  return (
    <div className="section2-container">
      {items.map((item, index) => (
        <div className="item-card" key={index}>
          <Image src={item.src} alt={item.title} width={60} height={60} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      ))}

      <style jsx>{`
        .section2-container {
          display: flex;
          justify-content: space-around;
          align-items: center;
          padding: 40px;
          background-color: #f4f6f8;
          border-radius: 12px;
        }

        .item-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          width: 120px;
        }

        .item-card h3 {
          margin: 10px 0 5px;
          font-size: 18px;
          color: #2d3748;
          font-weight: bold;
        }

        .item-card p {
          font-size: 14px;
          color: #4a5568;
          margin: 0;
        }

        /* เพิ่มเอฟเฟกต์โฮเวอร์ */
        .item-card:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
}
