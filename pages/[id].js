import Axios from "axios";
import { useRouter } from "next/router";

// router is required for fallback: true
const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Post page</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default Post;

export const getStaticProps = async ({ params }) => {
  const { data } = await Axios.get(`http://localhost:3001/posts/${params.id}`);
  const post = data;
  return {
    props: {
      post,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await Axios.get("http://localhost:3001/posts");
  const posts = data;
  const paths = posts.map((post) => ({ params: { id: post._id.toString() } }));
  return {
    paths,
    fallback: true,
  };
};