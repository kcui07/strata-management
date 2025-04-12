import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
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
        <a href="/" style={{ margin: '0 15px' }}>Home 首页</a>
        <a href="/owners" style={{ margin: '0 15px' }}>Owners Info 业主信息</a>
        <a href="/maintenance" style={{ margin: '0 15px' }}>Maintenance 报修管理</a>
        <a href="/payments" style={{ margin: '0 15px' }}>Payments 缴费信息</a>
        <a href="/contact" style={{ margin: '0 15px' }}>Contact 联系我们</a>
      </nav>

      {/* Main Content */}
      <div style={{ paddingTop: '80px', textAlign: 'center' }}>
        <h1>Welcome to Strata Management Website 欢迎来到物业管理网站</h1>
        <p>This site provides information for owners and residents. 本网站为业主和住户提供信息。</p>
        <p>Please use the navigation bar above to visit other pages. 请使用上方导航栏浏览其他页面。</p>
      </div>
    </div>
  )
}
