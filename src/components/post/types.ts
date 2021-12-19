import type { ImageDataLike } from "gatsby-plugin-image";

export interface PostProps {
  title: string;
  image: ImageDataLike;
  excerpt: string;
  link: string;
}
