import { NextApiRequest, NextApiResponse } from 'next'
import { events as events_data } from './data.json'

const singleEvent = (req: NextApiRequest, res: NextApiResponse): void => {
  const target_slug = req.query.slug
  const [target_event] = events_data.filter((event_data) => event_data.slug === target_slug)

  if (req.method === 'GET' && target_event) {
    res.status(200).json(target_event)
  } else {
    res.setHeader('Allow', ['GET'])
    res.status(405).json({ msg: `Method ${req.method} is not allowed` })
  }
}

export default singleEvent
