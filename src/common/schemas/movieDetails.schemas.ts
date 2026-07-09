import {z} from 'zod';

export const BelongsToCollectionSchema = z.object({
    id: z.number(),
    name: z.string(),
    poster_path: z.string().nullable(),
    backdrop_path: z.string().nullable(),
});

export const GenreSchema = z.object({
    id: z.number(),
    name: z.string(),
});

export const ProductionCompanySchema = z.object({
    id: z.number(),
    logo_path: z.string().nullable(),
    name: z.string(),
    origin_country: z.string(),
});

export const ProductionCountrySchema = z.object({
    iso_3166_1: z.string(),
    name: z.string(),
});

export const SpokenLanguageSchema = z.object({
    english_name: z.string(),
    iso_639_1: z.string(),
    name: z.string(),
});

export const MovieDetailsSchema = z.object({
    adult: z.boolean(),
    backdrop_path: z.string(),
    belongs_to_collection: BelongsToCollectionSchema.nullable(),
    budget: z.number(),
    genres: z.array(GenreSchema),
    homepage: z.string(),
    id: z.number(),
    imdb_id: z.string(),
    origin_country: z.array(z.string()),
    original_language: z.string(),
    original_title: z.string(),
    overview: z.string(),
    popularity: z.number(),
    poster_path: z.string(),
    production_companies: z.array(ProductionCompanySchema),
    production_countries: z.array(ProductionCountrySchema),
    release_date: z.string(),
    revenue: z.number(),
    runtime: z.number(),
    softcore: z.boolean().optional(),
    spoken_languages: z.array(SpokenLanguageSchema),
    status: z.string(),
    tagline: z.string(),
    title: z.string(),
    video: z.boolean(),
    vote_average: z.number(),
    vote_count: z.number(),
});

export const GenreResponseSchema = z.object({
    genres: z.array(GenreSchema),
});

export type BelongsToCollection = z.infer<typeof BelongsToCollectionSchema>;
export type Genre = z.infer<typeof GenreSchema>;
export type GenreResponse = z.infer<typeof GenreResponseSchema>;
export type ProductionCompany = z.infer<typeof ProductionCompanySchema>;
export type ProductionCountry = z.infer<typeof ProductionCountrySchema>;
export type SpokenLanguage = z.infer<typeof SpokenLanguageSchema>;
export type MovieDetails = z.infer<typeof MovieDetailsSchema>;