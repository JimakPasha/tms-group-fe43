import { IPost } from '../../interfaces/IPost';
import { GET_POSTS_ERROR, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, SET_DISLIKE, SET_LIKE, RESET_POST, TOGGLE_FAVORITE, SET_FAVORITE } from './actionTypes';

export interface IPostsState {
    loading: boolean;
    postsAll: IPost[] | null;
    favoritesPosts: IPost[] | null;
    error: string | null;
    searchValue?: string;
    countPosts: number;
}

export interface IGetPostsRequestAction {
    type: typeof GET_POSTS_REQUEST;
}
  
export interface IGetPostsSuccessAction {
    type: typeof GET_POSTS_SUCCESS;
    payload: {
      posts: IPost[];
      count: number;
      searchValue?: string;
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

export interface IToggleFavoriteAction {
  type: typeof TOGGLE_FAVORITE;
  payload: number;
}
  
export interface IResetPostsAction {
  type: typeof RESET_POST;
}

export interface ISetFavoriteAction {
  type: typeof SET_FAVORITE;
}

export type ActionsType = 
    IGetPostsRequestAction 
    | IGetPostsSuccessAction 
    | IGetPostsErrorAction 
    | ISetLikeAction 
    | ISetDislikeAction
    | IResetPostsAction
    | IToggleFavoriteAction
    | ISetFavoriteAction;
