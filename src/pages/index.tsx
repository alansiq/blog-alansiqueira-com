import { getAllPosts, getSinglePost } from "../services/BlogPostService";
import Hero from "../components/Hero";
import BlogHome from "../components/BlogHome";
import { BlogHomeModel } from "../models/BlogHomeModel";

const Home: React.FC<BlogHomeModel> = ({ posts, firstPost }) => {
  return (
    <>
      <Hero />
      <BlogHome firstPost={firstPost} posts={posts} />
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const posts = getAllPosts();
  const firstPost = await getSinglePost(posts[0].slug);

  return {
    props: {
      posts,
      firstPost,
    },
  };
};
