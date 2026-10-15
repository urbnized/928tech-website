import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  // Use the Astro v6 glob loader pointing to the src/content/blog folder
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    author: z.string(),
    image: z.string().optional(),
    tags: z.array(z.string()),
    readingTime: z.string(),
    featured: z.boolean().default(false)
  })
});

export const collections = {
  blog: blogCollection
};
