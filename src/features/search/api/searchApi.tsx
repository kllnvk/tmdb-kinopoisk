import {baseApi} from "@/app/api/baseApi";
import {transformMovieResponse} from "@/common/utils";
import type {MoviesResponseWithFavorite} from "@/features/movies/api/moviesApi.types";


export const searchApi = baseApi.injectEndpoints({
    endpoints: (build) => ({
        getMoviesBySearch: build.query<MoviesResponseWithFavorite, { query: string; page: number }>({
            query: ({query, page}) => {
                return {
                    url: "search/movie", params: {
                        query, page
                    }
                }
            },
            transformResponse: transformMovieResponse,
            keepUnusedDataFor: 60,
        }),
    }),
});

export const {
    useGetMoviesBySearchQuery,
    useLazyGetMoviesBySearchQuery
} = searchApi