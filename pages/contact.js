import Header from '../components/Header';
import Footer from "../components/Footer";
import Image from 'next/image';

export default function Contact() {
  return (
    <>
      <Header />

      <div style={{ padding: '60px 40px 20px 40px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
        <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>
          Send us a message or request a call back and we’ll get back to you on the same business day.
        </h2>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <Image
            src="/contact.jpg"
            alt="Contact us"
            layout="responsive"
            width={900}
            height={500}
          />
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', padding: '60px 40px', backgroundColor: '#f9f9f9' }}>
        <div style={{
          maxWidth: '600px',
          width: '100%',
          backgroundColor: '#fff',
          padding: '40px',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)'
        }}>
          <h2 style={{ marginBottom: '30px', fontSize: '28px', fontWeight: 'bold' }}>Get in touch</h2>

          <form>
            <input type="text" placeholder="Name" style={inputStyle} />
            <input type="email" placeholder="Email" style={inputStyle} />
            <input type="text" placeholder="Phone" style={inputStyle} />
            <input type="text" placeholder="Plan Number or Building Address (optional)" style={inputStyle} />
            <textarea placeholder="Your Message" style={{ ...inputStyle, height: '120px' }} />

            <button type="submit" style={{
              backgroundColor: '#add8e6',
              border: 'none',
              padding: '12px',
              width: '100%',
              borderRadius: '5px',
              fontSize: '18px',
              cursor: 'pointer'
            }}>
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  marginBottom: '20px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  fontSize: '16px'
};
