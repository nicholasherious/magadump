import Head from 'next/head';
import { useState, useRef, useEffect } from 'react'
import useSWR from 'swr';
import useSWRInfinite from 'swr/infinite'
import axios from 'axios';

import useOnScreen from '../hooks/useOnScreen'

import { SideBar } from '../components/SideBar';
import NMain from '../components/NMain';

import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en.json';

TimeAgo.addDefaultLocale(en);

const fetcher = url => axios.get(url).then(res => res.data.postMessages);
const URL = 'http://localhost:3001/posts';
const PAGE_SIZE = 12



const getKey = (pageIndex, previousPageData) => {
  if (previousPageData && !previousPageData.length) return null // reached the end
  return URL + `?page=${pageIndex}`                    // SWR key
}

export default function Home() {


  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(getKey, fetcher)
  if (!data) return 'loading'

  

  const issues = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);
  const isRefreshing = isValidating && data && data.length === size;

 


console.log(issues)

  return (
    <div>
      <Head>
        <title>Resist News</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex gap-4 md:max-w-6xl mx-auto px-2 md:px-8 sm:px-16 pt-6'>
        <div className='w-full'>
          {issues.map(post => {
            return (
              <NMain key={post.id} post={post} />
            )
            
          })}
       
    <button
          disabled={isLoadingMore || isReachingEnd}
          onClick={() => setSize(size + 1)}
        >
          {isLoadingMore
            ? "loading..."
            : isReachingEnd
            ? "no more issues"
            : "load more"}
        </button>
    
        </div>
        <div>
       
          </div>
        <div className='hidden w-1/2 lg:inline'>
          <SideBar />
        </div>
      </main>
    </div>
  );
}

// export async function getServerSideProps() {
//   const data = await fetcher(URL);
//   return { props: { fallbackData: data } };
// }

// export async function getServerSideProps() {
//   const data = await fetcher(URL)
//   return { props: { fallbackData: data } }
// }

// // Bring in database data
// export const getServerSideProps = async () => {
//   const res = await Axios.get("http://localhost:3001/posts");
//   return {
//     props: { data: res.data},
//   };
// };
