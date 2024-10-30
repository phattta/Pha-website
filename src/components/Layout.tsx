import Link from 'next/link';
import Image from 'next/image';
import { ReactNode, useState } from 'react';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isLoginVisible, setIsLoginVisible] = useState(false);
  const [isAddressVisible, setIsAddressVisible] = useState(false);
  const [isAddressSubmitted, setIsAddressSubmitted] = useState(false);
  const [address, setAddress] = useState({
    name: '',
    phone: '',
    province: '',
    fullAddress: '',
  });

  const handleToggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
    setIsLoginVisible(false);
    setIsAddressVisible(false);
  };

  const handleToggleLogin = () => {
    setIsLoginVisible(true);
    setIsMenuVisible(false);
  };

  const handleToggleAddress = () => {
    setIsAddressVisible(true);
    setIsMenuVisible(false);
  };

  const handleCloseLogin = () => {
    setIsLoginVisible(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsAddressSubmitted(true);
    setIsAddressVisible(false);
  };

  const handleCloseForm = () => {
    setIsAddressVisible(false);
  };

  return (
    <html lang="en">
      <body>
        <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px', backgroundColor: 'lightblue' }}>
          <nav style={{ fontSize: '20px' }}>
            <Link href="/">Home</Link> <Link href="/products">All Dolls</Link> <Link href="/cart">Cart</Link>
          </nav>
          {/* รูปและข้อความของผู้ดูแลเว็บไซต์ */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Image
              src="/doll-1.png" 
              alt="Admin"
              width={60} 
              height={60}
              style={{ borderRadius: '50%' }} 
            />
            <span>ผู้ดูแลเว็บไซต์</span>
          </div>
          {/* ไอคอนสามจุด */}
          <div onClick={handleToggleMenu} style={{ display: 'flex', flexDirection: 'column', gap: '4px', cursor: 'pointer' }}>
            <span style={{ width: '5px', height: '5px', backgroundColor: '#333', borderRadius: '50%' }}></span>
            <span style={{ width: '5px', height: '5px', backgroundColor: '#333', borderRadius: '50%' }}></span>
            <span style={{ width: '5px', height: '5px', backgroundColor: '#333', borderRadius: '50%' }}></span>
          </div>
          {/* เมนูตัวเลือก */}
          {isMenuVisible && (
            <div style={{ position: 'absolute', top: '60px', right: '20px', padding: '10px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
              <button onClick={handleToggleLogin} style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}>เข้าสู่ระบบ</button>
              <br />
              <button onClick={handleToggleAddress} style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer' }}>ที่อยู่ของคุณ</button>
            </div>
          )}
          {/* ฟอร์มเข้าสู่ระบบ */}
          {isLoginVisible && (
            <div style={{ position: 'absolute', top: '60px', right: '20px', width: '400px', padding: '20px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>เข้าสู่ระบบ</h2>
                <button onClick={handleCloseLogin} style={{ background: 'none', border: 'none', fontSize: '16px', cursor: 'pointer', color: '#888' }}>✖</button>
              </div>
              <form>
                <div style={{ marginBottom: '10px' }}>
                  <input type="text" placeholder="หมายเลขโทรศัพท์ / Email / ชื่อผู้ใช้" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <input type="password" placeholder="รหัสผ่าน" style={{ width: '100%', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }} />
                </div>
                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#ff4500', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>เข้าสู่ระบบ</button>
              </form>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <Link href="/forgot-password" style={{ color: 'blue', textDecoration: 'underline' }}>ลืมรหัสผ่าน</Link>
                <Link href="/login-sms" style={{ color: 'blue', textDecoration: 'underline' }}>เข้าสู่ระบบด้วย SMS</Link>
              </div>
              <div style={{ textAlign: 'center', marginTop: '20px' }}>หรือ</div>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginTop: '10px' }}>
                <button style={{ background: '#3b5998', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Facebook</button>
                <button style={{ background: '#db4a39', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Google</button>
              </div>
              <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <Link href="/register" style={{ color: 'red', textDecoration: 'underline' }}>สมัครใหม่</Link>
              </div>
            </div>
          )}
          {/* ฟอร์มที่อยู่ */}
          {isAddressVisible && !isAddressSubmitted && (
            <div style={{ position: 'absolute', top: '60px', right: '20px', padding: '20px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', width: '300px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <h2>แก้ไขที่อยู่</h2>
                <button onClick={handleCloseForm} style={{ background: 'none', border: 'none', fontSize: '16px', cursor: 'pointer', color: '#888' }}>✖</button>
              </div>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '10px' }}>
                  <input type="text" name="name" placeholder="ชื่อ-นามสกุล" value={address.name} onChange={handleChange} required style={{ width: '100%', padding: '8px', border: '1px solid red' }} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <input type="text" name="phone" placeholder="หมายเลขโทรศัพท์" value={address.phone} onChange={handleChange} required style={{ width: '100%', padding: '8px', border: '1px solid red' }} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <input type="text" name="province" placeholder="จังหวัด, เขต/อำเภอ, แขวง/ตำบล, รหัสไปรษณีย์" value={address.province} onChange={handleChange} required style={{ width: '100%', padding: '8px', border: '1px solid red' }} />
                </div>
                <div style={{ marginBottom: '10px' }}>
                  <textarea name="fullAddress" placeholder="บ้านเลขที่, ซอย, หมู่, ถนน, แขวง/ตำบล" value={address.fullAddress} onChange={handleChange} required style={{ width: '100%', padding: '8px', border: '1px solid red' }} />
                </div>
                <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'orange', color: '#fff', border: 'none', cursor: 'pointer' }}>ยืนยัน</button>
              </form>
            </div>
          )}
          {/* แสดงที่อยู่ที่บันทึกแล้ว */}
          {isAddressSubmitted && isAddressVisible && (
            <div style={{ position: 'absolute', top: '60px', right: '20px', padding: '20px', backgroundColor: '#fff', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', width: '300px' }}>
              <p><strong>{address.name}</strong> | {address.phone}</p>
              <p>{address.fullAddress}</p>
              <p>{address.province}</p>
              <button onClick={() => setIsAddressSubmitted(false)} style={{ color: 'blue', background: 'none', border: 'none', cursor: 'pointer' }}>แก้ไข</button>
            </div>
          )}
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
};

export default Layout;
