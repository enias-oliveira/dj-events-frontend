import { GetStaticProps } from 'next'
import Link from 'next/link'

import Layout from '@/components/Layout'
import type { Event } from '@/components/EventItem'
import EventItem from '@/components/EventItem'

import { API_URL } from '@/config/index'

export type EventsProps = {
  events: Event[]
}

const Home = ({ events }: EventsProps): JSX.Element => {
  return (
    <Layout>
      <h1>Home</h1>
      <h1>Upcoming Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}

      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}

      {events.length > 0 && (
        <Link href="/events">
          <a className="btn-secondary">View All Events</a>
        </Link>
      )}
    </Layout>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${API_URL}/api/events`)
  const res_data = await res.json()

  const events_slice: Event[] = res_data.slice(0, 3)

  return {
    props: { events: events_slice },
    revalidate: 1,
  }
}
