import Header from '../components/Header';
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />

      <div style={{
        position: 'relative',
        width: '100%',
        height: '600px',
        backgroundImage: 'url(/contact.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>

        <div style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          zIndex: 1,
        }}></div>

        <h2 style={{
          position: 'absolute',
          top: '50px',
          left: '50%',
          transform: 'translateX(-50%)',
          color: 'white',
          fontSize: '32px',
          textAlign: 'center',
          zIndex: 2,
          maxWidth: '80%',
        }}>
          Send us a message or request a call back and we’ll get back to you on the same business day.
        </h2>

        <div style={{
          position: 'absolute',
          bottom: '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#fff',
          padding: '40px',
          borderRadius: '10px',
          width: '90%',
          maxWidth: '600px',
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
          zIndex: 3,
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

      <div style={{ height: '200px' }}></div>

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
