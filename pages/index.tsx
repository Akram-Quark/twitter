import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { Toaster } from 'react-hot-toast'
import Feed from '../components/Feed'
import SideBar from '../components/SideBar'
import Widget from '../components/Widget'
import { Tweet } from '../typings'
import { fetchTweets } from '../utils/fetchTweets'

interface Props {
  tweets: [Tweet]
}
const Home: NextPage<Props> = ({ tweets }: Props) => {
  return (
    <div className="mx-auto max-h-screen overflow-hidden  lg:max-w-7xl ">
      <Head>
        <title>Twitter Quark</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />
      <main className=" grid grid-cols-9  ">
        {/*sidebar */}
        <SideBar />
        {/*feed */}
        <Feed tweets={tweets} />
        {/*widget */}
        <Widget />
      </main>
    </div>
  )
}

export default Home
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const tweets = await fetchTweets()

  return {
    props: {
      tweets: tweets,
    },
  }
}
