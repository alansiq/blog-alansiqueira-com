import React, { useEffect } from "react";
import Link from "next/link";
import { getMDXComponent } from "mdx-bundler/client";
import { getAllPosts, getSinglePost } from "../../services/BlogPostService";
import Prism from "prismjs";
import "prismjs/themes/prism.css";
import { useRouter } from "next/router";

//@ts-ignore
const CustomLink = ({ as, href, ...otherProps }) => {
  return (
    <Link as={as} href={href}>
      <a {...otherProps} className="custom-link" />
    </Link>
  );
};

//@ts-ignore
const Post = ({ code, frontmatter }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      Prism.highlightAll();
    }
  }, []);
  const Component = React.useMemo(() => getMDXComponent(code), [code]);
  return (
    <div className="wrapper">
      <h1>{frontmatter.title}</h1>
      <Component
        components={{
          //@ts-ignore
          a: CustomLink,
        }}
      />
    </div>
  );
};

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

export default Post;
