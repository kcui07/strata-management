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

      <Footer />
    </>
  );
}
