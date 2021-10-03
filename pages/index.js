import Head from 'next/head';

import { client } from '../lib/apollo'
import { gql } from '@apollo/client'


import Header from '../components/Header';
import MainCard from '../components/MainCard';
import Footer from '../components/Footer';

import {
  QUERY_ALL_POSTS,
} from '../data/posts';
// import Main from '../components/Main';
import NMain from '../components/NMain';
import { SideBar } from '../components/SideBar';


export default function Home({ posts }) {
console.log(posts)
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
<Header />
      <main className="flex gap-4 max-w-6xl mx-auto px-8 sm:px-16 pt-6">
       

        <div className="w-full"> 
       {posts.map(post => {
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
      <Footer />
    </div>
  );
}

// Bring in wordpress data
export async function getStaticProps() {
  const result = await client.query({
    query: QUERY_ALL_POSTS
  });
 
 const allPosts = result?.data.posts.edges.map(({ node = {} }) => node);
  return { props: { posts: allPosts } }
}
