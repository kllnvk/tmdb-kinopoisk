import {baseApi} from "@/app/api/baseApi";
import {
    type Category,
    type Genre,
    type GenreResponse,
    GenreResponseSchema,
    type MovieCreditsResponse,
    MovieCreditsResponseSchema,
    type MovieDetails,
    MovieDetailsSchema,
    type MovieFilterParams,
    type MoviesResponseWithFavorite,
    MoviesResponseWithFavoriteSchema,
    type SortBy
} from "@/common/schemas";
import {transformMovieResponse} from "@/common/utils";
import type {Rating} from "@/pages/FilteredPage/FilteredPage";
import {toast} from "react-toastify";

export const moviesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMoviesByCategory: build.query<MoviesResponseWithFavorite, { category: Category; params: { page: number } }>({
            query: ({category, params}) => {
                return {url: `movie/${category}`, params}
            },
            responseSchema: MoviesResponseWithFavoriteSchema,
            catchSchemaFailure: err => {
                toast.error('Zod error. Details in the console')
                return {status: 'CUSTOM_ERROR', error: 'Schema validation failed', data: err.issues}
            },
            transformResponse: transformMovieResponse,

        }),
        getMoviesByFilter: build.query<MoviesResponseWithFavorite, {
            params: { page: number; sortBy: SortBy; rating: Rating; genres: Genre[] | []; }
        }>({
            query: ({params}) => {

                const apiParams: MovieFilterParams = {
                    page: params.page,
                    sort_by: params.sortBy,
                    "vote_average.gte": params.rating.minRating,
                    "vote_average.lte": params.rating.maxRating,
                };

                if (params.genres.length > 0) {
                    apiParams.with_genres = params.genres.map(g => g.id).join(",")
                }

                return {
                    url: `discover/movie`, params: apiParams
                }
            },
            transformResponse: transformMovieResponse,
            responseSchema: MoviesResponseWithFavoriteSchema,
            catchSchemaFailure: err => {
                toast.error('Zod error. Details in the console')
                return {status: 'CUSTOM_ERROR', error: 'Schema validation failed', data: err.issues}
            },
        }),
        getMovieDetails: build.query<MovieDetails, { movieId: number }>({
            query: ({movieId}) => {
                return {url: `movie/${movieId}`}
            },
            responseSchema: MovieDetailsSchema,
            catchSchemaFailure: err => {
                toast.error('Zod error. Details in the console')
                return {status: 'CUSTOM_ERROR', error: 'Schema validation failed', data: err.issues}
            },
        }),
        getMovieCredits: build.query<MovieCreditsResponse, { movieId: number }>({
            query: ({movieId}) => {
                return {url: `movie/${movieId}/credits`}
            },
            responseSchema: MovieCreditsResponseSchema,
            catchSchemaFailure: err => {
                toast.error('Zod error. Details in the console')
                return {status: 'CUSTOM_ERROR', error: 'Schema validation failed', data: err.issues}
            },
        }),
        getSimilarMovies: build.query<MoviesResponseWithFavorite, { movieId: number; params: { page: number } }>({
            query: ({movieId, params}) => {
                return {url: `movie/${movieId}/similar`, params}
            },
            transformResponse: transformMovieResponse,
            responseSchema: MoviesResponseWithFavoriteSchema,
            catchSchemaFailure: err => {
                toast.error('Zod error. Details in the console')
                return {status: 'CUSTOM_ERROR', error: 'Schema validation failed', data: err.issues}
            },
        }),
        getMovieGenres: build.query<GenreResponse, void>({
            query: () => {
                return {url: `genre/movie/list`}
            },
            responseSchema: GenreResponseSchema,
            catchSchemaFailure: err => {
                toast.error('Zod error. Details in the console')
                return {status: 'CUSTOM_ERROR', error: 'Schema validation failed', data: err.issues}
            },
        }),
    }),
});

export const {
    useGetMoviesByCategoryQuery,
    useGetMovieDetailsQuery, useGetMovieCreditsQuery, useGetSimilarMoviesQuery,
    useGetMovieGenresQuery,
    useGetMoviesByFilterQuery
} = moviesApi