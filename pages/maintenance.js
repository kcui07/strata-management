import Header from '../components/Header';

export default function Maintenance() {
  return (
    <>
      <Header />
      <main style={{ padding: '20px' }}>
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
    </>
  );
}
