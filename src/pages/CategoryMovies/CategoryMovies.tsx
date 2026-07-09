import {Pagination} from "@/common/components/Pagintation/Pagination";
import {categories} from "@/common/constants";
import type {Category} from "@/common/schemas";
import {useGetMoviesByCategoryQuery} from "@/features/movies/api/moviesApi";
import {MovieCard} from "@/features/movies/ui/movieCard/MovieCard";
import {useState} from "react";
import {NavLink, useParams} from "react-router";
import s from "./CategoryMovies.module.css"

export const CategoryPage = () => {

    const {category = "popular"} = useParams<{ category: Category }>()
    const [page, setPages] = useState(1)
    const {data} = useGetMoviesByCategoryQuery({category, params: {page: page}});


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
                <Pagination currentPage={page} pagesCount={data?.total_pages === undefined ? 0 : data?.total_pages} setCurrentPage={setPages}/>
            </section>
        </div>
    )
}