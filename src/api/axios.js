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
        Authorization : `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QyQG5hdmVyLmNvbSIsImlhdCI6MTY4MTU3ODE1NCwiZXhwIjoxNjgxNTgxNzU0fQ.ooLdkLc9g1HV5WII1ErBV52kIfTVOuM9FhwvVjp9lXM`
    }
});