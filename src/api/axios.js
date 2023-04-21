import axios from "axios";
import { cookies } from "./cookies";

// const {
//     REACT_APP_SERVER_URL,
// } = process.env;

// REACT_APP_SERVER_URL = `http://hunsu.site`;

// const access_token = cookies.get("access_token");
// const access_token = decodeURI(document.cookie).replace("access_token=", "").replace(/; nickname=([^;]*)/, "").replace(/; refresh_token=[^;]*/, "");

export const instance = axios.create({
    // baseURL: REACT_APP_SERVER_URL
    // baseURL: "https://hunsu.site/api"
    // baseURL: "https://3.38.208.169/api"
    baseURL: "https://kimohseong.com/api"
    // baseURL: "https://kimohseong.com"


    //=========================================
    // baseURL: "http://52.78.166.176:3000/api"
});


export const instanceWithAuth = axios.create({
    // baseURL: REACT_APP_SERVER_URL
    // baseURL: "https://hunsu.site/api"
    // baseURL: "https://3.38.208.169/api"
    baseURL: "https://kimohseong.com/api"
    // baseURL: "https://kimohseong.com"

    //=========================================
    // baseURL: "http://52.78.166.176:3000/api"
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

// instanceWithAuth.interceptors.request.use(
//     function (config) {
//         const access_token = cookies.get("access_token");
//         config.headers.Authorization = access_token;
//         return config;
//     },
//     function (error) {
//         console.log("인터셉터 에러가 있습니다.");
//         return Promise.reject(error);
//     }
// );