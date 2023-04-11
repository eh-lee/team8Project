// *===================== 사용 안 함. 나중에 정리. =====================*

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { cookies } from "../../api/cookies"
import { instance } from "../../api/axios"

export const __signUp = createAsyncThunk("signUp", async (newUser, thunk) => {
    try {
        await instance.post("/api/user/signup", newUser);
        alert(`${newUser.nickname} 님 회원가입에 성공하였습니다.`);
        return thunk.fulfillWithValue(newUser);
    } catch (e) {
        const errorMsg = e.response.data.msg;
        alert(`${errorMsg}`);
        return thunk.rejectWithValue(e);
    }
});

export const __login = createAsyncThunk("logIn", async (thisUser, thunk) => {
    try {
        const response = await instance.post("api/user/login", thisUser);
        cookies.set("access_token", response.headers.authorization, { path: "/" });
        cookies.set("refresh_token", response.headers.authorization, { path: "/" });
        cookies.set("nickname", response.data.nickname, { path: "/" });
        return thunk.fulfillWithValue(thisUser);
    } catch (e) {
        const errorMsg = e.response.data.msg;
        alert(`${errorMsg}`);
        return thunk.rejectWithValue(e);
    }
});

export const __withdrawal = createAsyncThunk("withdrawl", async (thisUser, thunk) => {
    try {
        await instance.delete("api/user/delete", thisUser);
        cookies.remove("access_token")
        cookies.remove("refresh_token")
        cookies.remove("nickname")
        return thunk.fulfillWithValue(thisUser);
    } catch (e) {
        const errorMsg = e.response.data.msg;
        alert(`${errorMsg}`);
        return thunk.rejectWithValue(e);
    }
})

const initialState = {
    isLogin: cookies.get("access_token") ? true : false,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state) {
            state.isLogin = true;
        },
        logout(state) {
            state.isLogin = false;
            cookies.remove("access_token");
            cookies.remove("refresh_token");
            cookies.remove("nickname");
        },
    },
});

export const isLoginActions = authSlice.actions;
export default authSlice.reducer;
