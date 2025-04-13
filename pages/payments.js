import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Payment() {
  const [selected, setSelected] = useState("Rent");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [card, setCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const prices = {
    Rent: 500,
    Utilities: 50,
    Both: 550,
  };

  const details = {
    Rent: [{ label: "Weekly Rent", amount: 500 }],
    Utilities: [{ label: "Weekly Utilities", amount: 50 }],
    Both: [
      { label: "Weekly Rent", amount: 500 },
      { label: "Weekly Utilities", amount: 50 },
    ],
  };

  const isComplete = name && email && phone && card && expiry && cvv;

  return (
    <>
      <Header />

      <div style={{ display: "flex", minHeight: "100vh", paddingTop: "100px" }}>
        {/* Left: Form */}
        <div style={{ flex: 1, padding: "40px 60px" }}>
          <h2 style={{ marginBottom: "20px" }}>Make a Payment</h2>

          <label>
            Select Payment Type:
            <select style={inputStyle} value={selected} onChange={(e) => setSelected(e.target.value)}>
              <option>Rent</option>
              <option>Utilities</option>
              <option>Both</option>
            </select>
          </label>

          <br /><br />

          <label>Full Name:<input style={inputStyle} placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} /></label>
          <br /><br />
          <label>Email:<input style={inputStyle} placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} /></label>
          <br /><br />
          <label>Phone:<input style={inputStyle} placeholder="Enter your phone" value={phone} onChange={(e) => setPhone(e.target.value)} /></label>
          <br /><br />
          <label>Credit Card Number:<input style={inputStyle} placeholder="xxxx xxxx xxxx xxxx" value={card} onChange={(e) => setCard(e.target.value)} /></label>
          <br /><br />
          <label>Expiry Date:<input style={inputStyle} placeholder="MM/YY" value={expiry} onChange={(e) => setExpiry(e.target.value)} /></label>
          <br /><br />
          <label>CVV:<input style={inputStyle} placeholder="3 digits" value={cvv} onChange={(e) => setCvv(e.target.value)} /></label>
          <br /><br />

          <button className="pay-btn" disabled={!isComplete}>Pay ${prices[selected]}</button>
        </div>

        {/* Right: Summary */}
        <div style={{
          width: "400px",
          backgroundColor: "#f9f9f9",
          padding: "40px",
          borderLeft: "1px solid #ddd"
        }}>
          <h3>Summary</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {details[selected].map((item, index) => (
              <li key={index} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
                <span>{item.label}</span>
                <strong>${item.amount.toFixed(2)}</strong>
              </li>
            ))}
          </ul>
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
            <strong>Total</strong>
            <strong>${prices[selected].toFixed(2)}</strong>
          </div>
        </div>
      </div>

      <Footer />

      <style jsx>{`
        .pay-btn {
          background-color: #f9b3b3;
          border: none;
          padding: 14px 30px;
          font-size: 16px;
          font-weight: bold;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
        }

        .pay-btn:hover {
          transform: scale(1.05);
          opacity: 0.85;
        }

        .pay-btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
      `}</style>
    </>
  );
}

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ccc",
  marginTop: "5px"
};
