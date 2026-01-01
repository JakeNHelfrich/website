import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Jake's Blog",
  EMAIL: "you@example.com", // TODO: Replace with your email
  NUM_POSTS_ON_HOMEPAGE: 5,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Jake's blog about building products that scale through technology and people.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of articles on topics I am passionate about.",
};

export const TAGS: Metadata = {
  TITLE: "Tags",
  DESCRIPTION: "Browse posts by topic.",
};

export const SOCIALS: Socials = [
  // TODO: Update with your social links
  {
    NAME: "github",
    HREF: "https://github.com/username"
  },
  {
    NAME: "twitter-x",
    HREF: "https://twitter.com/username",
  },
];
