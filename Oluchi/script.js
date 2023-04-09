function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.top = "0";
      
    } else {
      document.getElementById("navbar").style.top = "-50px";
      
    }
}

window.onscroll = function() {anotherScrollFunction()};

function anotherScrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("supbtn").style.display = "block";
    }
    else{
        document.getElementById("supbtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.addEventListener("click", function (){
    navbar.classList.toggle("active")
});

window.onscroll = () => {
    navbar.classList.remove("active");
};
