import Head from 'next/head'
import { ReactNode } from 'react'

import Footer from './Footer'
import Header from './Header'
import styles from '../styles/Layout.module.css'

type Props = {
  title?: string
  description?: string
  keywords?: string
  children: ReactNode
}

const Layout = ({ title, keywords, description, children }: Props): JSX.Element => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>

      <Header />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  )
}

Layout.defaultProps = {
  title: 'DJ Events | Find the hottest parties',
  description: 'Find the latest DJ and other musical events',
  keywords: 'music,dj,edm,events',
}

export default Layout
