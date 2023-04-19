import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    pollType: "",
    pollTitle: "",
    tag: "",
};

export const writeSlice = createSlice({
    name: "write",
    initialState,
    reducers: {
        setPollType: (state, action) => {
            state.pollType = action.payload;
        },
        setPollTitle: (state, action) => {
            state.pollTitle = action.payload;
        },
        setTag: (state, action) => {
            state.tag = action.payload;
        },
        // pollCanc: (state) => {
        //     state.pollType = "";
        //     state.pollTitle = "";
        //     state.tag = [];
        // },
        pollCanc: () => {
            return initialState;
        }
    },
});

export const { setPollType, setPollTitle, setTag, pollCanc } = writeSlice.actions;

export default writeSlice.reducer;
