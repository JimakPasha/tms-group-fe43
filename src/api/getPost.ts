import { urls } from "./urls";

interface IgetPost {
    id: string;
}

export const getPost = async ({ id }: IgetPost) => {
    const response = await fetch(`${urls.GET_POST}/${id}`);
    const data = await response.json();
    return data;
}
