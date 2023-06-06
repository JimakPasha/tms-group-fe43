import axios from "axios";
import { urls } from "./urls";

interface IPostLogin {
    email: string;
    password: string;
}

export const postLogin = async (formData: IPostLogin) => {
    const response = await axios.post(urls.AUTH_JWT, formData);
    return response.data;
}
