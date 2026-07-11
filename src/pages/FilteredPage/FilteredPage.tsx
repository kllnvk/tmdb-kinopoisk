import {LinearProgress} from "@/common/components/LinearProgress/LinearProgress";
import {Pagination} from "@/common/components/Pagintation/Pagination";
import {sortBy} from "@/common/enums";
import type {Genre, SortBy} from "@/common/schemas";
import {useGetMovieGenresQuery, useGetMoviesByFilterQuery} from "@/features/movies/api/moviesApi";
import {MovieCard} from "@/features/movies/ui/movieCard/MovieCard";
import {type ChangeEvent, useEffect, useState} from "react";
import s from './FilteredPage.module.css';
import Slider from '@rc-component/slider'
import '@rc-component/slider/assets/index.css';

export const sortOptions = [
    {value: sortBy.PopularityDesc, label: 'Popularity ↓'},
    {value: sortBy.PopularityAsc, label: 'Popularity ↑'},
    {value: sortBy.RatingDesc, label: 'Rating ↓'},
    {value: sortBy.RatingAsc, label: 'Rating ↑'},
    {value: sortBy.ReleaseDateDesc, label: 'Release Date ↓'},
    {value: sortBy.ReleaseDateAsc, label: 'Release Date ↑'},
    {value: sortBy.TitleAsc, label: 'Title A-Z'},
    {value: sortBy.TitleDesc, label: 'Title Z-A'},
] as const;

export type Rating = {
    minRating: number;
    maxRating: number;
}

export const FilteredPage = () => {
    const [sort, setSortBy] = useState<SortBy>(sortBy.PopularityDesc);
    const [rating, setRating] = useState<Rating>({minRating: 0.0, maxRating: 10.0});
    const [debouncedRating, setDebouncedRating] = useState<Rating>({minRating: 0.0, maxRating: 10.0});
    const [genresList, setGenresList] = useState<Genre[] | []>([]);
    const [page, setPage] = useState(1);
    const {data: genres} = useGetMovieGenresQuery()
    const {data: filteredMovies, isFetching} = useGetMoviesByFilterQuery({
        params: {
            page,
            sortBy: sort,
            rating: debouncedRating,
            genres: genresList
        }
    });

    const [timerId, setTimerId] = useState<number | undefined>(undefined)

    const onChangeSelectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setSortBy(event.target.value as SortBy);
    }

    const onClickGenresHandler = (genre: Genre) => {
        setGenresList([...genresList, genre]);
    }

    const onChangeFilterHandler = (values: number[] | number) => {
        if (Array.isArray(values)) {
            const newRating = {minRating: values[0], maxRating: values[1]};
            setRating(newRating);
            if (timerId) {
                clearTimeout(timerId);
            }

            const timer = setTimeout(() => {
                setDebouncedRating(newRating);
            }, 200);

            setTimerId(timer)
        }
    }

    useEffect(() => {
        return () => {
            clearTimeout(timerId);
        }
    }, [timerId])

    const onClickResetHandler = () => {
        setSortBy(sortBy.PopularityDesc);
        setRating({minRating: 0.0, maxRating: 10.0});
        setGenresList([]);
    }

    return (
        <div className={s.container}>
            {isFetching && <LinearProgress />}
            <section className={s.page}>
                <div className={s.content}>
                    <div className={s.filtersContainer}>
                        <aside className={s.aside}>
                            <h2>Filter / Sort</h2>
                            <div className={s.sort}>
                                <label className={s.sortText}>
                                    Sort By
                                </label>
                                <select value={sort} onChange={onChangeSelectHandler} className={s.sortSelect}>
                                    {sortOptions.map(option => (
                                        <option value={option.value} key={option.value}>{option.label}</option>
                                    ))}
                                </select>
                            </div>
                            <div>
                                <div className={s.rating}>{`Rating: ${rating.minRating} - ${rating.maxRating}`}</div>
                                <Slider range value={[rating.minRating, rating.maxRating]} min={0} max={10} step={0.1}
                                        allowCross={false} onChange={onChangeFilterHandler}/>
                            </div>
                            <div className={s.genresContainer}>
                                {genres?.genres.map(genre => (
                                    <button
                                        className={`${genresList.some(g => g.id === genre.id) ? `${s.button} ${s.active}` : s.button}`}
                                        key={genre.id}
                                        onClick={() => onClickGenresHandler(genre)}>{genre.name}</button>
                                ))}
                            </div>
                            <div>
                                <button className={s.resetButton} onClick={onClickResetHandler}>Reset Button</button>
                            </div>
                        </aside>
                    </div>
                    <div className={s.moviesContainer}>
                        <div className={s.moviesGrid}>
                            {filteredMovies?.results?.map((movie) => (
                                <MovieCard key={movie.id} movieId={movie.id} posterUrl={movie.poster_path}
                                           title={movie.title}
                                           voteAverage={movie.vote_average}/>
                            ))}
                        </div>
                        <Pagination currentPage={page} setCurrentPage={setPage}
                                    pagesCount={filteredMovies?.total_pages === undefined ? 0 : filteredMovies?.total_pages}/>
                    </div>
                </div>

            </section>
        </div>
    )
}