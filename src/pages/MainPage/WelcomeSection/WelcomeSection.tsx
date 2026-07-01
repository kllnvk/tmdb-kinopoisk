import s from './WelcomeSection.module.css'

type Props = {
    backdropPath: string | undefined;
}

export const WelcomeSection = ({backdropPath}: Props) => {
    return (
        <section className={s.fullWidthSection} style={{
            backgroundImage: `url(${backdropPath})`,
        }}>
            <div className={s.textContainer}>
                <h1>Welcome</h1>
                <h2>Browse highlighted titles from TMDB</h2>
            </div>
        </section>
    )
}