import Header from '../components/Header';
import Footer from "../components/Footer";
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Header />

      <div style={{ width: '100%', overflow: 'hidden' }}>
        <Image
          src="/teampic1.jpg"
          alt="Team Photo"
          layout="responsive"
          width={1920}
          height={700}
        />
      </div>

      <main style={{ textAlign: 'center', marginTop: '120px', minHeight: 'calc(100vh - 400px)' }}>
        <h1>Welcome to Strata Management Website</h1>
        <p>This site provides information for owners and residents.</p>
        <p>Please use the navigation bar above to browse other pages.</p>
      </main>

      <section style={{
        backgroundColor: '#fcd6df',
        color: 'black',
        padding: '60px 20px',
        textAlign: 'center'
      }}>
        <h2 style={{ fontSize: '36px', marginBottom: '40px' }}>Our Values</h2>

        <div style={{
          display: 'flex',
          justifyContent: 'space-around',
          flexWrap: 'wrap',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div style={{ width: '220px', marginBottom: '30px' }}>
            <p style={{ fontWeight: 'bold' }}>United we<br />are stronger</p>
          </div>

          <div style={{ width: '220px', marginBottom: '30px' }}>
            <p style={{ fontWeight: 'bold' }}>Trusted and<br />transparent</p>
          </div>

          <div style={{ width: '220px', marginBottom: '30px' }}>
            <p style={{ fontWeight: 'bold' }}>Accountable to<br />ourselves and others</p>
          </div>

          <div style={{ width: '220px', marginBottom: '30px' }}>
            <p style={{ fontWeight: 'bold' }}>Visionary<br />Think big, aim high</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
