import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/* ---------------------------------------------------------------------------
   This file defines what fields a case study is allowed to have.
   If you add a field to a case study that isn't listed here, the build fails
   with a clear message — that's a feature, it stops typos from shipping.
   --------------------------------------------------------------------------- */

const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: ({ image }) =>
    z.object({
      /* REQUIRED */
      title: z.string(),
      summary: z.string(),          // 1–2 sentences, shows on the work index
      year: z.number(),
      role: z.string(),             // e.g. "Product Design, Research"

      /* OPTIONAL */
      client: z.string().optional(),
      discipline: z.array(z.string()).default([]),  // used for filtering later
      cover: image().optional(),
      coverAlt: z.string().optional(),
      /* Card image for the work index. A path under /public, e.g.
         "/images/hinge/outcomes.webp". Use this rather than `cover` when the
         image is a shared asset instead of a file sitting next to the .mdx. */
      card: z.string().optional(),
      cardAlt: z.string().optional(),
      featured: z.boolean().default(false),
      order: z.number().default(999),               // lower = earlier in the list
      draft: z.boolean().default(false),            // true = never published
      externalUrl: z.string().url().optional(),     // link out instead of a case study
    }),
});

export const collections = { work };
