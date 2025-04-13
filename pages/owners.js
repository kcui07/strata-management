import Header from '../components/Header'
import Footer from "../components/Footer"

export default function Owners() {
  return (
    <>
      <Header />

      <main className="main-content" style={{
        padding: '60px 20px',
        minHeight: 'calc(100vh - 400px)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '1fr 1fr',
        gap: '40px',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>

        <section style={boxStyle('#ffd6d6', '#ffa6a6')}>
          <h2>Owner Portal Access</h2>
          <p>Log in to view your property details, pay bills, and access documents.</p>
          <button style={buttonStyle('#ffa6a6', '#ff8c8c')}>Login to Portal</button>
        </section>

        <section style={boxStyle('#d6f5e3', '#a6e5c5')}>
          <h2>Download Documents</h2>
          <p>Download important forms and guidelines for owners.</p>
          <button style={buttonStyle('#a6e5c5', '#7edbb0')}>View Documents</button>
        </section>

        <section style={boxStyle('#d6eaff', '#a6d8ff')}>
          <h2>Payment Instructions</h2>
          <p>Find detailed instructions on how to pay strata fees.</p>
          <button style={buttonStyle('#a6d8ff', '#7cc5ff')}>Payment Guide</button>
        </section>

        <section style={boxStyle('#ffe2d6', '#ffc8a6')}>
          <h2>Frequently Asked Questions</h2>
          <p>Check answers to commonly asked questions.</p>
          <button style={buttonStyle('#ffc8a6', '#ffa26d')}>View FAQs</button>
        </section>
      </main>

      <Footer />
    </>
  )
}

const boxStyle = (bg, hover) => ({
  backgroundColor: bg,
  padding: '40px 20px',
  borderRadius: '10px',
  textAlign: 'center',
  transition: 'background-color 0.3s',
  cursor: 'pointer'
})

const buttonStyle = (bg, hover) => ({
  marginTop: '20px',
  backgroundColor: bg,
  border: 'none',
  padding: '10px 30px',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  color: '#333',
  fontWeight: 'bold',
  fontSize: '16px'
})