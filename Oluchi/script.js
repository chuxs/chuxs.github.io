function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("navbar").style.top = "0";

    } else {
        document.getElementById("navbar").style.top = "-50px";

    }
}

window.onscroll = function () { anotherScrollFunction() };

function anotherScrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("supbtn").style.display = "block";
    }
    else {
        document.getElementById("supbtn").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// let menu = document.get("#menu-icon");
let menu = document.getElementById("menu-icon")
let navbar = document.querySelector(".navbar");
let cartbtn = document.getElementById("cartbtn");
let popup = document.getElementById("popup");
let closebtn = document.getElementsByClassName("close-btn")[0];

cartbtn.onclick = function () {
    popup.classList.add("show");
    navbar.classList.remove("active");
    document.getElementById(menu).className = "bx bx-menu";
}

closebtn.onclick = function () {
    popup.classList.remove("show");
}

menu.addEventListener("click", function () {
    navbar.classList.toggle("active")
    // menu.classList = "bx bx-right-arrow-alt"; bx bx-menu
    // if (document.getElementById(menu-icon).className == "bx bx-menu") {
    //     document.getElementById(menu-icon).className = "bx bx-right-arrow-alt";
    // }
    // else {
    //     document.getElementById(menu-icon).className = "bx bx-menu"
    // }
});

// function changeIcon(memuarrow) {
//     navbar.classList.toggle("active")
//     // if (document.getElementById(memuarrow).className == "bx bx-menu") {
//     //     document.getElementById(memuarrow).className = "bx bx-right-arrow-alt";
//     // }
//     // else {
//     //     document.getElementById(memuarrow).className = "bx bx-menu";
//     // }
// }

window.onscroll = () => {
    navbar.classList.remove("active");
    // document.getElementById(menu-icon).className = "bx bx-menu";
};

// body.addEventListener("click", clicker);
// function clicker() {
//     if (menu.className == "bx bx-right-arrow-alt") {
//         menu.className = "bx bx-menu";
//     }
// }
