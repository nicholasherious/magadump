import {gql} from '@apollo/client'
import Footer from '../components/Footer';
import Header from '../components/Header';
import { client } from '../lib/apollo'
import Image from 'next/image'

export default function BlogPage( { post }) {
 
    return (
        <div>
          <Header />
          <h1>{post.title}</h1>
        <Image src={post.featuredImage.node.sourceUrl} width={300} height={80} />
        
        <div dangerouslySetInnerHTML={{__html: post.content}} />
        <Footer />
        </div>
    )
}

export async function getStaticPaths() {
const result = await client.query({
    query: gql`
    query MyQuery {
        posts {
          nodes {
            slug
          }
        }
      }
    `
})


console.log(result)
return {
    paths: result.data.posts.nodes.map(({ slug }) => {
       return {
           params: {slug},
           
       } 
    }),
    fallback: false
}
}

export async function getStaticProps({ params }) {
    const { slug } = params
    
const result = await client.query({
    query: gql`
    query PostBySlug($slug: String!) {
        postBy(slug: $slug) {
            author {
              node {
                username
              }
            }
            content
            date
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            title
          }
    }`,
    variables: {
        slug
    }
})

return {
    props: {
        post: result.data.postBy 
    }
}
    
}


