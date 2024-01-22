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

// var i;
// for (i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//         var div = this.parentElement;
//         div.style.display = "none";
//     }
// }

// add items to cart

var close = document.getElementsByClassName("close");
var priceSum = 0;
var price = 0;
var priceClose = 0;

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

    //Basically this code is to subtract the price of the item you are closing
    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;

            // Generate a random number within a specific range (e.g., between 1 and 1000)
            //I am assiging a random value as id for every item i want to delete
            var min = 1;
            var max = 1000;
            var randomRange = "random" + Math.floor(Math.random() * (max - min + 1)) + min;
            console.log(randomRange);


            div.id = randomRange;
            var closeVaue = document.getElementById(randomRange).innerHTML;
            const priceRegexClose = /\d+(\.\d{1,2})?/;
            const matchesClose = closeVaue.match(priceRegexClose);
            priceClose = parseFloat(matchesClose[0]);
            priceSum = priceSum - priceClose;
            document.getElementById("totalPrice").innerHTML = "Total $" + priceSum;
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
    }
}

//Convert the list of items to an image and download it
// function imageDownload() {

//     console.log("i am being clicked!")
//     // Get the section element by its ID
//     const sectionElement = document.getElementById('popup');

//     // Create a canvas element
//     const canvas = document.createElement('canvas');
//     const context = canvas.getContext('2d');

//     // Set the canvas size to match the section element's dimensions
//     canvas.width = sectionElement.offsetWidth;
//     canvas.height = sectionElement.offsetHeight;

//     // Create an image element
//     const image = new Image();

//     // Convert the section content to a data URL
//     const svgData = new XMLSerializer().serializeToString(sectionElement);
//     const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
//     const svgUrl = URL.createObjectURL(svgBlob);

//     // Set the image source to the SVG URL
//     image.src = svgUrl;

//     // Wait for the image to load
//     image.onload = () => {
//         // Draw the image onto the canvas
//         context.drawImage(image, 0, 0);

//         // Convert the canvas to a data URL
//         const dataURL = canvas.toDataURL('image/png');

//         // Create a download link
//         const downloadLink = document.createElement('a');
//         downloadLink.href = dataURL;
//         downloadLink.download = 'section_image.png';
//         downloadLink.innerHTML = 'Download Image';

//         const downloadContainer = document.getElementById('downloadImage');
//         downloadContainer.innerHTML("downloadLink");

//         console.log(downloadLink);

//         // Clean up the SVG URL -- dont know what this means yet
//         URL.revokeObjectURL(svgUrl);

//     }

// }

// function imageDownload() {
//     // Get the section element by its ID
//     var image = new Image();
//     const sectionElement = document.getElementById('popup');
//     domtoimage.toPng(sectionElement).then(function (dataUrl) {
//         // var image = new Image();
//         image.src = dataUrl;
//         // document.body.appendChild(image)
//         const downloadLink = document.createElement('a');
//         downloadLink.href = image.src;
//         downloadLink.download = 'Cart Items.png';
//         downloadLink.click();
//         // downloadLink.textContent = 'Download and Send the picture of your Cart';

//         // const downloadContainer = document.getElementById('downloadImage');
//         // downloadContainer.appendChild(downloadLink);
//         const sendimg = encodeURIComponent(dataUrl);

//         console.log(downloadLink)
        
//         const olunumber = +2349014330242;

//         const urlmsg = "https://wa.me/" + olunumber + "?text="
//         + sendimg + "  Can I get this?";

//         // encodeURIComponent(downloadLink) 
//         window.open(urlmsg, ' blank').focus();

//     }).catch(function (error) {

//         console.error('error found', error);
//     });
//     // Create a download link



// }

function imageDownload() {
    const sectionElement = document.getElementById('popup');

    domtoimage.toPng(sectionElement)
        .then(function (dataUrl) {
            const downloadLink = document.createElement('a');
            downloadLink.href = dataUrl;
            downloadLink.download = 'Cart_Items.png';
            downloadLink.click();

            const downloadContainer = document.getElementById('downloadImage');
            downloadContainer.appendChild(downloadLink);
            
            // Select all list items within the ul element inside the div inside the section
            var listItems = document.querySelectorAll('#popup #firstdiv-pop #lastdiv-pop ul li');

            // Create an array to store the values of list items
            var listItemValues = [];

            // Iterate through the NodeList and save each list item value to the array
            listItems.forEach(function (item) {
              listItemValues.push(item.textContent);
            });

            // const finalList = listItemValues.join('                                                                                                                                                                                  ');

            const spaces = " ".repeat(190);

            const finalList = listItemValues.join(spaces);

            const oluNumber = '+17206547003';

            const totalDisplayPrice = document.getElementById("totalPrice").innerHTML;

            const urlMsg = 'https://wa.me/' + oluNumber + '?text=' + finalList  + '%0A' + totalDisplayPrice + '%0A' + 'Can I get these';

            window.open(urlMsg, '_blank').focus();
        })
        .catch(function (error) {
            console.error('Error found', error);
        });
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

