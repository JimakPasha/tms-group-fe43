import axios from "axios";
import { urls } from "./urls";
import { authHeader } from "./auth/authHeader";
import { apiErrorHandler } from "./auth/apiErrorHandler";

interface INewPost {
    image: File;
    text: string;
    lesson_num: string;
    title: string;
    description: string;
}


export const postNewPost = async ({ description, image, lesson_num, text, title }: INewPost) => {
    const formData = new FormData();
    formData.append('image', image);
    formData.append('description', description);
    formData.append('lesson_num', lesson_num);
    formData.append('text', text);
    formData.append('title', title);

    const response = await axios.post(urls.POST_NEW_POST, formData, { headers: authHeader()}).catch(apiErrorHandler)
    return response.data
}
