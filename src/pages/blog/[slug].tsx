import React, { useEffect } from "react";
import Link from "next/link";
import { getMDXComponent } from "mdx-bundler/client";
import { getAllPosts, getSinglePost } from "../../services/BlogPostService";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import BlogPostLayout from "../../layouts/BlogLayout";

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
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <BlogPostLayout>
      <h1>{frontmatter.title}</h1>
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

//@ts-ignore
export const getStaticProps = async ({ params }) => {
  const post = await getSinglePost(params.slug);
  return {
    props: { ...post },
  };
};

export const getStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }));
  return {
    paths,
    fallback: false,
  };
};
