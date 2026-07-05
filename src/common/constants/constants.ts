export const THEME_KEY = 'theme' as const
export const FAVORITES_KEY = "Favorites" as const

export const BACKDROP_PATH = "https://image.tmdb.org/t/p/original/"
export const POSTER_PATH = "https://image.tmdb.org/t/p/w185"

export const PATH = {
    Main: '/',
    Movies: '/movies/:category',
    Filtered: '/filtered-movies',
    Search: '/search',
    Favorites: '/favorites',
    NotFound: '*',
} as const

export const navItems = [
    {to: PATH.Main, label: 'Main'},
    {to: "movies/popular", label: 'Category Movies'},
    {to: PATH.Filtered, label: 'Filtered Movies'},
    {to: PATH.Search, label: 'Search'},
    {to: PATH.Favorites, label: 'Favorites'},
] as const

export const categories = [
    {path: '/movies/popular', label: 'Popular movies'},
    {path: '/movies/top_rated', label: 'Top Rated movies'},
    {path: '/movies/upcoming', label: 'Upcoming movies'},
    {path: '/movies/now_playing', label: 'Now Playing movies'},
] as const

export const POSTER_NULL = "https://placehold.co/185x285?text=No%20poster&font=roboto"

