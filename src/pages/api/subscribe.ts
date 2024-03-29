import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { email } = req.body

  if (!email) {
    return res.status(400).json({ error: 'Email is required' })
  }

  const result = await fetch('https://www.localhost:1017/signup', {
    method: 'POST',
    headers: {
      // Authorization: `Token ${process.env_API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, double_opt_in: false })
  })
  const data = await result.json()

  if (!result.ok) {
    return res.status(500).json({ error: data.error.email[0] })
  }

  return res.status(201).json({ error: '' })
}
