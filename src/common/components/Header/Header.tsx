import {changeThemeModeAC, selectThemeMode} from "@/app/model/app-slice";
import {Path} from "@/app/routing/Routing";
import {Logo} from "@/common/components";
import {useDispatch, useSelector} from "react-redux";
import { NavLink } from 'react-router'
import s from './Header.module.css'

const navItems = [
    { to: Path.Main, label: 'Main' },
    { to: Path.Movies, label: 'Category Movies' },
    { to: Path.Filtered, label: 'Filtered Movies' },
    { to: Path.Search, label: 'Search' },
    { to: Path.Favorites, label: 'Favorites' },
]

export const Header = () => {
    const dispatch = useDispatch()
    const themeMode = useSelector(selectThemeMode)

    const changeThemeHandler = () => {
        dispatch(changeThemeModeAC({themeMode: themeMode === 'light' ? 'dark' : 'light'}))
    }

    return (
        <header className={s.header}>
            <a className={s.logoLink} href="/" aria-label="Go to main page">
                <Logo className={s.logo}/>
            </a>
            <nav>
                <ul className={s.list}>
                    {navItems.map(item => (
                        <li key={item.to}>
                            <NavLink
                                to={item.to}
                                className={({ isActive }) => `${s.link} ${isActive ? s.active : ''}`}
                            >
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            <button onClick={changeThemeHandler} className={s.themeButton}>{themeMode === 'light' ? `🌙` : `☀️`}</button>
        </header>
    )
}