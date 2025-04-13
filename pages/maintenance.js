import Header from '../components/Header';
import Footer from "../components/Footer";

export default function Maintenance() {
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
        <h1>Maintenance Request</h1>
        <form>
          <label>Service:
            <select>
              <option>Fix Water Pipes</option>
              <option>Fix Lights</option>
              <option>Fix Door Locks</option>
            </select>
          </label><br/><br/>

          <label>Room Number:
            <input type="text" placeholder="Enter Room Number" />
          </label><br/><br/>

          <label>Preferred Date:
            <input type="date" />
          </label><br/><br/>

          <button type="submit">Submit Request</button>
        </form>
      </main>
      <Footer />
    </>
  );
}
