import { RESET_CONFIRM_EMAIL, SET_CONFIRM_EMAIL } from "./actionTypes";
import { IResetConfirmEmailAction, ISetConfirmEmailAction } from "./interfaces";

export const setConfirmEmailAction = (confirmEmail: string): ISetConfirmEmailAction => ({
        type: SET_CONFIRM_EMAIL,
        payload: confirmEmail
});

export const resetConfirmEmailAction = (): IResetConfirmEmailAction => ({
        type: RESET_CONFIRM_EMAIL,
});
