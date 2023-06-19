import { SET_ACTIVE_TAB } from "./actionTypes";
import { ISetActiveTabAction } from "./interfaces";

export const setActiveTabAction = (id: number): ISetActiveTabAction => ({
        type: SET_ACTIVE_TAB , payload: id 
});
