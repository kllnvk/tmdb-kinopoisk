import {ActorCard} from "@/common/components/ActorCard/ActorCard";
import {LinearProgress} from "@/common/components/LinearProgress/LinearProgress";
import {POSTER_DETAILS_PATH, POSTER_NULL} from "@/common/constants";
import {
    useGetMovieCreditsQuery,
    useGetMovieDetailsQuery,
    useGetSimilarMoviesQuery
} from "@/features/movies/api/moviesApi";
import {MovieCard} from "@/features/movies/ui/movieCard/MovieCard";
import {useNavigate, useParams} from "react-router";
import s from "./MovieDetailsPage.module.css"

export const MovieDetailsPage = () => {
    const navigate = useNavigate();
    const {id} = useParams<{ id: string }>();
    const movieId = id ? parseInt(id) : 1
    const {data: movieDetails, isLoading, isFetching} = useGetMovieDetailsQuery({movieId: movieId}, {skip: movieId <= 0});
    const {data: moviesCredits} = useGetMovieCreditsQuery({movieId: movieId}, {skip: movieId <= 0});
    const {data: similarMovies} = useGetSimilarMoviesQuery({movieId: movieId, params: {page: 1}}, {skip: movieId <= 0});

    const getRatingClass = (rating: number | undefined) => {
        if (!rating) {
            return s.rating
        }

        if (rating < 5) return s.ratingLow;
        if (rating < 7) return s.ratingMedium;
        return s.ratingHigh;
    }

    const getRunTime = (runtime: number | undefined) => {
        if (!runtime || runtime <= 0) return 'N/A';

        const hours = Math.floor(runtime / 60);
        const minutes = runtime % 60;
        if (hours === 0) {
            return `${minutes}m`;
        }
        if (minutes === 0) {
            return `${hours}h`;
        }
        return `${hours}h ${minutes}m`;
    }

    if (isLoading) {
        return (
            <div>...Loading...</div>
        )
    }

    return (
        <div className={s.container}>
            {isFetching && <LinearProgress />}
            <section className={s.page}>
                <section className={s.mainContent}>
                    <div className={s.imageContainer}>
                        <img className={s.image}
                             src={movieDetails?.poster_path ? `${POSTER_DETAILS_PATH}${movieDetails?.poster_path}` : POSTER_NULL}
                             alt={movieDetails?.title}/>
                    </div>
                    <div className={s.details}>
                        <header className={s.header}>
                            <div className={s.topHeader}>
                                <h1>{movieDetails?.title}</h1>
                                <button className={s.backButton} onClick={() => navigate(-1)}>Back</button>
                            </div>
                            <div className={s.bottomHeader}>
                                <span
                                    className={s.spanText}>{`Release year: ${movieDetails?.release_date?.match(/^\d{4}/)?.[0] || 'N/A'}`}</span>
                                <span
                                    className={`${s.rating} ${getRatingClass(movieDetails?.vote_average)}`}> {(movieDetails?.vote_average)?.toFixed(1)}</span>
                                <span className={s.spanText}>{`Runtime: ${getRunTime(movieDetails?.runtime)}`}</span>
                            </div>
                        </header>
                        <p className={s.paragraphText}>{movieDetails?.overview}</p>
                        <div className={s.genresContainer}>
                            <h2 className={s.genresText}>Genres</h2>
                            <ul className={s.genresList}>
                                {movieDetails?.genres?.map((genre) => (
                                    <li className={s.genresElement} key={genre.id}>{genre.name}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </section>
                <section className={s.cast}>
                    <header className={s.castHeader}>
                        <h2>Cast</h2>
                    </header>
                    <div className={s.actorsRow}>
                        {moviesCredits?.cast.slice(0, 6).map((actor) => (
                            <ActorCard key={actor.id} profilePath={actor.profile_path} name={actor.name}
                                       characterName={actor.character}/>
                        ))}
                    </div>
                </section>
                <section className={s.similarMovies}>
                    <header className={s.similarHeader}>
                        <h2>Similar Movies</h2>
                    </header>
                    <div className={s.cardRow}>
                        {similarMovies?.results.slice(0, 6).map((movie) => (
                            <MovieCard key={movie.id} movieId={movie.id} posterUrl={movie.poster_path}
                                       title={movie.title}
                                       voteAverage={movie.vote_average}/>
                        ))}
                    </div>
                </section>
            </section>
        </div>
    )
}