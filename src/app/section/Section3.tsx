import React from 'react';
import Image from 'next/image';

export default function Section3() {
  const icons = [
    { src: '/section3-2.png', label: 'eCommerce' },
    { src: '/section3-3.png', label: 'Helpdesk' },
    { src: '/section3-4.png', label: 'Livechat' },
    { src: '/section3-5.png', label: 'Recruitment' },
    { src: '/section3-6.png', label: 'Appointment' },
    { src: '/section3-7.png', label: 'Blogs' },
  ];

  return (
    <div className="section3-container">
      <div className="text-content">
        <h2>ปรับขยายได้และครบวงจร</h2>
        <p>สนุกไปกับฟีเจอร์ที่น่าทึ่งและทำให้ธุรกิจของคุณเติบโต ปรับปรุงกระบวนการ ประสบการณ์ผู้ใช้ และจัดเตรียมระบบที่เป็นหนึ่งเดียวเพื่อดำเนินธุรกิจและขยายธุรกิจของคุณอย่างมีประสิทธิภาพ</p>
        <p className="highlight-text">เพลิดเพลินไปกับความคล่องตัว</p>
      </div>
      <div className="circle-container">
        <div className="center-icon">
          <Image src="/section3-1.png" alt="Website" width={80} height={80} />
          <p>Website</p>
        </div>
        {icons.map((icon, index) => (
          <div key={index} className={`circle-icon icon-${index + 1}`}>
            <Image src={icon.src} alt={icon.label} width={50} height={50} />
            <p>{icon.label}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .section3-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 40px;
        }

        .text-content {
          max-width: 400px;
        }

        .text-content h2 {
          font-size: 36px;
          font-weight: bold;
          color: #1a202c;
        }

        .text-content p {
          font-size: 16px;
          color: #4a5568;
        }

        .highlight-text {
          color: #e53e3e;
          font-size: 14px;
          margin-top: 20px;
        }

        .circle-container {
          position: relative;
          width: 300px;
          height: 300px;
          border-radius: 50%;
          background-color: #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .center-icon {
          text-align: center;
          z-index: 1;
        }

        .center-icon p {
          margin-top: 10px;
          font-weight: bold;
          color: #2d3748;
        }

        .circle-icon {
          position: absolute;
          text-align: center;
          width: 80px;
        }

        /* ตำแหน่งของไอคอนรอบๆ วงกลม */
        .icon-1 { top: 0; left: 50%; transform: translateX(-50%); }
        .icon-2 { top: 25%; right: 0; transform: translateY(-50%); }
        .icon-3 { bottom: 25%; right: 0; transform: translateY(50%); }
        .icon-4 { bottom: 0; left: 50%; transform: translateX(-50%); }
        .icon-5 { bottom: 25%; left: 0; transform: translateY(50%); }
        .icon-6 { top: 25%; left: 0; transform: translateY(-50%); }

        .circle-icon p {
          margin-top: 5px;
          font-size: 12px;
          color: #4a5568;
        }
      `}</style>
    </div>
  );
}
