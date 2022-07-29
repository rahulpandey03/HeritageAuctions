
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
const database = getDatabase(app);
const db = getDatabase(app);

signUp.addEventListener('click', (e) => {
    var name = document.getElementById("fname").value;
    var email = document.getElementById("femail").value;
    var password = document.getElementById("fpass").value;
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            //unique id provided by firebase.
            set(ref(database, 'users/' + user.uid), {
                username: name,
                email: email,
                password: password
            })
                .then(() => {
                    // Data saved successfully!
                    window.location.href = "product.html";
                })
                .catch((error) => {
                    // The write failed...
                    alert(error);
                });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });
});

logIn.addEventListener('click', (e) => {
    var email = document.getElementById('lemail').value;
    var password = document.getElementById('lpass').value;
    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ... 
            window.location.href = "product.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage);
            // ..
        });
});



