import {baseApi} from "@/app/api/baseApi";
import {transformMovieResponse} from "@/common/utils";
import type {
    Category,
    MovieCreditsResponse,
    MovieDetailsResponse,
    MoviesResponseWithFavorite
} from "@/features/movies/api/moviesApi.types";

export const moviesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMoviesByCategory: build.query<MoviesResponseWithFavorite, { category: Category; params: { page: number } }>({
            query: ({category, params}) => {
                return {url: `movie/${category}`, params}
            },
            transformResponse: transformMovieResponse,
        }),
        getMovieDetails: build.query<MovieDetailsResponse, { movieId: number }>({
            query: ({movieId}) => {
                return {url: `movie/${movieId}`}
            },
        }),
        getMovieCredits: build.query<MovieCreditsResponse, { movieId: number }>({
            query: ({movieId}) => {
                return {url: `movie/${movieId}/credits`}
            },
        }),
        getSimilarMovies: build.query<MoviesResponseWithFavorite, { movieId: number; params: { page: number } }>({
            query: ({movieId, params}) => {
                return {url: `movie/${movieId}/similar`, params}
            },
            transformResponse: transformMovieResponse,
        }),
    }),
});

export const {
    useGetMoviesByCategoryQuery,
    useGetMovieDetailsQuery, useGetMovieCreditsQuery, useGetSimilarMoviesQuery,
} = moviesApi