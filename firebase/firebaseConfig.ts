
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyANlt5vlXl__FLAWtA-RR4bOO-zWi8fx5g",
    authDomain: "blogly-nextjs-graphql.firebaseapp.com",
    projectId: "blogly-nextjs-graphql",
    storageBucket: "blogly-nextjs-graphql.appspot.com",
    messagingSenderId: "480538511597",
    appId: "1:480538511597:web:9f1c8416b8a30a50b824e4",
    measurementId: "G-R1Q37T8CMB"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { auth };