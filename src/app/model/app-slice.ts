import {THEME_KEY} from "@/common/constants";
import {createSlice} from "@reduxjs/toolkit";

const getTheme = (): ThemeMode => {
    const theme = localStorage.getItem(THEME_KEY)
    return (theme as ThemeMode) || 'light'
}

export const appSlice = createSlice({
    name: "app",
    initialState: {
        themeMode: getTheme(),
    },
    selectors: {
        selectThemeMode: (state) => state.themeMode
    },
    reducers: (create) => ({
        changeThemeModeAC: create.reducer<{themeMode: ThemeMode}>((state, action)=>{
            state.themeMode = action.payload.themeMode
            localStorage.setItem(THEME_KEY, action.payload.themeMode)
        }),
    }),
})

export const {selectThemeMode} = appSlice.selectors
export const {changeThemeModeAC} = appSlice.actions
export const appReducer = appSlice.reducer
export type ThemeMode = "light" | "dark";