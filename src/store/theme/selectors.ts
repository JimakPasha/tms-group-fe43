import { RootState } from "../store";

export const isDarktheme = (state: RootState) => state.theme.theme === 'dark';
