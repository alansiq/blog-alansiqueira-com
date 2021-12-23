export interface BlogPostModel {
  frontmatter: {
    [key: string]: any;
  };
  slug: string;
}
