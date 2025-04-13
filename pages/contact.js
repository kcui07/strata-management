import Header from '../components/Header';
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Header />

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        marginTop: '80px'
      }}>

        <div style={{ flex: '1' }}>
          <div style={{
            position: 'relative',
            width: '100%',
            minHeight: '100vh', 
            backgroundImage: 'url(/contact.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}>

            <div style={{
              position: 'absolute',
              top: '150px',
              left: '30px',
              color: '#000',
              fontSize: '20px',
              lineHeight: '1.8',
              maxWidth: '280px'
            }}>
              Send us a message or request a call back
              and we will get back to you on the same business day.
            </div>

            <div style={{
              position: 'absolute',
              top: '50%',
              right: '50px',
              transform: 'translateY(-50%)',
              backgroundColor: 'rgba(255,255,255,0.9)',
              padding: '40px',
              borderRadius: '10px',
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
              maxWidth: '400px',
              width: '100%',
            }}>
              <h2 style={{ marginBottom: '20px' }}>Get in touch</h2>

              <form>
                <input placeholder="Name" style={inputStyle} /><br /><br />
                <input placeholder="Email" style={inputStyle} /><br /><br />
                <input placeholder="Phone" style={inputStyle} /><br /><br />
                <input placeholder="Plan Number or Building Address (optional)" style={inputStyle} /><br /><br />
                <textarea placeholder="Your Message" style={{ ...inputStyle, height: '100px' }} /><br /><br />
                <button type="submit" style={buttonStyle}>Submit</button>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
};

const buttonStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#add8e6', 
  border: 'none',
  color: '#000',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
};
