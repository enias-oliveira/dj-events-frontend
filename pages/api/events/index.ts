import { NextApiRequest, NextApiResponse } from 'next'
import { events as data } from './data.json'

const events = (req: NextApiRequest, res: NextApiResponse): void => {
  res.status(200).json(data)
}

export default events
