 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-analytics.js";
 import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-auth.js";
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
 window.onload = function () {
     const dbref = ref(db);
 
     get(child(dbref, "products/" + "P1")).then((snapshot) => {
         if (snapshot.exists()) {
             document.getElementById("p1").innerHTML = snapshot.val().ProductName;
             document.getElementById("numP1").innerHTML = snapshot.val().BidNumber;
             document.getElementById("valueP1").innerHTML = snapshot.val().CurrentPrice;
             var check =   document.getElementById("BidBtn1").disabled;
             var bidnum = snapshot.val().BidNumber;
             if(check)
             {
                 if(Number(bidnum)>0){
                document.getElementById("BidBtn1").innerHTML = "Winner : "+snapshot.val().BidderName;
                document.getElementById("BidBtn1").style.backgroundColor = "green";
                document.getElementById("BidBtn1").style.opacity = 0.7;}
                else{
                    document.getElementById("BidBtn1").innerHTML = "Item Not Sold";
                    document.getElementById("BidBtn1").style.backgroundColor = "green";
                    document.getElementById("BidBtn1").style.opacity = 0.7;
    
                }
             }
         }
     })
     get(child(dbref, "products/" + "P2")).then((snapshot) => {
         if (snapshot.exists()) {
             document.getElementById("p2").innerHTML = snapshot.val().ProductName;
             document.getElementById("numP2").innerHTML = snapshot.val().BidNumber;
             document.getElementById("valueP2").innerHTML = snapshot.val().CurrentPrice;
             var check =   document.getElementById("BidBtn2").disabled;
             var bidnum = snapshot.val().BidNumber;
             if(check)
             {
                 if(Number(bidnum)>0){
                document.getElementById("BidBtn2").innerHTML = "Winner : "+snapshot.val().BidderName;
                document.getElementById("BidBtn2").style.backgroundColor = "green";
                document.getElementById("BidBtn2").style.opacity = 0.7;}
                else{
                    document.getElementById("BidBtn2").innerHTML = "Item Not Sold";
                    document.getElementById("BidBtn2").style.backgroundColor = "red";
                    document.getElementById("BidBtn2").style.opacity = 0.9;
    
                }
             }
         }

     })
     get(child(dbref, "products/" + "P3")).then((snapshot) => {
         if (snapshot.exists()) {
             document.getElementById("p3").innerHTML = snapshot.val().ProductName;
             document.getElementById("numP3").innerHTML = snapshot.val().BidNumber;
             document.getElementById("valueP3").innerHTML = snapshot.val().CurrentPrice;
             var check =   document.getElementById("BidBtn3").disabled;
             var bidnum = snapshot.val().BidNumber;
             if(check)
             {
                 if(Number(bidnum)>0){
                document.getElementById("BidBtn3").innerHTML = "Winner : "+snapshot.val().BidderName;
                document.getElementById("BidBtn3").style.backgroundColor = "green";
                document.getElementById("BidBtn3").style.opacity = 0.7;}
                else{
                    document.getElementById("BidBtn3").innerHTML = "Item Not Sold";
                    document.getElementById("BidBtn3").style.backgroundColor = "red";
                    document.getElementById("BidBtn3").style.opacity = 0.9;
                }
             }
         }

     })
     get(child(dbref, "products/" + "P4")).then((snapshot) => {
         if (snapshot.exists()) {
             document.getElementById("p4").innerHTML = snapshot.val().ProductName;
             document.getElementById("numP4").innerHTML = snapshot.val().BidNumber;
             document.getElementById("valueP4").innerHTML = snapshot.val().CurrentPrice;
             var check =   document.getElementById("BidBtn4").disabled;
             var bidnum = snapshot.val().BidNumber;
             if(check)
             {
                 if(Number(bidnum)>0){
                document.getElementById("BidBtn4").innerHTML = "Winner : "+snapshot.val().BidderName;
                document.getElementById("BidBtn4").style.backgroundColor = "green";
                document.getElementById("BidBtn4").style.opacity = 0.7;}
                else{
                    document.getElementById("BidBtn4").innerHTML = "Item Not Sold";
                    document.getElementById("BidBtn4").style.backgroundColor = "red";
                    document.getElementById("BidBtn4").style.opacity = 0.9;
                }
             }
         }

     })
     get(child(dbref, "products/" + "P5")).then((snapshot) => {
         if (snapshot.exists()) {
             document.getElementById("p5").innerHTML = snapshot.val().ProductName;
             document.getElementById("numP5").innerHTML = snapshot.val().BidNumber;
             document.getElementById("valueP5").innerHTML = snapshot.val().CurrentPrice;
             var check =   document.getElementById("BidBtn5").disabled;
             var bidnum = snapshot.val().BidNumber;
             if(check)
             {
                 if(Number(bidnum)>0){
                document.getElementById("BidBtn5").innerHTML = "Winner : "+snapshot.val().BidderName;
                document.getElementById("BidBtn5").style.backgroundColor = "green";
                document.getElementById("BidBtn5").style.opacity = 0.7;}
                else{
                    document.getElementById("BidBtn5").innerHTML = "Item Not Sold";
                    document.getElementById("BidBtn5").style.backgroundColor = "red";
                    document.getElementById("BidBtn5").style.opacity = 0.9;
                }
             }
         }
     })
     get(child(dbref, "products/" + "P6")).then((snapshot) => {
         if (snapshot.exists()) {
             document.getElementById("p6").innerHTML = snapshot.val().ProductName;
             document.getElementById("numP6").innerHTML = snapshot.val().BidNumber;
             document.getElementById("valueP6").innerHTML = snapshot.val().CurrentPrice;
             var check =   document.getElementById("BidBtn6").disabled;
             var bidnum = snapshot.val().BidNumber;
             if(check)
             {
                 if(Number(bidnum)>0){
                document.getElementById("BidBtn6").innerHTML = "Winner : "+snapshot.val().BidderName;
                document.getElementById("BidBtn6").style.backgroundColor = "green";
                document.getElementById("BidBtn6").style.opacity = 0.7;}
                else{
                    document.getElementById("BidBtn6").innerHTML = "Item Not Sold";
                    document.getElementById("BidBtn6").style.backgroundColor = "red";
                    document.getElementById("BidBtn6").style.opacity = 0.9;
                }
             }
         }

     })
     get(child(dbref, "products/" + "P7")).then((snapshot) => {
         if (snapshot.exists()) {
             document.getElementById("p7").innerHTML = snapshot.val().ProductName;
             document.getElementById("numP7").innerHTML = snapshot.val().BidNumber;
             document.getElementById("valueP7").innerHTML = snapshot.val().CurrentPrice;
             var check =   document.getElementById("BidBtn7").disabled;
             var bidnum = snapshot.val().BidNumber;
             if(check)
             {
                 if(Number(bidnum)>0){
                document.getElementById("BidBtn7").innerHTML = "Winner : "+snapshot.val().BidderName;
                document.getElementById("BidBtn7").style.backgroundColor = "green";
                document.getElementById("BidBtn7").style.opacity = 0.7;}
                else{
                    document.getElementById("BidBtn7").innerHTML = "Item Not Sold";
                    document.getElementById("BidBtn7").style.backgroundColor = "red";
                    document.getElementById("BidBtn7").style.opacity = 0.9;
                }
             }
         }
     })
     get(child(dbref, "products/" + "P8")).then((snapshot) => {
         if (snapshot.exists()) {
             document.getElementById("p8").innerHTML = snapshot.val().ProductName;
             document.getElementById("numP8").innerHTML = snapshot.val().BidNumber;
             document.getElementById("valueP8").innerHTML = snapshot.val().CurrentPrice;
             var check =   document.getElementById("BidBtn8").disabled;
             var bidnum = snapshot.val().BidNumber;
             if(check)
             {
                 if(Number(bidnum)>0){
                document.getElementById("BidBtn8").innerHTML = "Winner : "+snapshot.val().BidderName;
                document.getElementById("BidBtn8").style.backgroundColor = "green";
                document.getElementById("BidBtn8").style.opacity = 0.7;}
                else{
                    document.getElementById("BidBtn8").innerHTML = "Item Not Sold";
                    document.getElementById("BidBtn8").style.backgroundColor = "red";
                    document.getElementById("BidBtn8").style.opacity = 0.9;
                }
             }
         }
     })
     get(child(dbref, "products/" + "P9")).then((snapshot) => {
         if (snapshot.exists()) {
             document.getElementById("p9").innerHTML = snapshot.val().ProductName;
             document.getElementById("numP9").innerHTML = snapshot.val().BidNumber;
             document.getElementById("valueP9").innerHTML = snapshot.val().CurrentPrice;
             var check =   document.getElementById("BidBtn9").disabled;
             var bidnum = snapshot.val().BidNumber;
             if(check)
             {
                 if(Number(bidnum)>0){
                document.getElementById("BidBtn9").innerHTML = "Winner : "+snapshot.val().BidderName;
                document.getElementById("BidBtn9").style.backgroundColor = "green";
                document.getElementById("BidBtn9").style.opacity = 0.7;}
                else{
                    document.getElementById("BidBtn9").innerHTML = "Item Not Sold";
                    document.getElementById("BidBtn9").style.backgroundColor = "red";
                    document.getElementById("BidBtn9").style.opacity = 0.9;
                }
             }
         }
     })
     get(child(dbref, "products/" + "P10")).then((snapshot) => {
         if (snapshot.exists()) {
             document.getElementById("p10").innerHTML = snapshot.val().ProductName;
             document.getElementById("numP10").innerHTML = snapshot.val().BidNumber;
             document.getElementById("valueP10").innerHTML = snapshot.val().CurrentPrice;
             var check =   document.getElementById("BidBtn10").disabled;
             var bidnum = snapshot.val().BidNumber;
             if(check)
             {
                 if(Number(bidnum)>0){
                document.getElementById("BidBtn10").innerHTML = "Winner : "+snapshot.val().BidderName;
                document.getElementById("BidBtn10").style.backgroundColor = "green";
                document.getElementById("BidBtn10").style.opacity = 0.7;}
                else{
                    document.getElementById("BidBtn10").innerHTML = "Item Not Sold";
                    document.getElementById("BidBtn10").style.backgroundColor = "red";
                    document.getElementById("BidBtn10").style.opacity = 0.9;
                }
            }
         }
     })
     get(child(dbref, "products/" + "P11")).then((snapshot) => {
         if (snapshot.exists()) {
             document.getElementById("p11").innerHTML = snapshot.val().ProductName;
             document.getElementById("numP11").innerHTML = snapshot.val().BidNumber;
             document.getElementById("valueP11").innerHTML = snapshot.val().CurrentPrice;
             var check =   document.getElementById("BidBtn11").disabled;
             var bidnum = snapshot.val().BidNumber;
             if(check)
             {
                 if(Number(bidnum)>0){
                document.getElementById("BidBtn11").innerHTML = "Winner : "+snapshot.val().BidderName;
                document.getElementById("BidBtn11").style.backgroundColor = "green";
                document.getElementById("BidBtn11").style.opacity = 0.7;}
                else{
                    document.getElementById("BidBtn11").innerHTML = "Item Not Sold";
                    document.getElementById("BidBtn11").style.backgroundColor = "red";
                    document.getElementById("BidBtn11").style.opacity = 0.9;
                }
            }
         }
     })
     get(child(dbref, "products/" + "P12")).then((snapshot) => {
         if (snapshot.exists()) {
             document.getElementById("p12").innerHTML = snapshot.val().ProductName;
             document.getElementById("numP12").innerHTML = snapshot.val().BidNumber;
             document.getElementById("valueP12").innerHTML = snapshot.val().CurrentPrice;
             var check =   document.getElementById("BidBtn12").disabled;
             var bidnum = snapshot.val().BidNumber;
             if(check)
             {
                 if(Number(bidnum)>0){
                document.getElementById("BidBtn12").innerHTML = "Winner : "+snapshot.val().BidderName;
                document.getElementById("BidBtn12").style.backgroundColor = "green";
                document.getElementById("BidBtn12").style.opacity = 0.7;}
                else{
                    document.getElementById("BidBtn12").innerHTML = "Item Not Sold";
                    document.getElementById("BidBtn12").style.backgroundColor = "red";
                    document.getElementById("BidBtn12").style.opacity = 0.9;
                }
            }
         }
     })
 }


 subm.addEventListener('click', (e) => {
     //name = document.getElementById('Pname');
     var num = document.getElementById('num');
     var bid = document.getElementById('bid');
     var biddername = document.getElementById('biddername');
     var price = document.getElementById('price');
     var checkbid = document.getElementById('num' + num.value).innerHTML;
     var checkprice = document.getElementById('value' + num.value).innerHTML;
     if (Number(bid.value) > Number(checkbid)) {
         if (Number(price.value) > Number(checkprice)) {
             update(ref(db, "products/" + num.value), {
                 //  ProductName: name.value,
                 ProductNumber: num.value,
                 BidNumber: bid.value,
                 BidderName: biddername.value,
                 CurrentPrice: price.value
             })
                 .then(() => {
                     document.getElementById("num" + num.value).innerHTML = bid.value;
                     document.getElementById("value" + num.value).innerHTML = price.value;
                     document.querySelector('.pop-up').style.display = 'none';
                     document.querySelector('.modal2').style.display = 'none';
                     document.body.classList.remove("stop-scrolling");
                     document.getElementById("bidForm").reset();
                 })
                 .catch((error) => {
                     alert(error);
                 });
         }
         else {
             alert("Enter New bid greater then current bid.")
         }
     }
     else{
         alert("Enter Correct bid Number.")
     }
 });

 SignOut.addEventListener('click', (e) => {
     signOut(auth).then(() => {
         window.location.href = "index.html";
     }).catch((error) => {
         alert("Error");
     });
 });
