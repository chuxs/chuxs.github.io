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



// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}

// add items to cart
var priceSum = 0;

var price = 0;



function addToCart() {
    var li = document.createElement("li");
    var inputValue = document.getElementById(event.currentTarget.id).innerHTML;
    var t = document.createTextNode(inputValue);

    // var totalprice = document.getElementById("totalPrice").innerHTML;

    li.appendChild(t);
    document.getElementById("myUL").appendChild(li);

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";
        }
    }
    // getting the price of the food item
    const priceRegex = /\d+(\.\d{1,2})?/;
    const matches = inputValue.match(priceRegex);
    if (matches && matches.length > 0) {
        // const price = parseFloat(matches[0]);
        price = parseFloat(matches[0]);
        console.log(price); // Output: 19.99
        priceSum = priceSum + price;
        document.getElementById("totalPrice").innerHTML = "Total $" + priceSum;
        // console.log(totalprice);
         // var totalprice = document.getElementById("totalPrice").innerHTML;
    }


}

// body.addEventListener("click", clicker);
// function clicker() {
//     if (menu.className == "bx bx-right-arrow-alt") {
//         menu.className = "bx bx-menu";
//     }
// }

// Create a "close" button and append it to each list item
// var myNodelist = document.getElementsByClassName("LI");
// var i;
// for (i = 0; i < myNodelist.length; i++) {
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.style.cursor = "pointer";
//     span.appendChild(txt);
//     myNodelist[i].appendChild(span);
// }


// Create a new list item when clicking on the "Add" button
// function shrimp() {

//     var li = document.createElement("li");
//     var inputValue = document.getElementById("shrimps").innerHTML;
//     var t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     document.getElementById("myUL").appendChild(li);

//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     li.appendChild(span);

//     for (i = 0; i < close.length; i++) {
//         close[i].onclick = function () {
//             var div = this.parentElement;
//             div.style.display = "none";
//         }
//     }
// }

