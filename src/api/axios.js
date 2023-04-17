import axios from "axios";

const {
    REACT_APP_SERVER_URL,
} = process.env;

const access_token = decodeURI(document.cookie).replace("access_token=", "").replace(/; nickname=([^;]*)/, "");

export const instance = axios.create({
    baseURL: REACT_APP_SERVER_URL
});

export const instanceWithAuth = axios.create({
    baseURL: REACT_APP_SERVER_URL,
    // http://43.201.18.179:3000/api/postlike/post/0c2efa60-00c1-4ab3-b3e1-afbf6d73776b
    // baseURL: 'http://43.201.18.179:3000/api',
    headers: {
        Authorization: `${access_token}`
    },
});