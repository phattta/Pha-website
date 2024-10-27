import React from 'react';
import Image from 'next/image';

export default function Section1() {
    const projects = [
        { src: '/section1-1.png', title: 'กลุ่มทีเอสเอ็ม (TSM Group)', description: 'ตัวอย่างเว็บไซต์องค์กร' },
        { src: '/section1-1.png', title: 'กลุ่มทีเอสเอ็ม (TSM Group)', description: 'ตัวอย่างเว็บไซต์องค์กร' },
        { src: '/section1-1.png', title: 'กลุ่มทีเอสเอ็ม (TSM Group)', description: 'ตัวอย่างเว็บไซต์องค์กร' },
        { src: '/section1-1.png', title: 'กลุ่มทีเอสเอ็ม (TSM Group)', description: 'ตัวอย่างเว็บไซต์องค์กร' },
        { src: '/section1-1.png', title: 'กลุ่มทีเอสเอ็ม (TSM Group)', description: 'ตัวอย่างเว็บไซต์องค์กร' },
        { src: '/section1-2.png', title: 'TheUrbanRealty', description: 'ตัวอย่างเว็บอสังหาริมทรัพย์' },
        { src: '/section1-2.png', title: 'TheUrbanRealty', description: 'ตัวอย่างเว็บอสังหาริมทรัพย์' },
        { src: '/section1-2.png', title: 'TheUrbanRealty', description: 'ตัวอย่างเว็บอสังหาริมทรัพย์' },
        { src: '/section1-2.png', title: 'TheUrbanRealty', description: 'ตัวอย่างเว็บอสังหาริมทรัพย์' },
        { src: '/section1-2.png', title: 'TheUrbanRealty', description: 'ตัวอย่างเว็บอสังหาริมทรัพย์' },
        { src: '/section1-3.png', title: 'Wittoil', description: 'ตัวอย่างเว็บไซต์ขายของ' },
        { src: '/section1-3.png', title: 'Wittoil', description: 'ตัวอย่างเว็บไซต์ขายของ' },
        { src: '/section1-3.png', title: 'Wittoil', description: 'ตัวอย่างเว็บไซต์ขายของ' },
        { src: '/section1-3.png', title: 'Wittoil', description: 'ตัวอย่างเว็บไซต์ขายของ' },
        { src: '/section1-3.png', title: 'Wittoil', description: 'ตัวอย่างเว็บไซต์ขายของ' },
        { src: '/ssection1-4.png', title: 'Terry Estate', description: 'ตัวอย่างเว็บอสังหาริมทรัพย์' },
        { src: '/ssection1-4.png', title: 'Terry Estate', description: 'ตัวอย่างเว็บอสังหาริมทรัพย์' },
        { src: '/ssection1-4.png', title: 'Terry Estate', description: 'ตัวอย่างเว็บอสังหาริมทรัพย์' },
        { src: '/ssection1-4.png', title: 'Terry Estate', description: 'ตัวอย่างเว็บอสังหาริมทรัพย์' },
        { src: '/ssection1-4.png', title: 'Terry Estate', description: 'ตัวอย่างเว็บอสังหาริมทรัพย์' },
        { src: '/section1-5.png', title: 'BIOPANAX', description: 'ตัวอย่างเว็บไซต์ขายของออนไลน์' },
        { src: '/section1-5.png', title: 'BIOPANAX', description: 'ตัวอย่างเว็บไซต์ขายของออนไลน์' },
        { src: '/section1-5.png', title: 'BIOPANAX', description: 'ตัวอย่างเว็บไซต์ขายของออนไลน์' },
        { src: '/section1-5.png', title: 'BIOPANAX', description: 'ตัวอย่างเว็บไซต์ขายของออนไลน์' },
        { src: '/section1-5.png', title: 'BIOPANAX', description: 'ตัวอย่างเว็บไซต์ขายของออนไลน์' },
        { src: '/section1-6.png', title: 'VN Bearing', description: 'ตัวอย่างเว็บไซต์ขายของออนไลน์' },
        { src: '/section1-6.png', title: 'VN Bearing', description: 'ตัวอย่างเว็บไซต์ขายของออนไลน์' },
        { src: '/section1-6.png', title: 'VN Bearing', description: 'ตัวอย่างเว็บไซต์ขายของออนไลน์' },
        { src: '/section1-6.png', title: 'VN Bearing', description: 'ตัวอย่างเว็บไซต์ขายของออนไลน์' },
        { src: '/section1-6.png', title: 'VN Bearing', description: 'ตัวอย่างเว็บไซต์ขายของออนไลน์' },
    ];

    return (
        <div className="section1-container">
            {projects.map((project, index) => (
                <div className="project-card" key={index}>
                    <div className="image-wrapper">
                        <Image src={project.src} alt={project.title} width={300} height={200} />
                    </div>
                    <div className="project-details">
                        <h3>ผลงานทำเว็บไซต์ของเรา</h3>
                        <p>{project.description} : {project.title}</p>
                    </div>
                </div>
            ))}

            <style jsx>{`
        .section1-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 20px;
          padding: 40px;
        }
        
        .project-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          background-color: #f9f9f9;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 20px;
        }
        
        .image-wrapper {
          width: 100%;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .project-details h3 {
          margin: 10px 0;
          font-size: 16px;
          color: #555;
        }
        
        .project-details p {
          font-size: 14px;
          color: #333;
        }
      `}</style>
        </div>
    );
}
