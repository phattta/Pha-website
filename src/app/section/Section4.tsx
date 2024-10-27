import React from 'react';
import Image from 'next/image';

export default function Section4() {
  return (
    <div className="section4-container">
      <div className="content">
        <h2>ไม่พลาดทุกข้อมูลที่ช่วยให้ธุรกิจคุณเติบโตได้เร็วยิ่งขึ้น</h2>
        <p>ติดตามได้หลากหลายช่องทางที่คุณสะดวก ไม่ว่าจะเป็น e-mail, line หรือ youtube</p>
        <button className="subscribe-button">Subscribe</button>
      </div>
      <div className="image-wrapper">
        <Image src="/section4-1.png" alt="Hello" width={100} height={100} />
      </div>

      <style jsx>{`
        .section4-container {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #00c853; /* สีพื้นหลังตามตัวอย่าง */
          padding: 40px;
          border-radius: 12px;
          color: #000;
          gap: 20px;
        }

        .content {
          text-align: center;
        }

        .content h2 {
          font-size: 24px;
          font-weight: bold;
          margin: 0 0 10px;
        }

        .content p {
          font-size: 16px;
          margin: 0 0 20px;
        }

        .subscribe-button {
          padding: 10px 20px;
          font-size: 16px;
          color: #00c853;
          background-color: #fff;
          border: 2px solid #00c853;
          border-radius: 8px;
          cursor: pointer;
          transition: background-color 0.3s ease, color 0.3s ease;
        }

        .subscribe-button:hover {
          background-color: #00c853;
          color: #fff;
        }

        .image-wrapper {
          display: flex;
          align-items: center;
        }
      `}</style>
    </div>
  );
}
