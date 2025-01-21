import { defineCollection, z } from "astro:content";

const termsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string()
  }),
});

const privacyCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    description: z.string()
  }),
});

export const collections = {
  terms: termsCollection,
  privacy: privacyCollection,
};
