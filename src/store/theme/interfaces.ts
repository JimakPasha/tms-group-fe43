import { TOGGLE_THEME } from './actionTypes';
export type ThemeType = 'light' | 'dark';

export interface IThemeState {
    theme: ThemeType;
}

export interface IToggleThemeAction {
    type: typeof TOGGLE_THEME; 
}

export type ThemeActionTypes = IToggleThemeAction;