import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Payment() {
  const [selectedOption, setSelectedOption] = useState('');

  const prices = {
    Rent: 500,
    Utilities: 50,
  };

  const getTotal = () => {
    if (!selectedOption) return 0;
    return selectedOption === 'Both' ? (prices.Rent + prices.Utilities) : prices[selectedOption];
  };

  return (
    <>
      <Header />

      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <main style={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '100px 20px', gap: '50px' }}>

          {/* Left Section */}
          <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}>
            <h2>Make a Payment</h2>

            <label>Select Payment Item:</label>
            <select onChange={(e) => setSelectedOption(e.target.value)} style={selectStyle}>
              <option value="">-- Please Select --</option>
              <option value="Rent">Rent</option>
              <option value="Utilities">Utilities</option>
              <option value="Both">Rent + Utilities</option>
            </select>

            <button className="pay-btn" disabled={!selectedOption}>
              Pay Now
            </button>
          </div>

          {/* Right Section */}
          <div style={{ backgroundColor: '#fff', padding: '40px', borderRadius: '10px', boxShadow: '0 4px 20px rgba(0,0,0,0.1)', width: '300px' }}>
            <h3>Summary</h3>

            {selectedOption && (
              <>
                {selectedOption === 'Both' ? (
                  <>
                    <p>Rent: $500/week</p>
                    <p>Utilities: $50/week</p>
                  </>
                ) : (
                  <p>{selectedOption}: ${prices[selectedOption]}/week</p>
                )}

                <hr />
                <p>Total: ${getTotal()}/week</p>
              </>
            )}
          </div>
        </main>

        <Footer />
      </div>

      <style jsx>{`
        .pay-btn {
          margin-top: 20px;
          width: 100%;
          padding: 12px;
          background-color: #f9b3b3;
          border: none;
          color: #000;
          border-radius: 5px;
          font-size: 16px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .pay-btn:hover:enabled {
          transform: scale(1.1);
          opacity: 0.8;
        }
      `}</style>
    </>
  );
}

const selectStyle = {
  width: '100%',
  padding: '10px',
  marginTop: '10px',
  borderRadius: '5px',
  border: '1px solid #ccc'
};
