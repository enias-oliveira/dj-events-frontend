import Link from 'next/link'
import styles from '../styles/Header.module.css'

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          <span>DJ Events</span>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/events">
              <span>Events</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
