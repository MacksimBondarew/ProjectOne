import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const registerUser = createAsyncThunk(
    "auth/register",
    async (credentials) => {
        const { email, password } = credentials;
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.log(error);
        }
    }
);

export const loginDB = createAsyncThunk(
    "auth/login",
    async (credentials) => {
        const { email, password } = credentials;
        try {
            const credentials = await signInWithEmailAndPassword(
                auth,
                email,
                password
            );
            return credentials.user;
        } catch (error) {
            throw error;
        }
    }
);


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
