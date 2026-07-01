import type {MovieWithFavorite} from "@/features/movies/api/moviesApi.types";
import {MovieCard} from "@/features/movies/ui/movieCard/MovieCard";
import s from "./MovieRow.module.css"

type Props = {
    title: string,
    movies: MovieWithFavorite[] | undefined
}
export const MovieRow = ({movies, title}: Props) => {
    return (
        <section>
            <div className={s.header}>
                <h2>{title}</h2>
                <button className={s.button}>View more</button>
            </div>
            <div className={s.cardRow}>
                {movies?.slice(0,6).map((movie) => (
                    <MovieCard key={movie.id} movieId={movie.id} posterUrl={movie.poster_path} title={movie.title} voteAverage={movie.vote_average} />
                ))}
            </div>
        </section>
    )
}