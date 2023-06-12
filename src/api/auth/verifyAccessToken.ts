import axios from "axios";
import { urls } from "../urls";
import { apiErrorHandler } from "./apiErrorHandler";

interface IVerifyTokenData {
    token: string;
}

export const verifyAccessToken = async (verifyTokenData: IVerifyTokenData) => {
    const response = await axios.post(urls.AUTH_VERIFY_JWT, verifyTokenData).catch(apiErrorHandler);
    return response.data;
}
