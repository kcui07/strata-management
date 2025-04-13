import Header from '../components/Header';
import Footer from "../components/Footer";

export default function Maintenance() {
  return (
    <>
      <Header />

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh'
      }}>
        <main style={{
          flex: '1',
          backgroundImage: 'url(/repair.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '140px',
          paddingBottom: '60px'
        }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
            padding: '40px',
            borderRadius: '10px',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            width: '100%',
            maxWidth: '400px',
            textAlign: 'center'
          }}>
            <h2>Maintenance Request</h2>
            <form>
              <div style={{ marginBottom: '15px' }}>
                Service:
                <select style={inputStyle}>
                  <option>Fix Water Pipes</option>
                  <option>Fix Lights</option>
                  <option>Fix Windows</option>
                  <option>Fix Doors</option>
                  <option>Fix Air Conditioning</option>
                  <option>Fix Electrical Issues</option>
                  <option>Fix Wall Cracks</option>
                  <option>Pest Control</option>
                  <option>Other</option>
                </select>
              </div>

              <div style={{ marginBottom: '15px' }}>
                Room Number:
                <input placeholder="Enter Room Number" style={inputStyle} />
              </div>

              <div style={{ marginBottom: '20px' }}>
                Preferred Date:
                <input type="date" style={inputStyle} />
              </div>

              <button type="submit" className="pink-btn">Submit Request</button>
            </form>
          </div>
        </main>

        <Footer />
      </div>

      <style jsx>{`
        .pink-btn {
          background-color: #f9b3b3;
          border: none;
          padding: 12px 30px;
          font-size: 16px;
          font-weight: bold;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .pink-btn:hover {
          transform: scale(1.1);
          opacity: 0.8;
        }
      `}</style>
    </>
  );
}

const inputStyle = {
  width: '100%',
  padding: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc',
  marginTop: '8px'
};
