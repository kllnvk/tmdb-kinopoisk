import {MovieSearchInput} from "@/features/search/ui/MovieSearch/MovieSearchInput";
import {useNavigate} from "react-router";
import s from './WelcomeSection.module.css'

type Props = {
    backdropPath: string | undefined;
}

export const WelcomeSection = ({backdropPath}: Props) => {
    const navigate = useNavigate();
    const onSubmitHandler = (title: string) => {
        navigate(`/search?query=${title}`);
    }

    return (
        <section className={s.fullWidthSection} style={{
            backgroundImage: `url(${backdropPath})`,
        }}>
            <div className={s.textContainer}>
                <h1>Welcome</h1>
                <h2>Browse highlighted titles from TMDB</h2>
                <MovieSearchInput submitFunc={onSubmitHandler} initialValue={""}/>
            </div>
        </section>
    )
}