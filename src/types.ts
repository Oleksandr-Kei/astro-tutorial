export type PostFrontmatter = {
  title: string,
  author: string,
  description: string,
  image: {
    url: string,
    alt: string,
  },
  pubDate: string,
  tags: string[],
  layout: string,
};

export type Post = {
  url: string,
  frontmatter: PostFrontmatter,
};