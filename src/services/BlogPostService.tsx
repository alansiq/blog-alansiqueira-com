import fs from "fs";
import path from "path";
import { bundleMDX } from "mdx-bundler";
import matter from "gray-matter";

export const POSTS_PATH = path.join(process.cwd(), "src/data/posts");

export const getSourceOfFile = (fileName: string) => {
  return fs.readFileSync(path.join(POSTS_PATH, fileName));
};

export const getAllPosts = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const source = getSourceOfFile(fileName);
      const slug = fileName.replace(/\.mdx?$/, "");
      const { data } = matter(source);

      return {
        frontmatter: data,
        slug: slug,
      };
    });
};

export const getSinglePost = async (slug: string) => {
  const source = getSourceOfFile(slug + ".mdx").toString();
  console.log(source);
  const { code, frontmatter } = await bundleMDX({
    source: source,
    cwd: POSTS_PATH,
  });

  return {
    frontmatter,
    code,
  };
};
