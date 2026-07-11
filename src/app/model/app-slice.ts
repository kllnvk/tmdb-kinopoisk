import {FAVORITES_KEY, THEME_KEY} from "@/common/constants";
import {createSlice} from "@reduxjs/toolkit";

const getTheme = (): ThemeMode => {
    const theme = localStorage.getItem(THEME_KEY)
    return (theme as ThemeMode) || 'light'
}

const getFavorites = (): Movie[] => {
    const favorites = localStorage.getItem(FAVORITES_KEY)
    if (!favorites) return []
    return JSON.parse(favorites)
}

export const appSlice = createSlice({
    name: "app",
    initialState: {
        themeMode: getTheme(),
        favorites: getFavorites(),
    },
    selectors: {
        selectThemeMode: (state) => state.themeMode,
        selectFavorites:(state) => state.favorites
    },
    reducers: (create) => ({
        changeThemeModeAC: create.reducer<{themeMode: ThemeMode}>((state, action)=>{
            state.themeMode = action.payload.themeMode
            localStorage.setItem(THEME_KEY, action.payload.themeMode)
        }),
        toggleFavoriteAC: create.reducer<{movie: Movie}>((state, action) => {
            const {movie} = action.payload
            const index = state.favorites.findIndex(m => m.id === movie.id)
            if(index !== -1) {
                state.favorites.splice(index, 1)
            } else {
                state.favorites.push(movie);
            }
            localStorage.setItem(FAVORITES_KEY, JSON.stringify(state.favorites));
        })
    }),
})

export const {selectThemeMode,selectFavorites} = appSlice.selectors
export const {changeThemeModeAC, toggleFavoriteAC} = appSlice.actions
export const appReducer = appSlice.reducer
export type ThemeMode = "light" | "dark";
export type Movie = {
    id: number,
    posterUrl: string | null,
    title: string,
    voteAverage: number,
}