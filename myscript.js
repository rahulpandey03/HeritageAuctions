//function for refreshing window in given interval to update the bid regularly.
window.setInterval('refresh()', 60000);//60sec 
function refresh() {
    window.location.reload();
}
//function for opening login pop-up
document.getElementById('login').addEventListener('click', function () {
    document.querySelector('.pop-up').style.display = "flex";
    document.querySelector('.modal').style.display = "flex";
    document.body.classList.add("stop-scrolling"); //Page will stop scrolling
});
//function for closing login pop-up
document.querySelector('.close').addEventListener('click', function () {
    document.querySelector('.pop-up').style.display = 'none';
    document.querySelector('.modal').style.display = 'none';
    document.body.classList.remove("stop-scrolling"); //Page will start scrolling
});

//function for opening signup pop-up
document.getElementById('signup').addEventListener('click', function () {
    document.querySelector('.pop-up').style.display = "flex";
    document.querySelector('.modal1').style.display = "flex";
    document.body.classList.add("stop-scrolling");
});
//function for closing signup pop-up
document.querySelector('.close1').addEventListener('click', function () {
    document.querySelector('.pop-up').style.display = 'none';
    document.querySelector('.modal1').style.display = 'none';
    document.body.classList.remove("stop-scrolling");

});

//function for opening about pop-up
document.getElementById('about').addEventListener('click', function () {
    document.querySelector('.pop-up').style.display = "flex";
    document.querySelector('.modal3').style.display = "flex";
    document.body.classList.add("stop-scrolling");
});
//function for closing about pop-up
document.querySelector('.close3').addEventListener('click', function () {
    document.querySelector('.pop-up').style.display = 'none';
    document.querySelector('.modal3').style.display = 'none';
    document.body.classList.remove("stop-scrolling");

});

//function for opening contact pop-up
document.getElementById('contact').addEventListener('click', function () {
    document.querySelector('.pop-up1').style.display = "flex";
    document.querySelector('.modal4').style.display = "flex";
    document.body.classList.add("stop-scrolling");
});
//function for closing contact pop-up
document.querySelector('.close4').addEventListener('click', function () {
    document.querySelector('.pop-up1').style.display = 'none';
    document.querySelector('.modal4').style.display = 'none';
    document.body.classList.remove("stop-scrolling");

});


//function to make the vertical nav visible and invisible
var menuList = document.getElementById("menu-list");
menuList.style.maxHeight = "0px";

function menutoggle() {
    if (menuList.style.maxHeight == "0px") {
        menuList.style.maxHeight = "200px"; //make the nav size equal to 200px
    }
    else {
        menuList.style.maxHeight = "0px"; //make the nav size equal to 0px
    }
}

//function for opening the make bid pop-up
function make() {
    window.scrollTo(0, 0);
    document.querySelector('.pop-up').style.display = "flex";
    document.querySelector('.modal2').style.display = "flex";
    document.body.classList.add("stop-scrolling"); //Page will stop scrolling
}

function show(){
    document.getElementById("categories").style.display="flex";
    document.getElementById("categories").style.backgroundColor="white";  
}




