import { z } from 'zod';

export const SortBySchema = z.enum([
    'popularity.desc',
    'popularity.asc',
    'vote_average.desc',
    'vote_average.asc',
    'release_date.desc',
    'release_date.asc',
    'title.desc',
    'title.asc',
]);

export const MovieFilterParamsSchema = z.object({
    page: z.number().min(1).default(1),
    sort_by: SortBySchema.default('popularity.desc'),
    'vote_average.gte': z.number().min(0).max(10).default(0),
    'vote_average.lte': z.number().min(0).max(10).default(10),
    with_genres: z.string().optional(),
});

export type SortBy = z.infer<typeof SortBySchema>;
export type MovieFilterParams = z.infer<typeof MovieFilterParamsSchema>;