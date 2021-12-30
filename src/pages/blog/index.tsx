import { BlogPostService } from "../../services/BlogPostService";
import { BlogHomeModel } from "../../models/BlogHomeModel";
import PostDefault from "../../components/PostDefault";
import { Container, Stack, Typography } from "@mui/material";

const Blog: React.FC<BlogHomeModel> = ({ posts }) => {
  return (
    <Stack spacing={4} alignItems="center">
      <Typography variant="h2">Welcome to my blog page</Typography>
      <Container maxWidth="sm">
        {posts.map((p, i) => (
          <PostDefault key={i} frontmatter={p.frontmatter} slug={p.slug} />
        ))}
      </Container>
    </Stack>
  );
};

export default Blog;

export const getStaticProps = async () => {
  const blogPostService = new BlogPostService();
  const posts = blogPostService.getAllPosts();

  return {
    props: {
      posts,
    },
  };
};
