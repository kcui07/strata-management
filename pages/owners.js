import Header from '@/components/Header';

export default function Owners() {
  return (
    <>
      <Header />
      <main style={{ padding: '20px' }}>
        <h1>Owners Info</h1>
        <table border="1" width="100%">
          <thead>
            <tr>
              <th>Name</th>
              <th>Room Number</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            <tr><td>John Doe</td><td>101</td><td>123456789</td></tr>
            <tr><td>Jane Smith</td><td>102</td><td>987654321</td></tr>
          </tbody>
        </table>
      </main>
    </>
  );
}
