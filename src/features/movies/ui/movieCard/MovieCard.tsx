import {selectFavorites, toggleFavoriteAC} from "@/app/model/app-slice";
import {FavoriteButton} from "@/common/components";
import {POSTER_NULL, POSTER_PATH} from "@/common/constants";
import {useMemo} from "react";
import {useDispatch, useSelector} from "react-redux";
import s from "./MovieCard.module.css"

type Props = {
    movieId: number,
    posterUrl: string | null,
    title: string,
    voteAverage: number,
}

export const MovieCard = ({movieId, posterUrl, title, voteAverage}: Props) => {
    const dispatch = useDispatch();
    const favorites = useSelector(selectFavorites);

    const isFavorite = useMemo(() => {
        return favorites.some(movie => movie.id === movieId);
    }, [favorites, movieId]);

    const getRatingClass = (rating: number) => {
        if (rating < 5) return s.ratingLow;
        if (rating < 7) return s.ratingMedium;
        return s.ratingHigh;
    }

    const toggleFavorite = () => {
        dispatch(toggleFavoriteAC({
            movie: {
                id: movieId,
                posterUrl: posterUrl,
                title: title,
                voteAverage: voteAverage,
            }
        }));
    }

    return (
        <article className={s.card}>
            <div className={s.posterFrame}>
                <a href={`/movie/${movieId}`}>
                    <img className={s.posterImage} src={posterUrl ? `${POSTER_PATH}${posterUrl}` : POSTER_NULL} alt={title}/>
                    <span className={`${s.rating} ${getRatingClass(voteAverage)}`}>{(voteAverage).toFixed(1)}</span>
                </a>
                <FavoriteButton isFavorite={isFavorite} onToggle={toggleFavorite} className={s.favoriteButton}/>
            </div>
            <a className={s.posterLink}>
                {title}
            </a>
        </article>
    )
}