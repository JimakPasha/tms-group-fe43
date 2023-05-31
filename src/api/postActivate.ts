import axios from "axios";
import { urls } from "./urls";

interface IpostActivate {
    uid: string;
    token: string;
}

export const postActivate = async (data: IpostActivate) => {
    await axios.post(urls.AUTH_USERS_ACTIVATION, data);
}
