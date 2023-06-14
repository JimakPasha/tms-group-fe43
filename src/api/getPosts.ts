import { IPost } from "../interfaces/IPost";
import { IPostsParams } from "../interfaces/IPostsParams";
import { urls } from "./urls";
import axios from 'axios';

type PostsType = Omit<IPost, 'like' | 'dislike'>

interface IResponse {
    results: PostsType[];
    count: number
}

export const getPosts = async ({ searchValue = '', offset = 1 }: IPostsParams): Promise<IResponse> => {
    const response = await axios.get(`${urls.GET_POSTS}&search=${searchValue}&offset=${offset}`);
    const data = response.data;
    return data;
}
