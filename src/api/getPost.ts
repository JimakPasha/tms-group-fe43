import { urls } from "./urls";
import axios from 'axios';

interface IgetPost {
    id: string;
}

export const getPost = async ({ id }: IgetPost) => {
    const response = await axios.get(`${urls.GET_POST}/${id}`);
    const data = response.data;
    return data;
}
