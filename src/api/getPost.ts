import { urls } from "./urls";
import axios from 'axios';

interface IGetPost {
    id: string;
}

export const getPost = async ({ id }: IGetPost) => {
    const response = await axios.get(`${urls.GET_POST}/${id}`);
    const data = response.data;
    return data;
}
