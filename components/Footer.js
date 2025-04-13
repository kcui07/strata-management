export default function Footer() {
    return (
      <footer style={{
        backgroundColor: '#f77f00',
        color: 'white',
        padding: '20px 30px',
        textAlign: 'left',
        fontWeight: 'bold',
      }}>
        <h2 style={{
          textTransform: 'uppercase',
          fontSize: '24px',
          marginBottom: '10px'
        }}>
          Contact Us
        </h2>
  
        <p style={{ fontSize: '16px', margin: '5px 0' }}>Phone: +81 0403658976</p>
        <p style={{ fontSize: '16px', margin: '5px 0' }}>Address: Level 7, XXX Building, NSW 2017, Australia</p>
        <p style={{ fontSize: '16px', margin: '5px 0' }}>Email: storemanagement.2025@outlook.com</p>
      </footer>
    );
  }