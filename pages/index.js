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

      <main className="main-content" style={{ textAlign: 'center', marginTop: '120px', minHeight: 'calc(100vh - 400px)', marginBottom: '80px' }}>
        <h1 style={{ fontSize: '40px', fontWeight: 'bold' }}>
          Welcome to Strata Management Website
        </h1>

        <h3 style={{ color: '#f48fb1', marginTop: '30px', marginBottom: '30px' }}>
          This site provides information for owners and residents.
        </h3>

        <p style={{ maxWidth: '800px', margin: '0 auto', lineHeight: '1.8', fontSize: '18px' }}>
          Strata Management has always been committed to providing quality property management services to owners and residents. Based on our industry experience and professional knowledge, Strata Management has a more mature and effective management system and service ability. Compared with traditional companies, we focus on transparent communication, rapid response and personalized service, aiming to create a safe, comfortable, friendly and high-quality community environment. Our team maintains an honest and responsible service philosophy. We can provide reliable facility maintenance, standardized financial management and various community support. We will be the trusted partner of every owner and resident in creating livable, secure and active communities through our professionalism and passion for service, whether it is for routine maintenance, expense management or any other homeowners&apos; needs!
        </p>
      </main>

      <div style={{ backgroundColor: '#f2f2f2', padding: '60px 20px' }}>
        <h2 style={{ textAlign: 'center', fontSize: '36px', fontWeight: 'bold', marginBottom: '50px' }}>
          Our Values
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '40px',
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <div style={{ fontSize: '22px', fontWeight: 'bold' }}>United we are stronger</div>
          <div style={{ fontSize: '22px', fontWeight: 'bold' }}>Trusted and transparent</div>
          <div style={{ fontSize: '22px', fontWeight: 'bold' }}>Accountable to ourselves and others</div>
          <div style={{ fontSize: '22px', fontWeight: 'bold' }}>Visionary, think big, aim high</div>
        </div>
      </div>

      <Footer />
    </>
  );
}
