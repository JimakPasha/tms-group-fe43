import { IPost } from "../interfaces/IPost";
import { IPostsParams } from "../interfaces/IPostsParams";
import { urls } from "./urls";
import axios from 'axios';

type PostsType = Omit<IPost, 'like' | 'dislike'>

export const getPosts = async ({ searchValue = '' }: IPostsParams): Promise<PostsType[]> => {
    const response = await axios.post(`${urls.GET_POSTS}&search=${searchValue}`);
    const data = response.data;
    return data.results;
}
