import {MovieRow} from "@/common/components";
import {BACKDROP_PATH} from "@/common/constants";
import {getRandomItem} from "@/common/utils/getRandomItem";
import {useGetMoviesByCategoryQuery} from "@/features/movies/api/moviesApi";
import {WelcomeSection} from "@/pages/MainPage/WelcomeSection/WelcomeSection";
import s from './MainPage.module.css'

export const MainPage = () => {
    const {data: popularData} = useGetMoviesByCategoryQuery({category: "popular", params: {page: 1}});
    const {data: nowPlayingData} = useGetMoviesByCategoryQuery({category: "now_playing", params: {page: 1}});
    const {data: upComingData} = useGetMoviesByCategoryQuery({category: "upcoming", params: {page: 1}});
    const {data: topRatedData} = useGetMoviesByCategoryQuery({category: "top_rated", params: {page: 1}});

    const randomMovie = popularData?.results ? getRandomItem(popularData.results) : undefined
    const backdropPath = randomMovie?.backdrop_path
        ? `${BACKDROP_PATH}${randomMovie.backdrop_path}`
        : ''

    return (
        <div className={s.container}>
            <section className={s.pageSection}>
                <section className={s.mainSection}>
                    <WelcomeSection backdropPath={backdropPath}/>
                </section>
                <section className={s.rowsSections}>
                    <MovieRow title={"Popular Movies"} movies={popularData?.results}/>
                    <MovieRow title={"Top Rated Movies"} movies={topRatedData?.results}/>
                    <MovieRow title={"Upcoming Movies"} movies={upComingData?.results}/>
                    <MovieRow title={"Now Playing Movies"} movies={nowPlayingData?.results}/>
                </section>
            </section>
        </div>
    )
}