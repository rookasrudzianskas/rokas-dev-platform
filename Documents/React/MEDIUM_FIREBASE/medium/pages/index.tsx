import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'

const styles = {
    wrapper: `mx-auto`,
    main: `flex justify-center`,
    container: `max-w-7xl flex-1`,
    postsList: `flex flex-col gap-3 p-2 sm:grid-cols-2 md:gap-6 md:p-6 lg:grid-cols-3`,
}

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Medium</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
          <Header />
    </div>
  )
}

export default Home;
