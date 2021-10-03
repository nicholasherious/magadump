import Axios from "axios";
import { useRouter } from "next/router";
import SinglePost from "../components/SinglePost";

// router is required for fallback: true
const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <SinglePost postSingle={post}/>
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