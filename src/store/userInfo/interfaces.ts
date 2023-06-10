import { IUser } from '../../interfaces/IUser';
import { GET_USER_INFO_ERROR, GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, RESET_USER_INFO } from './actionTypes';

export interface IUserInfoState {
    loading: boolean;
    error: string | null;
    user: IUser | null;
}

export interface IGetUserInfoRequestAction {
    type: typeof GET_USER_INFO_REQUEST;
}
  
export interface IGetUserInfoSuccessAction {
    type: typeof GET_USER_INFO_SUCCESS;
    payload: {
      data: IUser;
    };
}
  
export interface IGetUserInfoErrorAction {
    type: typeof GET_USER_INFO_ERROR;
    payload: {
      error: string;
    };
}

export interface IResetUserInfoAction {
    type: typeof RESET_USER_INFO;
}

export type ActionsUserInfoType = 
IGetUserInfoRequestAction 
    | IGetUserInfoSuccessAction 
    | IGetUserInfoErrorAction
    | IResetUserInfoAction;
