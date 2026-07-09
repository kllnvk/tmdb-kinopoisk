import type {Movie} from "@/app/model/app-slice";
import {FAVORITES_KEY} from "@/common/constants";
import type {MoviesResponse, MoviesResponseWithFavorite} from "@/common/schemas";

export const transformMovieResponse = (response: MoviesResponse) : MoviesResponseWithFavorite => {
    const favorites: Movie[] = JSON.parse(localStorage.getItem(FAVORITES_KEY) || '[]')
    return {
        ...response,
        results: response.results.map((movie) => ({
            ...movie,
            isFavorite: favorites.map(m => m.id).includes(movie.id),
        })),
    }
}