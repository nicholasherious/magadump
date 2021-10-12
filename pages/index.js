import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { SideBar } from '../components/SideBar';
import NMain from '../components/NMain';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import InfiniteScroll from 'react-infinite-scroll-component';

TimeAgo.addDefaultLocale(en);

const fetcher = url => axios.get(url).then(res => res.data);

export default function Home({ data }) {
  const BACKEND_API_URL = process.env.API_URL;
  const [posts, setPosts] = useState({ data });

  const getMorePosts = async () => {
    const newPosts = await axios
      .get(`${BACKEND_API_URL}?page=${posts.page}&limit=10`)
      .then(res => res.data);

    setPosts(post => {
      [...post, newPosts];
    });
  };

  if (!data) {
    return <div>Loading...</div>;
  }

  console.log(posts);
  return (
    <div>
      <Head>
        <title>Resist News</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex gap-4 md:max-w-6xl mx-auto px-2 md:px-8 sm:px-16 pt-6'>
        <div className='w-full'>
          {/* <InfiniteScroll
            dataLength={posts.page}
            next={getMorePosts}
            hasMore={true}
            loader={<h4>Loading..</h4>}
            endMessage={<p>You have seen it all</p>}
          >
            {posts.docs.map(post => (
              <NMain post={post} />
            ))}
          </InfiniteScroll> */}
        </div>

        <div className='hidden w-1/2 lg:inline'>
          <SideBar />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const BACKEND_API_URL = process.env.API_URL;

  const data = await axios
    .get(`${BACKEND_API_URL}?limit=10&page=1`)
    .then(res => res.data);

  return {
    props: {
      data,
    },
  };
}
