import { loginDB, registerUser } from "./operations";

const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
    userId: 321321,
    nickname: null,
    isLoggedIn: false
};


const rootReducer = createSlice({
    name: "user",
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.fulfilled, (state, action) => {
                state.userId = action.payload.user.uid;
                state.isLoggedIn = true;
            })
            .addCase(loginDB.fulfilled, (state, action) => {
                console.log(state.userId)
                state.userId = action.payload.user.uid;
                state.isLoggedIn = true;
            });
    },
});

export const authReducer = rootReducer.reducer;
