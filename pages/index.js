import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Strata Management Website</title>
        <meta name="description" content="Welcome to Strata Management Website" />
      </Head>

      {/* Navigation Bar */}
      <nav style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        backgroundColor: '#f8f8f8',
        padding: '10px 0',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
        zIndex: 1000,
        textAlign: 'center'
      }}>
        <Link href="/" style={{ margin: '0 15px' }}>Home</Link>
        <Link href="/owners" style={{ margin: '0 15px' }}>Owners Info 业主信息</Link>
        <Link href="/maintenance" style={{ margin: '0 15px' }}>Maintenance 报修管理</Link>
        <Link href="/payments" style={{ margin: '0 15px' }}>Payments 账单信息</Link>
        <Link href="/contact" style={{ margin: '0 15px' }}>Contact 联系我们</Link>
      </nav>

      {/* Main Content */}
      <div style={{ paddingTop: '80px', textAlign: 'center' }}>
        <h1>Welcome to Strata Management Website</h1>
        <p>This site provides information for owners and residents.</p>
        <p>请使用上方导航栏浏览其他页面。</p>
      </div>
    </div>
  )
}
