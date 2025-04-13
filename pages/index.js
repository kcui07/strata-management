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

      <section style={{ backgroundColor: '#FAD1DC', padding: '60px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '50px' }}>Our Values</h2>

        <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '30px' }}>
            United we <br /> are stronger
          </div>
          <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '30px' }}>
            Trusted and <br /> transparent
          </div>
          <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '30px' }}>
            Accountable to <br /> ourselves and others
          </div>
          <div style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '30px' }}>
            Visionary <br /> Think big, aim high
          </div>
        </div>
      </section>

      <main style={{ textAlign: 'center', marginTop: '120px', minHeight: 'calc(100vh - 400px)' }}>
        <h1>Welcome to Strata Management Website</h1>
        <p>This site provides information for owners and residents.</p>
        <p>Please use the navigation bar above to browse other pages.</p>
      </main>

      <Footer />
    </>
  );
}
