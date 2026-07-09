import {z} from 'zod'

export const MovieSchema = z.object({
    adult: z.boolean(),
    backdrop_path: z.string().nullable(),
    genre_ids: z.array(z.number()),
    id: z.number(),
    title: z.string(),
    original_language: z.string(),
    original_title: z.string(),
    overview: z.string(),
    popularity: z.number(),
    poster_path: z.string().nullable(),
    release_date: z.string(),
    softcore: z.boolean().optional(),
    video: z.boolean(),
    vote_average: z.number(),
    vote_count: z.number(),
});

export const MovieDatesSchema = z.object({
    maximum: z.string(),
    minimum: z.string(),
});

export const MoviesResponseSchema = z.object({
    dates: MovieDatesSchema.optional(),
    page: z.number(),
    results: z.array(MovieSchema),
    total_pages: z.number(),
    total_results: z.number(),
});

export const CategorySchema = z.enum(['popular', 'now_playing', 'top_rated', 'upcoming']);

export type Movie = z.infer<typeof MovieSchema>;
export type MovieDates = z.infer<typeof MovieDatesSchema>;
export type MoviesResponse = z.infer<typeof MoviesResponseSchema>;
export type Category = z.infer<typeof CategorySchema>;