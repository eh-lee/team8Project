import axios from "axios";
import { cookies } from "./cookies";

export const instance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
});


export const instanceWithAuth = axios.create({
    baseURL: process.env.REACT_APP_SERVER_URL
});

instanceWithAuth.interceptors.request.use(
    function (config) {
        const access_token = cookies.get("access_token");
        config.headers.Authorization = access_token;
        return config;
    },
    function (error) {
        console.log("인터셉터 에러가 있습니다.");
        return Promise.reject(error);
    }
);