import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
  return (
    <nav className={styles.navbar}>
      <Link href="/">Home</Link>
      <Link href="/owners">Owners Info</Link>
      <Link href="/maintenance">Maintenance</Link>
      <Link href="/payments">Payments</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
