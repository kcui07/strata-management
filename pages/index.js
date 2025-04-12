import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Strata Management Website</title>
        <meta name="description" content="Welcome to Strata Management Website" />
      </Head>

      <nav
        style={{
          position: "fixed",
          top: 0,
          width: "100%",
          backgroundColor: "#f8f8f8",
          padding: "10px 0",
          boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
          zIndex: 1000,
          textAlign: "center",
        }}
      >
        import Link from 'next/link'

        <Link href="/">Home</Link>
        <Link href="/owners">Owners</Link>
        <Link href="/maintenance">Maintenance</Link>
        <Link href="/payments">Payments</Link>
        <Link href="/contact">Contact</Link>

      </nav>

      <div style={{ paddingTop: "80px", textAlign: "center" }}>
        <h1>Welcome to Strata Management Website</h1>
        <p>This site provides information for owners and residents.</p>
        <p>Please use the navigation bar above to visit other pages.</p>
      </div>
    
    </div>
  );
}