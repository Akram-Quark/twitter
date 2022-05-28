import type { NextApiRequest, NextApiResponse } from 'next'
import { sanityClient } from '../../sanity'
import { Comment, TweetBody } from '../../typings'
import { groq } from 'next-sanity'
import process from 'process'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const data: TweetBody = JSON.parse(req.body)
  console.log(data)
  const mutations = {
    mutations: [
      {
        create: {
          _type: 'tweet',
          text: data.text,
          username: data.username,
          blockTweet: false,
          profileImg: data.profileImg,
          image: data.image,
        },
      },
    ],
  }
  const apiEndPoint = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2021-06-07/data/mutate/${process.env.NEXT_PUBLIC_SANITY_DATASET}`
  const result = await fetch(apiEndPoint, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.SANITY_API_TOKEN}`,
    },
    body: JSON.stringify(mutations),
    method: 'POST',
  })
  const json = await result.json()
  console.log(json)
  res.status(201).json({ message: 'done' })
}
