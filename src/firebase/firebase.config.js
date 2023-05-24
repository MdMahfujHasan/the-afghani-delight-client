import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCWovvgcCZ9LuYexwCBkC7ikRO1E0dMoUE",
    authDomain: "the-afghani-delight.firebaseapp.com",
    projectId: "the-afghani-delight",
    storageBucket: "the-afghani-delight.appspot.com",
    messagingSenderId: "985283812407",
    appId: "1:985283812407:web:99def9663ff26d585573b2"
};

const app = initializeApp(firebaseConfig);

export default app;