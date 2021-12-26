import { Container } from "@mui/material";
import { BlogLayoutModel } from "../models/BlogLayoutModel";
import Head from "next/head";
import styled from "@emotion/styled";

const BlogMain = styled.main`
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
    margin: 32px 0;
  }

  p {
    color: #c8c8c8;
    font-size: 1.4em;
    font-weight: 200;
    margin: 16px 0;
    line-height: calc(1.2em * 1.12);
    letter-spacing: 0.035em;
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
      <Container maxWidth="md">
        <BlogMain>{props.children}</BlogMain>
      </Container>
    </>
  );
};

export default BlogLayout;
