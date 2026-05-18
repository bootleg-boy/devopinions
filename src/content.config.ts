import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each collection has its own schema. If a post is missing 'title' or 'date',
// the build fails — you'll never accidentally ship a half-formed post.

const blog = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string().max(70, 'Keep title under 70 chars for Google'),
    description: z.string().min(50).max(160, 'Meta description should be 50–160 chars'),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
    // Optional: hero image for OG cards (1200x630 is the standard)
    image: z.string().optional(),
    imageAlt: z.string().optional(),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/notes' }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().min(20).max(160),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    // Notes are framed as rough — no draft toggle needed; if it's in the folder, it's published
    topic: z.string().optional(), // e.g. 'azure', 'angular', 'mongodb'
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string().max(70),
    description: z.string().min(50).max(160),
    date: z.coerce.date(),
    stack: z.array(z.string()).default([]),
    impact: z.string().optional(), // e.g. "97% load time reduction"
    repo: z.string().url().optional(),
    live: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});

export const collections = { blog, notes, projects };
