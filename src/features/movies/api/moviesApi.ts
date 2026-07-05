import {baseApi} from "@/app/api/baseApi";
import {transformMovieResponse} from "@/common/utils";
import type {Category, MoviesResponseWithFavorite} from "@/features/movies/api/moviesApi.types";

export const moviesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMoviesByCategory: build.query<MoviesResponseWithFavorite, { category: Category; params: { page: number } }>({
            query: ({category, params}) => {
                return {url: `movie/${category}`, params}
            },
            transformResponse: transformMovieResponse,
        }),
    }),
});

export const {
    useGetMoviesByCategoryQuery,
} = moviesApi