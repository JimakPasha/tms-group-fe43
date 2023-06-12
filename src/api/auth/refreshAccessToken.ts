import axios from "axios"
import { urls } from "../urls"

interface IRefreshAccessToken {
    refresh: string;
}

export const refreshAccessToken = async (refreshTokenData: IRefreshAccessToken) => {
    const response = await axios.post(urls.AUTH_REFRESH_JWT, refreshTokenData);
    return response.data;
}
