import { Container } from "@mui/material";
import { BlogLayoutModel } from "../models/BlogLayoutModel";
import Head from "next/head";
import styled from "@emotion/styled";

const BlogMain = styled.main`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: #fff;
  }

  h1,
  h2 {
    margin: 48px 0 16px 0;
  }

  h1 {
    font-size: 2.4em;
  }

  h2 {
    font-size: 1.8em;
  }

  h3 {
    font-size: 1.6em;
    margin: 16px 0 8px 0;
  }

  p {
    color: #c8c8c8;
    font-size: 1.3em;
    font-weight: 200;
    margin: 16px 0;
    line-height: calc(1.2em * 1.12);
    letter-spacing: 0.035em;
  }

  a {
    text-decoration: underline;
    color: #369daf;
  }
`;

const BlogLayout: React.FC<BlogLayoutModel> = (props) => {
  return (
    <>
      <Head>
        <title>{props.headTitle}</title>
        <meta name="author" content={props.author} />
        <meta name="keywords" content={props.tags} />
      </Head>
      <Container
        maxWidth="md"
        sx={{
          paddingLeft: 0,
          paddingRight: 0,
        }}
      >
        <BlogMain>{props.children}</BlogMain>
      </Container>
    </>
  );
};

export default BlogLayout;
