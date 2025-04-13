import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      {/* 左边Logo */}
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Logo" width={80} height={80} />
      </div>

      {/* 右边导航栏 */}
      <nav className={styles.navbar}>
        <Link href="/">Home</Link>
        <Link href="/owners">Owners information</Link>
        <Link href="/maintenance">Maintenance</Link>
        <Link href="/payments">Payments</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>
    </header>
  );
}
