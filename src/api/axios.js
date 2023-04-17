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
    headers: {
        Authorization: `${access_token}`
    }
});