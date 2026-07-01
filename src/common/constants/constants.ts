export const THEME_KEY = 'theme' as const
export const FAVORITES_KEY = "Favorites" as const

export const BACKDROP_PATH = "https://image.tmdb.org/t/p/original/"
export const POSTER_PATH = "https://image.tmdb.org/t/p/w185"

export const PATH = {
    Main: '/',
    Movies: '/movies',
    Filtered: '/filtered-movies',
    Search: '/search',
    Favorites: '/favorites',
    NotFound: '*',
} as const