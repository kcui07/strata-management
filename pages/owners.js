import Header from '../components/Header';
import Footer from "../components/Footer";
import Link from 'next/link';

export default function Owners() {
  return (
    <>
      <Header />

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}>
        <main style={{
          flex: '1',
          paddingTop: '140px',
          paddingBottom: '60px',
          textAlign: 'center'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '40px',
            maxWidth: '1100px',
            margin: '0 auto'
          }}>

            {/* Owner Portal */}
            <div style={{ backgroundColor: '#ffe0e0', padding: '60px 30px', borderRadius: '10px' }}>
              <h2>Owner Portal Access</h2>
              <p style={{ marginBottom: '20px' }}>
                Log in to view your property details, pay bills, and access documents.
              </p>
              <button className="owner-btn pink">
                Login to Portal
              </button>
            </div>

            {/* Download */}
            <div style={{ backgroundColor: '#d8f5e5', padding: '60px 30px', borderRadius: '10px' }}>
              <h2>Download Documents</h2>
              <p style={{ marginBottom: '20px' }}>
                Download important forms and guidelines for owners.
              </p>
              <button className="owner-btn green">
                View Documents
              </button>
            </div>

            {/* Payment */}
            <div style={{ backgroundColor: '#dceeff', padding: '60px 30px', borderRadius: '10px' }}>
              <h2>Payment Instructions</h2>
              <p style={{ marginBottom: '20px' }}>
                Find detailed instructions on how to pay strata fees.
              </p>
              <button className="owner-btn blue">
                Payment Guide
              </button>
            </div>

            {/* FAQ */}
            <div style={{ backgroundColor: '#ffe9d7', padding: '60px 30px', borderRadius: '10px' }}>
              <h2>Frequently Asked Questions</h2>
              <p style={{ marginBottom: '20px' }}>
                Check answers to commonly asked questions.
              </p>
              <button className="owner-btn orange">
                View FAQs
              </button>
            </div>
          </div>
        </main>

        <Footer />
      </div>

      <style jsx>{`
        .owner-btn {
          border: none;
          padding: 12px 30px;
          font-size: 16px;
          font-weight: bold;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .pink { background-color: #f9b3b3; }
        .green { background-color: #aee5c8; }
        .blue { background-color: #addfff; }
        .orange { background-color: #ffd3af; }

        .owner-btn:hover {
          transform: scale(1.1);
          opacity: 0.8;
        }
      `}</style>
    </>
  );
}