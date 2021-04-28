import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

const EventPage: NextPage<AppProps> = () => {
  const router = useRouter()

  return (
    <>
      <h1>My Slug</h1>
      <h3>{router.query.slug}</h3>
    </>
  )
}

export default EventPage
