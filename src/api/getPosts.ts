import { IPost } from "../interfaces/IPost";
import { urls } from "./urls";
import axios from 'axios';

type PostsType = Omit<IPost, 'like' | 'dislike'>

export const getPosts = async (): Promise<PostsType[]> => {
    const response = await axios.post(urls.GET_POSTS);
    const data = response.data;
    return data.results;
}
