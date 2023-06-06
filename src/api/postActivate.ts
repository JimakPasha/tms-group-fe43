import axios from "axios";
import { urls } from "./urls";

interface IPostActivate {
    uid: string;
    token: string;
}

export const postActivate = async (data: IPostActivate) => {
    await axios.post(urls.AUTH_USERS_ACTIVATION, data);
}
