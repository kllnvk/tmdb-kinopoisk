import { z } from 'zod';
import { MovieSchema, MoviesResponseSchema } from './movie.schemas';

export const MovieWithFavoriteSchema = MovieSchema.extend({
    isFavorite: z.boolean(),
});

export const MoviesResponseWithFavoriteSchema = MoviesResponseSchema.extend({
    results: z.array(MovieWithFavoriteSchema),
});

export type MovieWithFavorite = z.infer<typeof MovieWithFavoriteSchema>;
export type MoviesResponseWithFavorite = z.infer<typeof MoviesResponseWithFavoriteSchema>;