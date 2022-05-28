import SearchIcon from '@heroicons/react/outline/SearchIcon'
import React from 'react'
import { TwitterTimelineEmbed } from 'react-twitter-embed'
type Props = {}

function Widget({}: Props) {
  return (
    <div className="col-span-2 mt-2  hidden px-2 lg:inline">
      {/* searche bar */}
      <div className="group mb-2 mt-2 flex items-center space-x-2 rounded-full bg-gray-200 p-3">
        <SearchIcon className="h-5 w-5 transition-all duration-100 ease-in-out group-hover:animate-ping" />
        <input
          placeholder="Search Twitter"
          className=" flex-1 bg-transparent outline-none"
        />
      </div>
      {/*twitter timeLine embed */}
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName="javascript"
        options={{ height: 1000 }}
      />
    </div>
  )
}

export default Widget
