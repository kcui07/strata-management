import Header from '../components/Header';
import Footer from "../components/Footer";

export default function Payments() {
  return (
    <>
      <Header />
      <main
        className="main-content"
        style={{
          padding: '20px',
          marginTop: '120px', 
          minHeight: 'calc(100vh - 400px)' 
        }}
      >
        <h1>Payments</h1>
        <p>Latest Payment Records:</p>
        <ul>
          <li>John Doe - $500 - 2025-03-01</li>
          <li>Jane Smith - $450 - 2025-03-05</li>
        </ul>
      </main>
      <Footer />
    </>
  );
}
