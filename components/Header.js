import Image from 'next/image';
import Link from 'next/link';
import styles from '@/styles/Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/logo.png" alt="Logo" width={150} height={60} />
      </div>

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
