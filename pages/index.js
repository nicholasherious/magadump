import Head from 'next/head';
import useSWR from 'swr';
import axios from 'axios';

import { SideBar } from '../components/SideBar';
import NMain from '../components/NMain';

import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en.json';

TimeAgo.addDefaultLocale(en);

const fetcher = url => axios.get(url).then(res => res.data);
const URL = 'http://localhost:3001/posts';

export default function Home({ fallbackData }) {
  const { data, error } = useSWR(URL, fetcher, {
    fallbackData,
    refreshInterval: 1000,
  });
  // const { data, error } = useSWR(URL, fetcher, { fallbackData, refreshInterval: 1000 }, )
  if (error) return <div>failed to load</div>;
  if (!data) return <div>loading...</div>;
  console.log(data);
  return (
    <div>
      <Head>
        <title>Resist News</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex gap-4 md:max-w-6xl mx-auto px-2 md:px-8 sm:px-16 pt-6'>
        <div className='w-full'>
          {data.map(post => {
            return (
              // <MainCard key={post.id} post={post} />
              <NMain key={post.id} post={post} />
            );
          })}
        </div>
        <div className='hidden w-1/2 lg:inline'>
          <SideBar />
        </div>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const data = await fetcher(URL);
  return { props: { fallbackData: data } };
}

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
