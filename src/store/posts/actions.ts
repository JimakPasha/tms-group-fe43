import { IPost } from "../../interfaces/IPost";
import { getPosts } from '../../api/getPosts';
import { IGetPostsRequestAction, IGetPostsErrorAction, IGetPostsSuccessAction, ActionsType, ISetLikeAction, ISetDislikeAction, IResetPostsAction } from "./interfaces";
import { GET_POSTS_ERROR, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, SET_DISLIKE, SET_LIKE, RESET_POST } from './actionTypes';
import { ThunkDispatch } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IPostsParams } from "../../interfaces/IPostsParams";


const getPostsRequestAction = (): IGetPostsRequestAction => {
  return { type: GET_POSTS_REQUEST };
}

const getPostsSuccessAction = (data: IPost[], searchValue: string): IGetPostsSuccessAction => {
  return { type: GET_POSTS_SUCCESS, payload: { data, searchValue } };
}

const getPostsErrorAction = (): IGetPostsErrorAction => {
  return { type: GET_POSTS_ERROR, payload: { error: 'Unknown error' } };
}

export const setLikeAction = (id: number): ISetLikeAction => {
    return { type: SET_LIKE, payload: id };
  }
  
export const setDislikeAction = (id: number): ISetDislikeAction => {
  return { type: SET_DISLIKE, payload: id };
}

export const getPostsAction = ({searchValue} : IPostsParams) => async (dispatch: ThunkDispatch<RootState, unknown, ActionsType>) => {
    try {
      dispatch(getPostsRequestAction());
      const posts = await getPosts({searchValue});
      const dataWithAddFields: IPost[] = posts.map((post) => ({...post, like: 0, dislike: 0}));
      if (searchValue) {
        dispatch(getPostsSuccessAction(dataWithAddFields, searchValue));
      } else {
        dispatch(getPostsSuccessAction(dataWithAddFields, ''));
      }
    } catch (error) {
      dispatch(getPostsErrorAction());
    }
};

export const resetPostsAction = (): IResetPostsAction => {
  return { type: RESET_POST };
}