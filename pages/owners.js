import Header from '../components/Header'
import Footer from "../components/Footer"

export default function Owners() {
  return (
    <>
      <Header />

      <main className="main-content" style={{ padding: '40px 20px', textAlign: 'center', minHeight: 'calc(100vh - 400px)' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 'bold', marginBottom: '40px' }}>
          Owners Information
        </h1>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Owner Portal Access</h2>
          <p>Log in to view your property details, pay bills, and access documents.</p>
          <button style={{
            marginTop: '15px',
            backgroundColor: '#ffd6d6',
            border: 'none',
            padding: '10px 30px',
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
            Login to Portal
          </button>
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Download Documents</h2>
          <p>Download important forms and guidelines for owners.</p>
          <button style={{
            marginTop: '15px',
            backgroundColor: '#d6f5e3',
            border: 'none',
            padding: '10px 30px',
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
            View Documents
          </button>
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Payment Instructions</h2>
          <p>Find detailed instructions on how to pay strata fees.</p>
          <button style={{
            marginTop: '15px',
            backgroundColor: '#d6eaff',
            border: 'none',
            padding: '10px 30px',
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
            Payment Guide
          </button>
        </section>

        <section style={{ marginBottom: '60px' }}>
          <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Frequently Asked Questions</h2>
          <p>Check answers to commonly asked questions.</p>
          <button style={{
            marginTop: '15px',
            backgroundColor: '#ffe2d6',
            border: 'none',
            padding: '10px 30px',
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
            View FAQs
          </button>
        </section>

        <section>
          <h2 style={{ fontSize: '28px', marginBottom: '20px' }}>Contact Property Manager</h2>
          <p>If you have other questions, feel free to contact us directly.</p>
          <button style={{
            marginTop: '15px',
            backgroundColor: '#e3d6ff',
            border: 'none',
            padding: '10px 30px',
            borderRadius: '8px',
            cursor: 'pointer'
          }}>
            Contact Us
          </button>
        </section>

      </main>

      <Footer />
    </>
  )
}
