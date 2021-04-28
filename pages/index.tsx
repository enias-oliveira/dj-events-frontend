import Head from 'next/head'
import { NextPage } from 'next'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>DJ Events</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Dj Events</h1>
      </main>
    </div>
  )
}

export default Home
