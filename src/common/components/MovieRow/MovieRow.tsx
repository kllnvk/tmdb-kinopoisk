import type {MovieWithFavorite} from "@/features/movies/api/moviesApi.types";
import {MovieCard} from "@/features/movies/ui/movieCard/MovieCard";
import {useNavigate} from "react-router";
import s from "./MovieRow.module.css"

type Props = {
    title: "Popular Movies" | "Top Rated Movies" | "Upcoming Movies" | "Now Playing Movies",
    movies: MovieWithFavorite[] | undefined
}
export const MovieRow = ({movies, title}: Props) => {
    const navigate = useNavigate();

    const titleToPath: Record<Props["title"], string> = {
        "Popular Movies": "/movies/popular",
        "Top Rated Movies": "/movies/top_rated",
        "Upcoming Movies": "/movies/upcoming",
        "Now Playing Movies": "/movies/now_playing",
    };

    const onClickHandler= () => {
        navigate(titleToPath[title]);
    }

    return (
        <section>
            <div className={s.header}>
                <h2>{title}</h2>
                <button className={s.button} onClick={onClickHandler}>View more</button>
            </div>
            <div className={s.cardRow}>
                {movies?.slice(0, 6).map((movie) => (
                    <MovieCard key={movie.id} movieId={movie.id} posterUrl={movie.poster_path} title={movie.title}
                               voteAverage={movie.vote_average}/>
                ))}
            </div>
        </section>
    )
}