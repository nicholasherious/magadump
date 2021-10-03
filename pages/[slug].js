import {gql} from '@apollo/client'

import { client } from '../lib/apollo'
import Image from 'next/image'
import SinglePost from '../components/SinglePost';

export default function BlogPage({ post }) {
 
    return (
        <div>
       
        <SinglePost post={post} /> 
     
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


