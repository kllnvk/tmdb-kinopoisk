import {Pagination} from "@/common/components/Pagintation/Pagination";
import {MovieCard} from "@/features/movies/ui/movieCard/MovieCard";
import {useLazyGetMoviesBySearchQuery} from "@/features/search/api/searchApi";
import {MovieSearchInput} from "@/features/search/ui/MovieSearch/MovieSearchInput";
import {useEffect, useState} from "react";
import {useSearchParams} from "react-router";
import s from "./SearchPage.module.css"

export const SearchPage = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [trigger, {data, isLoading, isError}] = useLazyGetMoviesBySearchQuery();
    const [page, setPage] = useState(1);

    const searchTitle = searchParams.get('query') || '';

    const handleSearch = (title: string) => {
        setSearchParams({query: title});
        setPage(1);
    }

    useEffect(() => {
        trigger({query: searchTitle, page: page});
    }, [page, searchTitle, trigger]);

    const hasResult = data?.results && data.results.length > 0;

    return (
        <div className={s.container}>
            <section className={s.page}>
                <h1>Search Page</h1>
                <MovieSearchInput submitFunc={handleSearch} initialValue={searchTitle}/>
                <section className={s.section}>
                    {searchTitle.trim().length > 0 && !isLoading && (
                        <h2>Results for "{searchTitle}"</h2>
                    )}
                    {isError && (<p>
                        {`No matches for ${ searchTitle }`}
                    </p>)}
                    <div className={s.moviesCard}>
                        {hasResult ?
                            data?.results?.map((movie) => (
                                <MovieCard key={movie.id} movieId={movie.id} posterUrl={movie.poster_path}
                                           title={movie.title}
                                           voteAverage={movie.vote_average}/>
                            )) : <p>Enter a movie title to start searching.</p>}
                    </div>
                    {hasResult && data.total_pages > page && (
                        <Pagination currentPage={page} setCurrentPage={setPage} pagesCount={data.total_pages}/>
                    )}
                </section>
            </section>
        </div>
    )
}