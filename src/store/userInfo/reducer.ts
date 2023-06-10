import { GET_USER_INFO_ERROR, GET_USER_INFO_REQUEST, GET_USER_INFO_SUCCESS, RESET_USER_INFO } from "./actionTypes";
import { ActionsUserInfoType, IUserInfoState } from "./interfaces";

const initialState: IUserInfoState = {
  user: null,
  loading: false,
  error: null,
};

export const userInfoReducer = (state = initialState, action: ActionsUserInfoType): IUserInfoState => {
  switch (action.type) {
    case GET_USER_INFO_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_USER_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload.data,
      };
    case GET_USER_INFO_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case RESET_USER_INFO:
        return initialState;
    default:
      return state;
  }
};
