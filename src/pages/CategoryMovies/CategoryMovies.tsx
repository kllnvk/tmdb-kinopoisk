import {categories} from "@/common/constants";
import {useGetMoviesByCategoryQuery} from "@/features/movies/api/moviesApi";
import type {Category} from "@/features/movies/api/moviesApi.types";
import {MovieCard} from "@/features/movies/ui/movieCard/MovieCard";
import {NavLink, useParams} from "react-router";
import s from "./CategoryMovies.module.css"

export const CategoryPage = () => {

    const {category = "popular"} = useParams<{ category: Category }>()
    const {data} = useGetMoviesByCategoryQuery({category, params: {page: 1}});


    return (
        <div className={s.container}>
            <section className={s.page}>
                <div className={s.buttonsContainer}>
                    {categories.map(({path, label}) => (

                        <NavLink
                            key={path}
                            className={({isActive}) =>
                                isActive ? `${s.button} ${s.active}` : s.button
                            }
                            to={path}
                        >
                            {label}
                        </NavLink>

                    ))}
                </div>
                <div className={s.wrapper}>
                    <section className={s.moviesCards}>
                        {data?.results?.map((movie) => (
                            <MovieCard key={movie.id} movieId={movie.id} posterUrl={movie.poster_path}
                                       title={movie.title}
                                       voteAverage={movie.vote_average}/>
                        ))}
                    </section>
                </div>
            </section>
        </div>
    )
}