import fs from "fs";
import path from "path";
import { bundleMDX } from "mdx-bundler";
import matter from "gray-matter";

export class BlogPostService {
  private POSTS_PATH = path.join(process.cwd(), "src/data/posts");
  public getSourceOfFile(fileName: string) {
    return fs.readFileSync(path.join(this.POSTS_PATH, fileName));
  }

  public getAllPosts() {
    return fs
      .readdirSync(this.POSTS_PATH)
      .filter((path) => /\.mdx?$/.test(path))
      .map((fileName) => {
        const source = this.getSourceOfFile(fileName);
        const slug = fileName.replace(/\.mdx?$/, "");
        const { data } = matter(source);

        return {
          frontmatter: data,
          slug: slug,
        };
      });
  }

  public async getSinglePost(slug: string) {
    const source = this.getSourceOfFile(slug + ".mdx").toString();
    const { code, frontmatter } = await bundleMDX({
      source: source,
      cwd: this.POSTS_PATH,
    });

    frontmatter.slug = `blog/${slug}`;

    return {
      frontmatter,
      code,
    };
  }
}
