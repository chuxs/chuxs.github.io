function getHistory(){
   return document.getElementById("history_value").innerText; 
} 


function printHistory(num){
	document.getElementById("history_value").innerText=num;
}

function getOutput(){
    return document.getElementById("output_value").innerText;
}

function printOutput(num){
     if (num==""){
         document.getElementById("output_value").innerText=num;
     }
     else{
         document.getElementById("output_value").innerText=getFormattedNumber(num);
     }
}

function getFormattedNumber(num){
    if(num=="-"){
        return "";
    }
    var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}

function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}

var operator = document.getElementsByClassName("operator");
for(var i = 0; i < operator.length; i++){
    operator[i].addEventListener("click", function(){   
       if (this.id == "clear"){
           printOutput("");
           printHistory("");
       }
       else if (this.id=="bkspc"){
           var output = reverseNumberFormat(getOutput()).toString();
           if(output){  //if output has value
               output = output.substr(0, output.length-1)
               printOutput(output);
              
           }
       }
       else {
           var output = getOutput();
           var history = getHistory();
           if(output != ""){
               output = reverseNumberFormat(output);
               history = history + output;
               if(this.id=="=") {
                   var result = eval(history);
                   history = history; //added by me
                   printOutput(result);
                   printHistory(history);
               }
               //added by me
               else if (this.id=="^2"){ 
                   var square = output * output; 
                   history = output + this.id 
                   printOutput(square);
                   printHistory(history);
               }
               else{
                   history = history + this.id;
                   printHistory(history);
                   printOutput("");
               }
           }
       }
    });
}

var number = document.getElementsByClassName("number");
for(var i = 0; i < number.length; i++){
    number[i].addEventListener("click", function(){
       var output = reverseNumberFormat(getOutput());
       if (output != NaN){ //if output is a number
           output = output+this.id;
           printOutput(output);
       } 
    })
}

