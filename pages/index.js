import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* 网页信息 */}
      <Head>
        <title>Strata Management Website</title>
        <meta name="description" content="Welcome to Strata Management Website" />
      </Head>

      {/* 修正后的导航栏 */}
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
        {/* 使用 <a> 标签包裹在 <Link> 内 */}
        <Link href="/" passHref>
          <a style={{ margin: "0 15px" }}>Home 首页</a>
        </Link>
        <Link href="/owners" passHref>
          <a style={{ margin: "0 15px" }}>Owners Info 业主信息</a>
        </Link>
        <Link href="/maintenance" passHref>
          <a style={{ margin: "0 15px" }}>Maintenance 报修管理</a>
        </Link>
        <Link href="/payments" passHref>
          <a style={{ margin: "0 15px" }}>Payments 费用缴纳</a>
        </Link>
        <Link href="/contact" passHref>
          <a style={{ margin: "0 15px" }}>Contact 联系我们</a>
        </Link>
      </nav>

      {/* 内容部分 */}
      <div style={{ paddingTop: "80px", textAlign: "center" }}>
        <h1>Welcome to Strata Management Website 欢迎来到物业管理网站</h1>
        <p>This site provides information for owners and residents. 本网站为业主和住户提供信息。</p>
        <p>Please use the navigation bar above to visit other pages. 请使用上方导航栏浏览其他页面。</p>
      </div>
    </div>
  );
}