import { IGetUserInfoErrorAction, IGetUserInfoRequestAction, IGetUserInfoSuccessAction, ActionsUserInfoType, IResetUserInfoAction } from "./interfaces";
import { GET_USER_INFO_ERROR, GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, RESET_USER_INFO } from './actionTypes';
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IUser } from "../../interfaces/IUser";
import { getUserInfo } from "../../api/getUserInfo";


const getUserInfoRequestAction = (): IGetUserInfoRequestAction => {
  return { type: GET_USER_INFO_REQUEST };
}

const getUserInfoSuccessAction = (data: IUser): IGetUserInfoSuccessAction => {
  return { type: GET_USER_INFO_SUCCESS, payload: { data } };
}

const getUserInfoErrorAction = (): IGetUserInfoErrorAction => {
  return { type: GET_USER_INFO_ERROR, payload: { error: 'Unknown error' } };
}

export const getUserInfoAction = () => async (dispatch: ThunkDispatch<RootState, unknown, ActionsUserInfoType>) => {
        try {
          dispatch(getUserInfoRequestAction());
          const user: IUser = await getUserInfo();
          dispatch(getUserInfoSuccessAction(user));
        } catch (error) {
          dispatch(getUserInfoErrorAction());
        }
};

export const resetUserInfoAction = (): IResetUserInfoAction => {
        return { type: RESET_USER_INFO };
}