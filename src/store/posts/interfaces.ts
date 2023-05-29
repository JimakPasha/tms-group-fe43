import { IPost } from '../../interfaces/IPost';
import { GET_POSTS_ERROR, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, SET_DISLIKE, SET_LIKE } from './actionTypes';

export interface IPostsState {
    loading: boolean;
    posts: IPost[] | null;
    error: string | null;
}

export interface IGetPostsRequestAction {
    type: typeof GET_POSTS_REQUEST;
}
  
export interface IGetPostsSuccessAction {
    type: typeof GET_POSTS_SUCCESS;
    payload: {
      data: IPost[];
    };
}
  
export interface IGetPostsErrorAction {
    type: typeof GET_POSTS_ERROR;
    payload: {
      error: string;
    };
}

export interface ISetLikeAction {
    type: typeof SET_LIKE;
    payload: number;
  }
  
  export interface ISetDislikeAction {
    type: typeof SET_DISLIKE;
    payload: number;
  }
  
export type ActionsType = 
    IGetPostsRequestAction 
    | IGetPostsSuccessAction 
    | IGetPostsErrorAction 
    | ISetLikeAction 
    | ISetDislikeAction;
