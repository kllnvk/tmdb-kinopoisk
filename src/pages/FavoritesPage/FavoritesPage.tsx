import {selectFavorites} from "@/app/model/app-slice";
import {MovieCard} from "@/features/movies/ui/movieCard/MovieCard";
import {useSelector} from "react-redux";
import s from "./FavoritePage.module.css"

export const FavoritesPage = () => {
    const favorites = useSelector(selectFavorites);


    return (
        <div>
            <h1>Favorites</h1>
            <div className={s.favorites}>
                {favorites.length === 0 ?
                    <h3>Add movies to favorites to see them on this page.</h3> : favorites.map(m => {
                        return (
                            <MovieCard key={m.id} movieId={m.id} title={m.title} voteAverage={m.voteAverage}
                                       posterUrl={m.posterUrl}/>
                        )
                    })}
            </div>
        </div>
    )
}