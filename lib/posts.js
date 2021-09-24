import { client } from './apollo';

import {
  QUERY_ALL_POSTS,
  QUERY_POST_BY_SLUG,
  QUERY_POSTS_BY_AUTHOR_SLUG,
  QUERY_POSTS_BY_CATEGORY_ID,
  QUERY_POST_SEO_BY_SLUG,
  QUERY_POST_PER_PAGE,
} from '../data/posts';


// export async function getAllPosts() {
//     const apolloClient = getApolloClient();
  
//     const data = await apolloClient.query({
//       query: QUERY_ALL_POSTS,
//     });
  
//     const posts = data?.data.posts.edges.map(({ node = {} }) => node);
  
//     return {
//       posts
//     };
//   }