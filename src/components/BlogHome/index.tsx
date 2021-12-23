import styled from "@emotion/styled";
import { getAllPosts } from "../../services/BlogPostService";
import { GetAllPostsModel } from "../../models/GetAllPostsModel";

import PostHighlighted from "../../components/PostHighlighted";
import PostDefault from "../../components/PostDefault";

import Link from "next/link";
import Button from "@mui/material/Button";
import { BlogHomeModel } from "../../models/BlogHomeModel";

const BlogContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 24px;
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
      <BlogContainer>
        <BlogColumn>
          <h4>Highlighted Posts</h4>
          <PostHighlighted
            frontmatter={firstPost.frontmatter}
            code={firstPost.code}
          />
        </BlogColumn>
        <BlogColumn>
          {/* <ul>
            {postsArray.map((post, index) => (
              <li key={index}>
                <Link passHref href={`/blog/${post.slug}`}>
                  <Button variant="contained">{post.frontmatter.title}</Button>
                </Link>
              </li>
            ))}
          </ul> */}
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
