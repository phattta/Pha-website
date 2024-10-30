import { useState } from 'react';

interface Address {
  name: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  postalCode: string;
}

const AddressForm = () => {
  const [address, setAddress] = useState<Address>({
    name: '',
    addressLine1: '',
    addressLine2: '',
    city: '',
    postalCode: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true); // ซ่อนฟอร์มหลังจากบันทึกที่อยู่
    alert(`ที่อยู่ของคุณถูกบันทึกแล้ว! \n ${JSON.stringify(address, null, 2)}`);
  };

  if (isSubmitted) {
    return <p>ที่อยู่ของคุณถูกบันทึกเรียบร้อยแล้ว</p>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px' }}>
      <h2>กรอกที่อยู่ในการจัดส่ง</h2>
      <div style={{ marginBottom: '10px' }}>
        <label>ชื่อผู้รับ:</label>
        <input type="text" name="name" value={address.name} onChange={handleChange} required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>ที่อยู่บรรทัดที่ 1:</label>
        <input type="text" name="addressLine1" value={address.addressLine1} onChange={handleChange} required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>ที่อยู่บรรทัดที่ 2 (ถ้ามี):</label>
        <input type="text" name="addressLine2" value={address.addressLine2} onChange={handleChange} style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>เมือง:</label>
        <input type="text" name="city" value={address.city} onChange={handleChange} required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <label>รหัสไปรษณีย์:</label>
        <input type="text" name="postalCode" value={address.postalCode} onChange={handleChange} required style={{ width: '100%', padding: '8px', marginTop: '5px' }} />
      </div>
      <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: '#0070f3', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        บันทึกที่อยู่
      </button>
    </form>
  );
};

export default AddressForm;
