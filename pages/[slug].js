import {gql} from '@apollo/client'
import Footer from '../components/Footer';
import Header from '../components/Header';
import {getApolloClient} from '../lib/apollo-client'

export default function BlogPage( { post }) {
 
    return (
        <div>
          <Header />
        <p>{post.title}</p>
        <Footer />
        </div>
    )
}

export async function getStaticPaths() {
const apolloClient = getApolloClient();
const result = await apolloClient.query({
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
    const apolloClient = getApolloClient();
const result = await apolloClient.query({
    query: gql`
    query MyQuery($slug: String!) {
        postBy(slug: $slug) {
          content
          title
        }
      }
    `,
    variables: {slug}
})

return {
    props: {
        post: result.data.postBy
    }
}
    
}


