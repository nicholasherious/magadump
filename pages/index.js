import Head from 'next/head';
import { useState, useRef, useEffect } from 'react';
import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite';
import axios from 'axios';

import useOnScreen from '../hooks/useOnScreen';

import { SideBar } from '../components/SideBar';
import NMain from '../components/NMain';

import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en.json';

import useRequest from '../lib/useRequest';

TimeAgo.addDefaultLocale(en);

const fetcher = url => axios.get(url).then(res => res.data);

const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null; // reached the end
  return `http://localhost:3001/posts?page=${pageIndex}&limit=10`; // SWR key
};

function Page({ index }) {
  const { dataAgain } = useRequest({
    url: 'http://localhost:3001/posts?page=1&limit=10',
  });

  console.log(dataAgain);
  const { data } = useSWR(
    `http://localhost:3001/posts?page=${index}&limit=10`,
    fetcher
  );

  // ... handle loading and error states
  if (!data) return 'loading';

  return data.docs.map(post => <NMain post={post} />);
}

export default function Home() {
  const [cnt, setCnt] = useState(1);

  const pages = [];
  for (let i = 0; i < cnt; i++) {
    pages.push(<Page index={i} key={i} />);
  }

  return (
    <div>
      <Head>
        <title>Resist News</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex gap-4 md:max-w-6xl mx-auto px-2 md:px-8 sm:px-16 pt-6'>
        <div className='w-full'>
          {pages}
          <button onClick={() => setCnt(cnt + 1)}>Load More</button>
        </div>

        <div className='hidden w-1/2 lg:inline'>
          <SideBar />
        </div>
      </main>
    </div>
  );
}
