import Layout from '@/components/Layout'
import EventItem from '@/components/EventItem'
import { EventsProps } from 'pages'

import { API_URL } from '@/config/index'
import { GetStaticProps } from 'next'

const Events = ({ events }: EventsProps): JSX.Element => {
  return (
    <Layout>
      <h1>My Events</h1>
      <h1>Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  )
}

export default Events

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  return {
    props: { events },
    revalidate: 1,
  }
}
