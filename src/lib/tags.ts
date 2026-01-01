import { getCollection } from "astro:content";

export async function getAllTags(): Promise<string[]> {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const tagsSet = new Set<string>();

  posts.forEach((post) => {
    post.data.tags.forEach((tag) => tagsSet.add(tag));
  });

  return Array.from(tagsSet).sort((a, b) =>
    a.toLowerCase().localeCompare(b.toLowerCase())
  );
}

export async function getPostsByTag(tag: string) {
  const posts = await getCollection("blog", ({ data }) => !data.draft);

  return posts
    .filter((post) =>
      post.data.tags.some((t) => t.toLowerCase() === tag.toLowerCase())
    )
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export async function getTagsWithCount(): Promise<Map<string, number>> {
  const posts = await getCollection("blog", ({ data }) => !data.draft);
  const tagCount = new Map<string, number>();

  posts.forEach((post) => {
    post.data.tags.forEach((tag) => {
      tagCount.set(tag, (tagCount.get(tag) || 0) + 1);
    });
  });

  return tagCount;
}
