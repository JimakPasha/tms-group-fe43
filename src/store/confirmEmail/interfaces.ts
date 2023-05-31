import { SET_CONFIRM_EMAIL, RESET_CONFIRM_EMAIL } from './actionTypes';

export interface IConfirmEmailState {
    confirmEmail: string;
}

export interface ISetConfirmEmailAction {
    type: typeof SET_CONFIRM_EMAIL; 
    payload: string;
}

export interface IResetConfirmEmailAction {
    type: typeof RESET_CONFIRM_EMAIL; 
}

export type ConfirmEmailActionTypes = ISetConfirmEmailAction | IResetConfirmEmailAction;
