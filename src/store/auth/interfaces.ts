import { SET_LOGGED, SET_LOGOUT } from './actionTypes';

export interface IConfirmEmailState {
    isLogged: boolean;
}

export interface ISetLoggedAction {
    type: typeof SET_LOGGED; 
}

export interface ISetLogoutAction {
    type: typeof SET_LOGOUT; 
}

export type authTypes = ISetLoggedAction | ISetLogoutAction;
