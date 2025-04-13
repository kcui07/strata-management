import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/newlogo.png" alt="Logo" width={250} height={80} />
      </div>

      <nav className={styles.navbar}>
        <Link href="/">Home</Link>
        <Link href="/owners">Owners Service</Link>
        <Link href="/maintenance">Maintenance</Link>
        <Link href="/payments">Payments</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>
    </header>
  );
}