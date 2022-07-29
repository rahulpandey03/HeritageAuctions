// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";
import { getDatabase, set, ref, child, update, get, remove } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyDxuAZxuxl6mA6XRDwddKXsr_NmDDrYRm4",
authDomain: "heritage-auction.firebaseapp.com",
projectId: "heritage-auction",
storageBucket: "heritage-auction.appspot.com",
messagingSenderId: "809350392213",
appId: "1:809350392213:web:f4dbf4ca027d951ab62e9c",
measurementId: "G-844YKX542Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();
const db = getDatabase(app);
//references

subm.addEventListener('click', (e) => {
    var name = document.getElementById('Pname');
    var num = document.getElementById('num');
    var bid = document.getElementById('bid');
    var biddername = document.getElementById('biddername');
    var price = document.getElementById('price');
    var img = document.getElementById('img');


    set(ref(db, "products/" + num.value), {
        ProductName: name.value,
        ProductNumber: num.value,
        BidNumber: bid.value,
        BidderName: biddername.value,
        CurrentPrice: price.value,
        Image: img.value
    })
        .then(() => {
            alert("DATA STORED SUCCESSFULLY.");
        })
        .catch((error) => {
            alert(error);
        });
});