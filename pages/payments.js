import Header from '../components/Header';

export default function Payments() {
  return (
    <>
      <Header />
      <main style={{ padding: '20px' }}>
        <h1>Payments</h1>
        <p>Latest Payment Records:</p>
        <ul>
          <li>John Doe - $500 - 2025-03-01</li>
          <li>Jane Smith - $450 - 2025-03-05</li>
        </ul>
      </main>
    </>
  );
}
