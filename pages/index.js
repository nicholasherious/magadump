import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import { SideBar } from '../components/SideBar';
import NMain from '../components/NMain';
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en.json';
import InfiniteScroll from 'react-infinite-scroll-component';
import useSWR from 'swr';

import FrontMain from '../components/FrontMain'
// import FrontMain from '../components/FrontMain'

TimeAgo.addDefaultLocale(en);

const fetcher = url => axios.get(url).then(res => res.data);

export default function Home() {
  const [pageIndex, setPageIndex] = useState(1);

  // The API URL includes the page index, which is a React state.
  const { data } = useSWR(
    `http://localhost:3001/posts?page=${pageIndex}`,
    fetcher
  );

  console.log(data);

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Head>
        <title>Resist News</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex gap-4 md:max-w-6xl mx-auto px-2 md:px-8 sm:px-16 pt-6'>
        <div className='w-full'>
          <div>
            {/* {data.posts.map(post => (
              <NMain post={post} />
            ))} */}
            {data.posts.map(post => (
              <FrontMain post={post} />
            ))}
            <button onClick={() => setPageIndex(pageIndex - 1)}>
              Previous
            </button>
            <button onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
          </div>
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
