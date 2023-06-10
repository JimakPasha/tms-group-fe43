import { SET_LOGGED, SET_LOGOUT } from "./actionTypes";
import { IConfirmEmailState, authTypes } from "./interfaces";


const initialState: IConfirmEmailState = {
    isLogged: false
}

export const authReducer = (state = initialState, action: authTypes): IConfirmEmailState => {
    switch (action.type) {
        case SET_LOGGED:
            return { ...state, isLogged: true };
        case SET_LOGOUT:
            return { ...state, isLogged: false };
        default:
            return state;
    }
}