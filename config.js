// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";

import {
    getReactNativePersistence,
    initializeAuth,
} from "firebase/auth/react-native";

// Функція для підключення бази даних у проект
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

import "firebase/compat/auth";
import "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyABtKXMBVK0iH0OQW2MQswyhxRzd2u7aIQ",
    authDomain: "projectnative-ca157.firebaseapp.com",
    projectId: "projectnative-ca157",
    storageBucket: "projectnative-ca157.appspot.com",
    messagingSenderId: "121043770261",
    appId: "1:121043770261:web:fdcf25e2212d821b3e349c",
};
export const app = initializeApp(firebaseConfig);

initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage),
});

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
