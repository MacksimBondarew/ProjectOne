import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../config";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { userId } from "./selectors";

export const registerUser = createAsyncThunk(
    "auth/register",
    async (credentials) => {
        const { email, password } = credentials;
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            return user;
        } catch (error) {
            console.log(error);
        }
    }
);

export const loginDB = createAsyncThunk("auth/login", async (credentials) => {
    const { email, password } = credentials;
    try {
        const user = await signInWithEmailAndPassword(
            auth,
            email,
            password
        );
        return user;
    } catch (error) {
        console.log("error");
        throw error;
    }
});

const updateUserProfile = async (update) => {
    const user = auth.currentUser;

    if (user) {
        try {
            await updateProfile(user, update);
        } catch (error) {
            throw error;
        }
    }
};
