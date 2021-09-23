import Head from 'next/head';
import { getAllPosts } from '../lib/posts';
import Header from '../components/Header';
import MainCard from '../components/MainCard';

export default function Home({ posts }) {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
<Header />
      <main className="flex gap-4 max-w-6xl mx-auto px-8 sm:px-16 pt-6">
       

        <div className="w-full md:w-3/4"> 
       {posts.map(post => {
         return (
          <MainCard key={post.id} post={post} />
         )
       })}
          
          
        </div>
        <div className="hidden w-1/2 md:inline   bg-red-200">
        
          <h1>side</h1>
        
        </div>
   

  


      </main>
    </div>
  );
}

// Bring in wordpress data
export async function getStaticProps() {
  const { posts } = await getAllPosts();
console.log(posts)

  return {
    props: {
      posts
    },
  };
}
