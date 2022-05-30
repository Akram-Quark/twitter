import React, {
  Dispatch,
  RefObject,
  SetStateAction,
  useRef,
  useState,
} from 'react'
import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline'
import { Tweet, TweetBody } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'
import toast from 'react-hot-toast'

type Props = {
  setTweets: Dispatch<SetStateAction<[Tweet]>>
}

function TweetBox({ setTweets }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [input, setInput] = useState<string>('')
  const [img, setImg] = useState<string>('')
  const imageInputRef = useRef<HTMLInputElement>(null)
  const addImgToTweet = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault()
    if (!imageInputRef.current?.value) return
    setImg(imageInputRef.current.value)
    imageInputRef.current.value = ''
    setIsOpen(false)
  }
  const postTweet = async () => {
    const tweetInfo: TweetBody = {
      text: input,
      username: 'Twitter User ',
      profileImg:
        'https://cdn.pixabay.com/photo/2017/03/24/07/28/twitter-2170426__340.png',
      image: img,
    }
    const result = await fetch('/api/addTweet', {
      body: JSON.stringify(tweetInfo),
      method: 'POST',
    })
    const json = await result.json()
    const newTweets = await fetchTweets()
    setTweets(newTweets)
    toast('tweet Posted')
    return json
  }

  const sendTweet = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    postTweet()
    setImg('')
    setInput('')
    setIsOpen(false)
  }
  return (
    <div className="p5 flex space-x-2">
      <img
        className="m-5 h-12 w-12 rounded-full object-cover"
        src="https://cdn.pixabay.com/photo/2015/07/31/15/00/coffee-869203__340.jpg"
        alt="avatar"
      />
      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            value={input}
            onChange={(e) => {
              setInput(e.target.value)
            }}
            placeholder="twit's  ....   "
            type="text"
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
          />
          <div className="flex items-center ">
            <div className="flex flex-1 flex-row space-x-2 text-blue-500">
              <PhotographIcon
                onClick={() => setIsOpen(!isOpen)}
                className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-in-out hover:animate-bounce"
              />

              <CalendarIcon className="h-5 w-5" />
              <EmojiHappyIcon className="h-5 w-5" />
              <LocationMarkerIcon className="h-5 w-5" />
              <SearchCircleIcon className="h-5 w-5" />
            </div>
            <button
              onClick={sendTweet}
              disabled={!input}
              className="mr-4 rounded-lg bg-blue-500 py-1 px-4 font-semibold text-white outline-none transition-all duration-100    disabled:opacity-40"
            >
              Tweet
            </button>
          </div>
          {isOpen && (
            <form className="m-2 mt-5 flex rounded-lg bg-blue-600/90 py-2 px-4">
              <input
                ref={imageInputRef}
                className="flex-1 bg-transparent p-2 text-white outline-none placeholder:text-white"
                type="text"
                placeholder="Provide Image Url ..."
              />
              <button
                type="submit"
                onClick={addImgToTweet}
                className="font-bold text-white"
              >
                Add Image
              </button>
            </form>
          )}
          {img && (
            <img
              src={img}
              className="mt-10 h-40 w-full rounded-xl object-contain shadow-lg"
            />
          )}
        </form>
      </div>
    </div>
  )
}

export default TweetBox
