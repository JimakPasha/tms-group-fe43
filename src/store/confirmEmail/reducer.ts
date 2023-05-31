import { RESET_CONFIRM_EMAIL, SET_CONFIRM_EMAIL } from "./actionTypes";
import { IConfirmEmailState, ConfirmEmailActionTypes } from "./interfaces";


const initialState: IConfirmEmailState = {
    confirmEmail: ''
}

export const confirmEmailReducer = (state = initialState, action: ConfirmEmailActionTypes): IConfirmEmailState => {
    switch (action.type) {
        case SET_CONFIRM_EMAIL:
            return { ...state, confirmEmail: action.payload };
        case RESET_CONFIRM_EMAIL:
            return initialState;
        default:
            return state;
    }
}