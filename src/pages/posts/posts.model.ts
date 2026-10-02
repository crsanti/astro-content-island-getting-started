import type { Media } from "@content-island/api-client";

export interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  summary: string;
  author: string;
  content: string;
  image: Media;
}
