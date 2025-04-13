import Header from '../components/Header';
import Footer from "../components/Footer";

export default function Owners() {
  return (
    <>
      <Header />

      <main style={{ minHeight: 'calc(100vh - 200px)', padding: '40px 20px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '30px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Owner Portal */}
          <div style={{ backgroundColor: '#ffe1e1', padding: '30px', borderRadius: '10px' }}>
            <h2>Owner Portal Access</h2>
            <p>Log in to view your property details, pay bills, and access documents.</p>
            <button style={btnStyle('#f8b6b6')}>Login to Portal</button>
          </div>

          {/* Download Documents */}
          <div style={{ backgroundColor: '#d9f7e1', padding: '30px', borderRadius: '10px' }}>
            <h2>Download Documents</h2>
            <p>Download important forms and guidelines for owners.</p>
            <button style={btnStyle('#b8eac4')}>View Documents</button>
          </div>

          {/* Payment Instructions */}
          <div style={{ backgroundColor: '#d9eaff', padding: '30px', borderRadius: '10px' }}>
            <h2>Payment Instructions</h2>
            <p>Find detailed instructions on how to pay strata fees.</p>
            <button style={btnStyle('#9ac6ff')}>Payment Guide</button>
          </div>

          {/* FAQs */}
          <div style={{ backgroundColor: '#ffe9d9', padding: '30px', borderRadius: '10px' }}>
            <h2>Frequently Asked Questions</h2>
            <p>Check answers to commonly asked questions.</p>
            <button style={btnStyle('#ffc7a8')}>View FAQs</button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

const btnStyle = (color) => ({
  backgroundColor: color,
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  marginTop: '20px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  display: 'inline-block'
});
