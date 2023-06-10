import { SET_LOGGED, SET_LOGOUT } from "./actionTypes";
import { ISetLoggedAction, ISetLogoutAction } from "./interfaces";

export const setLoggedAction = (): ISetLoggedAction => ({
        type: SET_LOGGED,
});

export const setLogoutAction = (): ISetLogoutAction => ({
        type: SET_LOGOUT,
});