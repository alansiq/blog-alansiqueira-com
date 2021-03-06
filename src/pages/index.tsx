import { BlogPostService } from "../services/BlogPostService";
import Hero from "../components/Hero";
import BlogHome from "../components/BlogHome";
import { BlogHomeModel } from "../models/BlogHomeModel";
import { Stack } from "@mui/material";

const Home: React.FC<BlogHomeModel> = ({ posts, firstPost }) => {
  return (
    <Stack spacing={4}>
      <Hero />
      <BlogHome firstPost={firstPost} posts={posts} />
    </Stack>
  );
};

export default Home;

export const getStaticProps = async () => {
  const blogPostService = new BlogPostService();

  const posts = blogPostService.getAllPosts();
  const firstPost = await blogPostService.getSinglePost(posts[0].slug);
  posts.shift();

  return {
    props: {
      posts,
      firstPost,
    },
  };
};
