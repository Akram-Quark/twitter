import { RefreshIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import toast from 'react-hot-toast'
import { Tweet } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'
import TweetBox from './TweetBox'
import TweetComponent from './TweetComponent'
interface Props {
  tweets: [Tweet]
}
function Feed({ tweets: tweetsProp }: Props) {
  const [tweets, setTweets] = useState<[Tweet]>(tweetsProp)
  console.log(tweetsProp)
  const refrechTweets = async () => {
    const refreshToast = toast.loading('Refreshing ...')
    const tweets = await fetchTweets()
    setTweets(tweets)
    toast.success('Feed Updated !!', {
      id: refreshToast,
    })
  }
  return (
    <div className="col-span-7 max-h-screen overflow-y-scroll  border-x-2 border-gray-200 lg:col-span-5">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon
          onClick={refrechTweets}
          className="mr-5 mt-5 h-8 w-8 cursor-pointer text-blue-500 transition-all duration-500 ease-out hover:rotate-180 active:scale-50"
        />
      </div>
      <div>
        <TweetBox setTweets={setTweets} />
      </div>
      {/* twet comp*/}
      <div className="">
        {tweets.map((tweet: Tweet) => (
          <TweetComponent tweet={tweet} key={tweet._id} />
        ))}
      </div>
    </div>
  )
}

export default Feed
