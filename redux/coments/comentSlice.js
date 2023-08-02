import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    coment: "",
};

export const comentSlice = createSlice({
    name: "coment",
    initialState,
    reducers: {
        addComent: (state, { payload }) => ({
            coment: payload,
        }),
    },
});

export const { addComent } = comentSlice.actions; 