import { GET_POSTS_ERROR, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, SET_LIKE, SET_DISLIKE } from "./actionTypes";
import { ActionsType, IPostsState } from "./interfaces";

const initialState: IPostsState = {
  posts: null,
  loading: false,
  error: null,
};

export const postsReducer = (state = initialState, action: ActionsType): IPostsState => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        posts: action.payload.data,
      };
    case GET_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
      case SET_LIKE:
        return {
          ...state,
          posts: state.posts && state.posts.map((post) => 
            post.id === action.payload ? {...post, like: post.like + 1} : post
          )
        };
      case SET_DISLIKE:
          return {
            ...state,
            posts: state.posts && state.posts.map((post) => 
              post.id === action.payload ? {...post, dislike: post.dislike + 1} : post
            )
      };
    default:
      return state;
  }
};