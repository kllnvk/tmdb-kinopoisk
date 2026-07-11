import {NavLink} from "react-router";
import s from './PageNotFound.module.css'

export const PageNotFound = () => {
    return (
        <div className={s.container}>
            <h1 className={s.title}>404</h1>
            <h2 className={s.subtitle}>page not found</h2>
            <NavLink className={s.button} to="/">Go to Main</NavLink>
        </div>
    )
}