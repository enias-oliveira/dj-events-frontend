import Head from 'next/head'
import { ReactNode } from 'react'

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

      {children}
    </>
  )
}

Layout.defaultProps = {
  title: 'DJ Events | Find the hottest parties',
  description: 'Find the latest DJ and other musical events',
  keywords: 'music,dj,edm,events',
}

export default Layout
