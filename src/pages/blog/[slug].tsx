import React, { useEffect } from "react";
import Link from "next/link";
import { getMDXComponent } from "mdx-bundler/client";
import { getAllPosts, getSinglePost } from "../../services/BlogPostService";
import Prism from "prismjs";
import "dracula-prism/dist/css/dracula-prism.min.css";
import BlogPostLayout from "../../layouts/BlogLayout";
import Image from "next/image";

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
    <BlogPostLayout
      headTitle={frontmatter.headTitle}
      dataPublicado={frontmatter.dataPublicado}
      tags={frontmatter.tags}
      coverUrl={frontmatter.coverUrl}
      author={frontmatter.author}
    >
      <Image
        src={frontmatter.coverUrl}
        width={800}
        height={300}
        alt={frontmatter.headTitle}
      />
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

// ---
// title: Compreender C# e orientação a objetos
// headTitle: Compreendendo C# e orientação a objetos
// dataPublicado: 23/12/2021
// tags: javascript, react, node
// coverUrl: https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260
// author: Alan Siqueira
// firstParagraph: É fundamental ter domínio sobre a principal plataforma .NET. Isso significa, entre outras coisas, saber traduzir para o C# os problemas do dia a dia e programar de acordo com as boas práticas. Sendo assim, aqui você aprenderá desde recursos básicos da linguagem, como variáveis, controle de fluxo e laços de repetição até os principais conceitos do paradigma de orientação a objetos, como classes, herança e interfaces e como tudo isso irá te ajudar no seu dia a dia na programação.
// ---
