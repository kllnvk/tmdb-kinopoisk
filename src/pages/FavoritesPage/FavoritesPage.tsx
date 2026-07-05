import {selectFavorites} from "@/app/model/app-slice";
import {MovieCard} from "@/features/movies/ui/movieCard/MovieCard";
import {useSelector} from "react-redux";
import s from "./FavoritePage.module.css"

export const FavoritesPage = () => {
    const favorites = useSelector(selectFavorites);

    const hasFavorites = favorites.length > 0;

    return (
        <div className={s.container}>
            <div className={s.wrapper}>
            <section className={s.page}>
            <h1>Favorites</h1>
                {hasFavorites ? <div className={s.favorites}>
                {favorites.length === 0 ?
                    <h3>Add movies to favorites to see them on this page.</h3> : favorites.map(m => {
                        return (
                            <MovieCard key={m.id} movieId={m.id} title={m.title} voteAverage={m.voteAverage}
                                       posterUrl={m.posterUrl}/>
                        )
                    })}
            </div> : <p>Add movies to favorites to see them on this page.</p>}
            </section>
            </div>
        </div>
    )
}