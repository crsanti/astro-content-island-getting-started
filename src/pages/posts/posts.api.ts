import { demoClient } from "../../lib/client";
import type { Post } from "./posts.model";

export const getPosts = async (): Promise<Post[]> =>
  await demoClient.getContentList<Post>({
    contentType: "Post",
  });
