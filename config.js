// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyABtKXMBVK0iH0OQW2MQswyhxRzd2u7aIQ",
    authDomain: "projectnative-ca157.firebaseapp.com",
    projectId: "projectnative-ca157",
    storageBucket: "projectnative-ca157.appspot.com",
    messagingSenderId: "121043770261",
    appId: "1:121043770261:web:fdcf25e2212d821b3e349c"
  };
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
