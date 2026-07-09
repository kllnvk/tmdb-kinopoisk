import {baseApi} from "@/app/api/baseApi";
import {type MoviesResponseWithFavorite, MoviesResponseWithFavoriteSchema} from "@/common/schemas";
import {transformMovieResponse} from "@/common/utils";
import {toast} from "react-toastify";


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
            responseSchema: MoviesResponseWithFavoriteSchema,
            catchSchemaFailure: err => {
                toast.error('Zod error. Details in the console')
                return {status: 'CUSTOM_ERROR', error: 'Schema validation failed', data: err.issues}
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