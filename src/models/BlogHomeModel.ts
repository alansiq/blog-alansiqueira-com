import { BlogPostModel } from "./BlogPostModel";
import { GetSinglePostModel } from "./GetSinglePostModel";

export interface BlogHomeModel {
  posts: BlogPostModel[];
  firstPost: GetSinglePostModel;
}
