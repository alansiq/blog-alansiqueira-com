import React, { useEffect } from "react";
import Link from "next/link";
import { getMDXComponent } from "mdx-bundler/client";
import { BlogPostService } from "../../services/BlogPostService";
import Prism from "prismjs";
import "dracula-prism/dist/css/dracula-prism.min.css";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-cshtml";
import "prismjs/components/prism-java";
import BlogPostLayout from "../../layouts/BlogLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import Breadcrumbs from "nextjs-breadcrumbs";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const BreadCrumbContainer = styled.div`
  ol {
    color: #aaa;
    display: flex;
    gap: 8px;
    white-space: pre;

    li {
      &:hover {
        text-decoration: underline;
      }

      &:last-child {
        text-decoration: underline;
      }
    }
  }
`;

//@ts-ignore
const CustomLink = ({ as, href, ...otherProps }) => {
  return (
    <Link as={as} href={href}>
      <a {...otherProps} className="custom-link" />
    </Link>
  );
};

//@ts-ignore
const Post: React.FC = ({ code, frontmatter }) => {
  const router = useRouter();
  // const splitPath = asPath.split("/");

  // console.log(splitPath);
  console.log(router);
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);

  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <BlogPostLayout
      headTitle={frontmatter.headTitle}
      dataPublicado={frontmatter.dataPublicado}
      tags={frontmatter.tags}
      coverUrl={frontmatter.coverUrl}
      author={frontmatter.author}
    >
      {frontmatter.coverUrl && (
        <Box
          sx={{
            position: "relative",
            width: "100%",
          }}
        >
          <Image
            src={frontmatter.coverUrl}
            width={1470}
            height={980}
            layout="responsive"
            alt={frontmatter.headTitle}
          />
        </Box>
      )}

      <BreadCrumbContainer>
        <Breadcrumbs transformLabel={(l) => `${l}/`} rootLabel="home" />
      </BreadCrumbContainer>
      <Component
        components={{
          //@ts-ignore
          a: CustomLink,
        }}
      />
    </BlogPostLayout>
  );
};

export default Post;

const blogPostService = new BlogPostService();

//@ts-ignore
export const getStaticProps = async ({ params }) => {
  const post = await blogPostService.getSinglePost(params.slug);
  return {
    props: { ...post },
  };
};

export const getStaticPaths = async () => {
  const paths = blogPostService
    .getAllPosts()
    .map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};
