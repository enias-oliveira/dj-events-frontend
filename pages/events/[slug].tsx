import { FaPencilAlt, FaTimes } from 'react-icons/fa'

import Link from 'next/link'
import Image from 'next/image'

import Layout from '@/components/Layout'
import type { Event } from '@/components/EventItem'

import styles from '@/styles/Event.module.css'
import { MouseEventHandler } from 'react'
import { API_URL } from '@/config/index'
import { GetStaticPaths, GetStaticProps } from 'next'

const EventPage = ({ event }: { event: Event }): JSX.Element => {
  const deleteEvent: MouseEventHandler = (e): void => {
    console.log(e)
  }

  return (
    <Layout>
      <h1>My Event</h1>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${event.id}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes /> Delete Event
          </a>
        </div>

        <span>
          {event.date} at {event.time}
        </span>
        <h1>{event.name}</h1>
        {event.image && (
          <div className={styles.image}>
            <Image src={event.image} width={960} height={600} />
          </div>
        )}

        <h3>Performers:</h3>
        <p>{event.performers}</p>
        <h3>Description:</h3>
        <p>{event.description}</p>
        <h3>Venue: {event.venue}</h3>
        <p>{event.address}</p>

        <Link href="/events">
          <a className={styles.back}>{'<'} Go Back</a>
        </Link>
      </div>
    </Layout>
  )
}

export default EventPage

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${API_URL}/api/events`)
  const events = await res.json()

  const paths = events.map((event) => ({
    params: { slug: event.slug },
  }))

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async ({ params: { slug } }) => {
  const res = await fetch(`${API_URL}/api/events/${slug}`)
  const event = await res.json()

  return {
    props: { event },
    revalidate: 1,
  }
}
