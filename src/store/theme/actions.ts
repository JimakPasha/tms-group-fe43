import { TOGGLE_THEME } from "./actionTypes";
import { IToggleThemeAction } from "./interfaces";

export const toggleThemeAction = (): IToggleThemeAction => ({
        type: TOGGLE_THEME,
});
