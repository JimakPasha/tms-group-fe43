import { urls } from "./urls";

export const getCards = async () => {
    const response = await fetch(urls.GET_POSTS);
    const data = await response.json();
    return data.results;
}
