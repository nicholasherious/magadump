import Head from 'next/head';
import Axios from 'axios'


import { SideBar } from '../components/SideBar';
import NMain from '../components/NMain';

import TimeAgo from 'javascript-time-ago'

import en from 'javascript-time-ago/locale/en.json'

TimeAgo.addDefaultLocale(en)


export default function Home({data}) {
console.log(data)
  return (
    <div>
      <Head>
        <title>Resist News</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className="flex gap-4 md:max-w-6xl mx-auto px-2 md:px-8 sm:px-16 pt-6">
       

        <div className="w-full"> 
       {data.map(post => {
         return (
          // <MainCard key={post.id} post={post} />
          <NMain key={post.id} post={post} />
         )
       })}
          
          
        </div>
        <div className="hidden w-1/2 lg:inline">
        
         <SideBar />
        
        </div>
   

  


      </main>
     
    </div>
  );
}

// Bring in database data
export const getStaticProps = async () => {
  const res = await Axios.get("http://localhost:3001/posts");
  return {
    props: { data: res.data},
  };
};
