// menu bar
var menu = document.querySelector("#menubars");
var navbar = document.querySelector(".navbar");

menu.onclick = () =>{
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

