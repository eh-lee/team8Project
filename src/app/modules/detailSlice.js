import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isComment: false,
};

export const detailSlice = createSlice({
    name: "detail",
    initialState,
    reducers: {
        setIsComment: (state, action) => {
            state.isComment = action.payload;
        },
        returnIsComment: () => {
            return initialState;
        }
    },
});

export const { setIsComment } = detailSlice.actions;

export default detailSlice.reducer;