import {type ThemeMode} from "@/app/model/app-slice";

type Props = {
    themeMode: ThemeMode
    children: React.ReactNode
}

export const ThemeProvider = ({children, themeMode}: Props) => {

    document.documentElement.setAttribute('data-theme', themeMode)

    return <>{children}</>
}