// 파이어베이스 가져오기
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-analytics.js";
import { getFirestore, setDoc, doc, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.5.2/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAqTgCM2K3vClOgdApOPgwchjIwNKOt9Hs",
    authDomain: "memorial-project-78398.firebaseapp.com",
    projectId: "memorial-project-78398",
    storageBucket: "memorial-project-78398.appspot.com",
    messagingSenderId: "145900651182",
    appId: "1:145900651182:web:039303806a0896d04ae33f",
    measurementId: "G-QE7D9L06HK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);



