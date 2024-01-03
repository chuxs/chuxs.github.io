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

function myFunction() {
    var element = document.querySelector('.navbar .menu');
    element.classList.toggle("active");
    var element2 = document.querySelector('.menu-btn i');
    element2.classList.toggle("active");
  }




  
//   var mbar = document.getElementById('blackmenu')

//   mbar.addEventListener('ul', () => {
//       var element3 = document.querySelector('.navbar .menu');
//     element3.classList.toggle("inactive");
//    })
    
