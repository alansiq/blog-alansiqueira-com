export interface BlogPostModel {
  post: {
    frontmatter: {
      [key: string]: any;
    };
    slug: string;
  };
}
