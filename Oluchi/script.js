// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '#cart') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

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
let checkoutButton = document.getElementById('checkoutButton');
let liEventListen = document.getElementById('myUL')
let cartCountElement = document.getElementById('cart-notify')
let cartCountElement2 = document.getElementById('cart-notify2')

//Display the items in checkout (popup)
cartbtn.onclick = function () {
    popup.classList.add("show");
    navbar.classList.remove("active");
    document.getElementById(menu).className = "bx bx-menu";
}

//CLick the checkout button on the right corner to display checkout 
checkoutButton.onclick = function () {
    popup.classList.add("show");
    navbar.classList.remove("active");
}

//close cart or popup
closebtn.onclick = function () {
    popup.classList.remove("show");
}

//MutationObserver for the popup. I use this to see if there are any list in the UL.
//If there are none, then remove the menu notification and the checkoutbutton

// Create a new MutationObserver

const observer = new MutationObserver(function(mutationsList) {
    // Check if any mutations occurred
    for(let mutation of mutationsList) {
      if (mutation.type === 'childList') {
        // Check if <ul> has any <li> elements after mutation
        const hasListItems = liEventListen.getElementsByTagName("li").length > 0;
  
        if (hasListItems) {
        //   console.log("The <ul> has list items.");
        checkoutButton.style.visibility = 'visible';
        // Update cart count display
        updateCartCount();
        } else {
        //   console.log("The <ul> does not have any list items.");
          cartCountElement.style.display = 'none';
          cartCountElement.style.visibility = 'hidden';
          cartCountElement.style.opacity = '0';
          cartCountElement2.style.display = 'none';
          cartCountElement2.style.visibility = 'hidden';
          cartCountElement2.style.opacity = '0';
          checkoutButton.style.visibility = 'hidden';
        }
      }
    }
  });
  
// Start observing changes to the <ul> element
observer.observe(liEventListen, { childList: true });

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

window.onscroll = () => {
    navbar.classList.remove("active");
    // document.getElementById(menu-icon).className = "bx bx-menu";
};


// add items to cart
var close = document.getElementsByClassName("close");
var priceSum = 0;
var price = 0;
var priceClose = 0;


//add item to cart and signify item cart has an item

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
            var removeChild = document.getElementById("myUL");
            removeChild.removeChild(div);
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

    //adding the item notification
    updateCartCount();
    
    
    checkoutButton.classList.remove('hidden');
 
}

//adding the count cont..
function updateCartCount(){
    // Get current cart count
    const cartItems = document.getElementById('myUL').getElementsByTagName('li').length;
    
    // Display the count at the top of the cart icon and make it visible
    cartCountElement.style.display = 'inline-block';
    cartCountElement.style.visibility = 'visible';
    cartCountElement.style.color = 'white';
    cartCountElement.style.opacity = '1';
    // Show the count number if more than 0
    if (cartItems > 0) {
        cartCountElement.textContent = cartItems;
    }

    cartCountElement2.style.display = 'inline-block';
    cartCountElement2.style.visibility = 'visible';
    cartCountElement2.style.color = 'white';
    cartCountElement2.style.opacity = '1';
    // Show the count number if more than 0
    if (cartItems > 0) {
        cartCountElement2.textContent = cartItems;
    }
}



function imageDownload() {
    const sectionElement = document.getElementById('popup');

    domtoimage.toPng(sectionElement)
        .then(function (dataUrl) {

            // Select all list items within the ul element inside the div inside the section
            var listItems = document.querySelectorAll('#popup #firstdiv-pop #lastdiv-pop ul li');

            // Create an array to store the values of list items
            var listItemValues = [];

            // Iterate through the NodeList and save each list item value to the array
            listItems.forEach(function (item) {
                listItemValues.push(item.textContent);
              });

            //Send the list of items in the cart to whatsapp
            const spaces = " ".repeat(190);
            const finalList = listItemValues.join(spaces);
            const oluNumber = '+2348020352170';
            const totalDisplayPrice = document.getElementById("totalPrice").innerHTML;
            const urlMsg = 'https://wa.me/' + oluNumber + '?text=' + finalList  + '%0A' + totalDisplayPrice + '%0A' + 'Can I get these';
            window.open(urlMsg, '_blank').focus();

            //after sending to whatsapp, then download the image
            const downloadLink = document.createElement('a');
            downloadLink.href = dataUrl;
            downloadLink.download = 'Your Receipt.png';
            downloadLink.click();

            const downloadContainer = document.getElementById('downloadImage');
            downloadContainer.appendChild(downloadLink);
        })
        .catch(function (error) {
            console.error('Error found', error);
        });
}



