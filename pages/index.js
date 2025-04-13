import Header from '../components/Header';
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1>Welcome to Strata Management Website</h1>
        <p>This site provides information for owners and residents.</p>
        <p>Please use the navigation bar above to browse other pages.</p>
      </main>
      <Footer />
    </>
  );
}
