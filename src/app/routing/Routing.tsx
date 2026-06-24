import {CategoryPage} from "@/pages/CategoryMovies/CategoryMovies";
import {FavoritesPage} from "@/pages/FavoritesPage/FavoritesPage";
import {FilteredPage} from "@/pages/FilteredMovies/FilteredMovies";
import {MainPage} from "@/pages/MainPage/MainPage";
import {PageNotFound} from "@/pages/PageNotFound/PageNotFound";
import {SearchPage} from "@/pages/SearchPage/SearchPage";
import {Route, Routes} from "react-router";

export const Path = {
    Main: '/',
    Movies: '/movies',
    Filtered: '/filtered-movies',
    Search: '/search',
    Favorites: '/favorites',
    NotFound: '*',
} as const

export const Routing = () => (
    <Routes>
        <Route path={Path.Main} element={<MainPage />} />
        <Route path={Path.Movies} element={<CategoryPage />} />
        <Route path={Path.Filtered} element={<FilteredPage />} />
        <Route path={Path.Search} element={<SearchPage />} />
        <Route path={Path.Favorites} element={<FavoritesPage />} />
        <Route path={Path.NotFound} element={<PageNotFound />} />
    </Routes>
)