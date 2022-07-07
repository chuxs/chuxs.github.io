function stopActivities(){
    document.getElementById("aamber").style.backgroundColor = "";
    document.getElementById("ared").style.backgroundColor = "";
    document.getElementById("agreen").style.backgroundColor = "";

    clearInterval(timerGreen);
    document.getElementById("angreen").innerHTML = "00"
    document.getElementById("angreen").style.color = "";

    clearTimeout(timerAmber);
    document.getElementById("anamber").innerHTML = "00"
    document.getElementById("anamber").style.color = "";

    clearInterval(timerRed);
    document.getElementById("anred").innerHTML = "00";
    document.getElementById("anred").style.color = "";

    
}

var timerGreen = null;
var timerAmber = null;
var timerRed = null;

function changeColorRed() {
    document.getElementById("aamber").style.backgroundColor = "";
    document.getElementById("anamber").style.color = "";
    document.getElementById("ared").style.backgroundColor = "red";
    document.getElementById("anred").style.color = "red";

    var countdown = 40;
    timerRed = setInterval(function () {
        if (countdown <= 0) {
            clearInterval(timerRed)
            document.getElementById("anred").innerHTML = "00";
            changeColorGreen();
        }
        else {
            document.getElementById("anred").innerHTML = countdown;
        }
        countdown -= 1;
    }, 1000)

}


function changeColorAmber() {
    document.getElementById("agreen").style.backgroundColor = "";
    document.getElementById("angreen").style.color = "";
    document.getElementById("aamber").style.backgroundColor = "yellow";
    document.getElementById("anamber").style.color = "orangered";

    var countdown = 10;
    timerAmber = setInterval(function () {
        if (countdown <= 0) {
            clearInterval(timerAmber)
            document.getElementById("anamber").innerHTML = "00"
            changeColorRed();
        }
        else {
            document.getElementById("anamber").innerHTML = countdown;
        }
        countdown -= 1;
    }, 1000)

}


function changeColorGreen() {
    document.getElementById("agreen").style.backgroundColor = "green";
    document.getElementById("angreen").style.color = "green";
    document.getElementById("ared").style.backgroundColor = "";
    document.getElementById("anred").style.color = "";

    var countdown = 30;

     timerGreen = setInterval(function () {
        if (countdown <= 0) {
            clearInterval(timerGreen);
            document.getElementById("angreen").innerHTML = "00"
            changeColorAmber();
        }
        else {
            document.getElementById("angreen").innerHTML = countdown;
        }
        countdown -= 1;
    }, 1000)
}