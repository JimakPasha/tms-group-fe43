import { GET_POSTS_ERROR, GET_POSTS_REQUEST, GET_POSTS_SUCCESS, SET_LIKE, SET_DISLIKE, RESET_POST, TOGGLE_FAVORITE, SET_FAVORITE } from "./actionTypes";
import { ActionsType, IPostsState } from "./interfaces";

const initialState: IPostsState = {
  postsAll: null,
  favoritesPosts: null,
  loading: false,
  error: null,
  searchValue: '',
  countPosts: 0,
};

export const postsReducer = (state = initialState, action: ActionsType): IPostsState => {
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
        countPosts: 0
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        postsAll: action.payload.posts,
        countPosts: action.payload.count,
        searchValue: action.payload.searchValue
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
          postsAll: state.postsAll && state.postsAll.map((post) => 
            post.id === action.payload ? {...post, like: post.like + 1} : post
          ),
          favoritesPosts: state.favoritesPosts && state.favoritesPosts.map((post) => 
          post.id === action.payload ? {...post, like: post.like + 1} : post
          )
        };
      case SET_DISLIKE:
          return {
            ...state,
            postsAll: state.postsAll && state.postsAll.map((post) => 
              post.id === action.payload ? {...post, dislike: post.dislike + 1} : post
            ),
            favoritesPosts: state.favoritesPosts && state.favoritesPosts.map((post) => 
            post.id === action.payload ? {...post, dislike: post.dislike + 1} : post
            )
      };
      case TOGGLE_FAVORITE:
        return {
          ...state,
          postsAll: state.postsAll && state.postsAll.map((post) => 
            post.id === action.payload ? {...post, isFavorite: !post.isFavorite} : post
          )
      };
      case SET_FAVORITE:
        return {
          ...state,
          favoritesPosts: state.postsAll && state.postsAll.filter((post) => post.isFavorite)
        };
      case RESET_POST: 
      return initialState;
    default:
      return state;
  }
};