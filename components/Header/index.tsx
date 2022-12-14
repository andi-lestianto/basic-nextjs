import Link from 'next/link'
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.container}>
            <ul className={styles.list}>
                <li className={styles.item}> <Link href="/">Homepage</Link> </li>
                <li className={styles.item}> <Link href="/blogs">Blog</Link> </li>
                <li className={styles.item}> <Link href="/users">Users</Link> </li>
            </ul>
        </header>
    )
}
