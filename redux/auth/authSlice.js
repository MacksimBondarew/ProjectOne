import { createSlice } from "@reduxjs/toolkit";

const authState = {
    login: null,
    email: null,
    avatar: null,
    userId: null,
    stateChange: false,
}

export const authSlice = createSlice({
    name: "auth",
    initialState: authState,
    reducers: {
        updateUserProfile: (state, { payload }) => ({
            ...state,
            login: payload.login,
            email: payload.email,
            avatar: payload.avatar,
            userId: payload.userId,
        }),
        authStateChange: (state, {payload} ) => ({
            ...state,
            stateChange: payload.stateChange
        }),
        authSingOut: () => authState,
    }
});

export const { updateUserProfile, authStateChange, authSingOut } = authSlice.actions;