import {PATH} from "@/common/constants";
import {CategoryPage} from "@/pages/CategoryMovies/CategoryMovies";
import {FavoritesPage} from "@/pages/FavoritesPage/FavoritesPage";
import {FilteredPage} from "@/pages/FilteredPage/FilteredPage";
import {MainPage} from "@/pages/MainPage/MainPage";
import {MovieDetailsPage} from "@/pages/MovieDetailsPage/MovieDetailsPage";
import {PageNotFound} from "@/pages/PageNotFound/PageNotFound";
import {SearchPage} from "@/pages/SearchPage/SearchPage";
import {Route, Routes} from "react-router";

export const Routing = () => (
    <Routes>
        <Route path={PATH.Main} element={<MainPage/>}/>
        <Route path={PATH.Movies} element={<CategoryPage/>}/>
        <Route path={PATH.Filtered} element={<FilteredPage/>}/>
        <Route path={PATH.Search} element={<SearchPage/>}/>
        <Route path={PATH.Favorites} element={<FavoritesPage/>}/>
        <Route path={PATH.NotFound} element={<PageNotFound/>}/>
        <Route path={PATH.Movie} element={<MovieDetailsPage/>}/>
    </Routes>
)