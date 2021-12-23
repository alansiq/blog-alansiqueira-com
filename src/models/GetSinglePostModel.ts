export interface GetSinglePostModel {
  frontmatter: {
    [key: string]: any;
  };
  code?: string;
  slug?: string;
}
