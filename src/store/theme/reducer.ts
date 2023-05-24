import { TOGGLE_THEME } from "./actionTypes";
import { IThemeState, ThemeActionTypes } from "./interfaces";


const initialState: IThemeState = {
    theme: 'light'
}

export const themeReducer = (state = initialState, { type }: ThemeActionTypes): IThemeState => {
    switch (type) {
        case TOGGLE_THEME:
            return { ...state, theme: state.theme === 'light' ? 'dark' : 'light' };
        default:
            return state;
    }
}