import Header from '../components/Header';
import Footer from "../components/Footer";
import Image from 'next/image';

export default function Contact() {
  return (
    <>
      <Header />

      <div style={{ display: 'flex', flexWrap: 'wrap', minHeight: '80vh' }}>

        <div style={{ flex: '1', minWidth: '300px', position: 'relative' }}>
          <Image
            src="/contact.jpg"
            alt="Contact Us Background"
            layout="fill"
            objectFit="cover"
          />
          <div style={{ position: 'absolute', color: 'white', padding: '40px', top: 0, left: 0 }}>
            <h3>GET IN TOUCH</h3>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>WE’RE HERE TO HELP.</h1>
            <p style={{ maxWidth: '300px', marginTop: '20px' }}>
              Send us a message or request a call back and we’ll get back to you on the same business day.
            </p>
          </div>
        </div>

        <div style={{ flex: '1', minWidth: '300px', padding: '60px' }}>
          <h2 style={{ fontSize: '32px', fontWeight: 'bold', marginBottom: '30px' }}>Get in touch</h2>
          <form>
            <div style={{ marginBottom: '20px' }}>
              <input type="text" placeholder="Name" style={inputStyle} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <input type="email" placeholder="Email" style={inputStyle} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <input type="text" placeholder="Phone" style={inputStyle} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <input type="text" placeholder="Plan Number or Building Address (optional)" style={inputStyle} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <textarea placeholder="Your Message" rows="5" style={{ ...inputStyle, resize: 'none' }}></textarea>
            </div>

            <button type="submit" style={{
              width: '100%',
              padding: '15px',
              backgroundColor: '#007BFF', 
              color: 'white',
              border: 'none',
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
  )
}

const inputStyle = {
  width: '100%',
  padding: '12px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '16px'
};
