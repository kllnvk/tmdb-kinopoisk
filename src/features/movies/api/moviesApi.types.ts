export type MovieType = {
    adult: boolean
    backdrop_path: string
    genre_ids: [string]
    id: number
    title: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: string
    release_date: string
    softcore: boolean
    video: boolean
    vote_average: number
    vote_count: number
}

export type MovieWithFavorite = MovieType & {
    isFavorite: boolean;
};

export type MovieDates = {
    maximum: string
    minimum: string
}

export type MoviesResponse = {
    dates?: MovieDates
    page: number
    results: MovieType[]
    total_pages: number
    total_results: number
}

export type MoviesResponseWithFavorite = Omit<MoviesResponse, 'results'> & {
    results: MovieWithFavorite[];
};

export type Category = 'popular' | 'now_playing' | 'top_rated' | 'upcoming'

