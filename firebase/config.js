import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyABtKXMBVK0iH0OQW2MQswyhxRzd2u7aIQ",
  authDomain: "projectnative-ca157.firebaseapp.com",
  databaseURL: "https://projectnative-ca157-default-rtdb.firebaseio.com",
  projectId: "projectnative-ca157",
  storageBucket: "projectnative-ca157.appspot.com",
  messagingSenderId: "121043770261",
  appId: "1:121043770261:web:fdcf25e2212d821b3e349c"
};

const app = initializeApp(firebaseConfig);

export default app;
