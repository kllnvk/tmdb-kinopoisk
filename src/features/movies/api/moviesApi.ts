import {baseApi} from "@/app/api/baseApi";
import {type Movie} from "@/app/model/app-slice";
import {FAVORITES_KEY} from "@/common/constants";
import type {Category, MoviesResponse, MoviesResponseWithFavorite} from "@/features/movies/api/moviesApi.types";

export const moviesApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMoviesByCategory: build.query<MoviesResponseWithFavorite, { category: Category; params: { page: number } }>({
            query: ({category, params}) => {
                return {url: `${category}`, params: {page: params.page}}
            },
            transformResponse: (response: MoviesResponse) => {
                const favorites: Movie[] = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]')
                return {
                    ...response,
                    results: response.results.map((movie) => ({
                        ...movie,
                        isFavorite: favorites.map(m => m.id).includes(movie.id),
                    })),
                }
            },
        }),
    }),
});

export const {
    useGetMoviesByCategoryQuery,
} = moviesApi