import Image from 'next/image';

const SearchBar = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '10px 20px', backgroundColor: '#ff4500' }}>
      {/* โลโก้ Shopee */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Image src="/logo-icon-1.png" alt="Shopee Logo" width={50} height={50} />
        <span style={{ color: '#fff', fontSize: '24px', fontWeight: 'bold' }}>doll</span>
      </div>

      {/* ช่องค้นหา */}
      <div style={{ display: 'flex', alignItems: 'center', flexGrow: 1, margin: '0 20px' }}>
        <input
          type="text"
          placeholder="ค้นหาสินค้าและร้านค้า"
          style={{ width: '100%', padding: '10px', borderRadius: '4px 0 0 4px', border: 'none' }}
        />
        <button style={{ padding: '10px 15px', backgroundColor: '#fff', borderRadius: '0 4px 4px 0', border: 'none', cursor: 'pointer' }}>
          <Image src="/icon-2.png" alt="Search" width={20} height={20} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
