import styled from "@emotion/styled";

import PostHighlighted from "../../components/PostHighlighted";
import PostDefault from "../../components/PostDefault";

import Link from "next/link";
import Button from "@mui/material/Button";
import { BlogHomeModel } from "../../models/BlogHomeModel";
import { Stack } from "@mui/material";

const BlogContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 24px;
  @media (max-width: 1128px) {
    flex-wrap: wrap;
  }
`;

const BlogColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 32px;
`;

const BlogHome: React.FC<BlogHomeModel> = ({ posts, firstPost }) => {
  return (
    <>
      {/* <h4>Highlighted Post</h4> */}

      <BlogContainer>
        <BlogColumn>
          <PostHighlighted
            frontmatter={firstPost.frontmatter}
            code={firstPost.code}
          />
        </BlogColumn>
        <BlogColumn>
          <Stack spacing={2}>
            {posts.map((post, index) => (
              <PostDefault
                key={index}
                frontmatter={post.frontmatter}
                slug={post.slug}
              />
            ))}
          </Stack>
        </BlogColumn>
      </BlogContainer>
    </>
  );
};

export default BlogHome;

// {
//   posts.map((post, index) => (
//     <li key={index}>
//       <Link passHref href={`/blog/${post.slug}`}>
//         <Button variant="contained">{post.frontmatter.title}</Button>
//       </Link>
//     </li>
//   ));
// }
