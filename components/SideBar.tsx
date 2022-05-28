import React from 'react'
import {
  BellIcon,
  HashtagIcon,
  BookmarkIcon,
  CollectionIcon,
  DotsCircleHorizontalIcon,
  MailIcon,
  UserIcon,
  HomeIcon,
} from '@heroicons/react/outline'
import SideBarRow from './SideBarRow'
type Props = {}

const SideBar = (props: Props) => {
  return (
    <div className="col-span-2 flex flex-col items-center px-4 md:items-start">
      <img
        className="m-3 h-10 w-10"
        src="https://links.papareact.com/drq"
        alt="twitter logo"
      />
      <SideBarRow Icon={HomeIcon} title={'Home'} />
      <SideBarRow Icon={HashtagIcon} title={'Explore'} />
      <SideBarRow Icon={BellIcon} title={'Notifications'} />
      <SideBarRow Icon={MailIcon} title={'Messages'} />
      <SideBarRow Icon={BookmarkIcon} title={'Bookmarks'} />
      <SideBarRow Icon={CollectionIcon} title={'Lists'} />
      <SideBarRow Icon={DotsCircleHorizontalIcon} title={'More'} />
      <SideBarRow Icon={UserIcon} title={'Sign In'} />
    </div>
  )
}

export default SideBar
