import {POSTER_NULL, POSTER_PATH} from "@/common/constants";
import s from "./ActorCard.module.css"
type Props = {
    profilePath: string | null
    name: string,
    characterName: string
}

export const ActorCard = ({profilePath, characterName, name}: Props) => {
    return (
        <article className={s.card}>
            <div className={s.imageContainer}>
                <img className={s.image} src={profilePath ? `${POSTER_PATH}${profilePath}` : POSTER_NULL} />
            </div>
            <div className={s.info}>
                <p className={s.nameText}>{name}</p>
                <p className={s.characterText}>{characterName}</p>
            </div>
        </article>
    )
}