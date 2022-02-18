 const form = document.getElementById('form');
 
 const username = document.getElementById('username');

 const email = document.getElementById('email');
 
 const password = document.getElementById('password');
 
 const passwordcheck = document.getElementById('passwordcheck');
 
 
 var pass = document.getElementById('password');
 var passc =document.getElementById('passwordcheck');
 var str = document.getElementById('strength');
 var pnse = document.getElementById('passnotsameerror');


//Password strenght authenification while typing 
 pass.addEventListener('input', () => {
   if(pass.value.length === 0 ){
    str.innerHTML = " ";
   }  
   else if (pass.value.length < 4){
       str.style.visibility = "visible";
       str.style.color = "#FF0000";
       str.innerHTML = "Password is weak";
   }
    else if (pass.value.length >= 4 &&  pass.value.length  < 8){
        str.style.visibility = "visible";
        str.style.color = "#FFB266";
        str.innerHTML = "Password is medium";
   }
   else if (pass.value.length >= 8){
        str.style.visibility = "visible";
        str.style.color = "#00FF00";
        str.innerHTML = "Password is strong";
}

 })

 passc.addEventListener('input', () => {
    if(passc.value.length === 0){
     pnse = innerHTML = " ";
    }
    else if (passc.value != pass.value){
        pnse.style.visibility = "visible";
        pnse.style.color = "#FF0000";
        pnse.innerHTML = "Passwords do not match!";
    }
    else if (passc.value === pass.value){
        pnse.style.visibility = "visible";
        pnse.style.color = "#00FF00";
        pnse.innerHTML = "The Passwords Match! ";
    }

})

 
 form.addEventListener('submit',(e) => {

     e.preventDefault();

     checkInputs();
     
 });
 
 function checkInputs() {
 
    //getting values from the inputs 
     const usernameValue = username.value.trim();
     const emailValue = email.value.trim();
     const passwordValue = password.value.trim();
     const passwordcheckValue = passwordcheck.value.trim();
     const maleRadio = document.getElementById('gender_male');
     const femaleRadio = document.getElementById('gender_female');
    
 
     //if username is empty
     if(usernameValue === ''){
         
       
        //showError (call the error function)
        setErrorFor(username, 'Username cannot be blank');
     }
     else{
 
         //showSuccess (call the success function)
        setSuccessFor(username,'');
     }


     //if email is empty
     if(emailValue === ''){
        //showError (call the error function)
        setErrorFor(email, 'Email cannot be blank');
     }
     else{
 
         //showSuccess (call the success function)
        setSuccessFor(email, '');
     }


    //if password is empty
    if(passwordValue === ''){
        //showError (call the error function)
        setErrorFor(password, 'Password cannot be blank');
    }
    else{
        //showSuccess (call the success function)
        setSuccessFor(password,'');
    }

     //if passwordcheck is empty
    if(passwordcheckValue === ''){
        //showError (call the error function)
        setErrorFor(passwordcheck, 'Please enter your password again!');
    }
    else if(passwordValue != passwordcheckValue){
        setErrorFor(passwordcheck, 'The passwords do not match!');
    }
    else{

        //showSuccess (call the success function)
        setSuccessFor(passwordcheck, '');
    }


    //if radio boxes are checked
    //The radio button was intentional initiated in the "checkinputs" function, for some reason i could not initiate it outside!
  if(maleRadio.checked || femaleRadio.checked){
   
    console.log('here')
    document.getElementById('check').style.color = "#00FF00";
    document.getElementById('check').style.visibility = "visible";
  }
  else{
     
    document.getElementById('radiomessage').style.color = "#FF0000";   
    document.getElementById('radiomessage').style.visibility = "visible";
    document.getElementById('exclam').style.color = "#FF0000";
    document.getElementById('exclam').style.visibility = "visible";
    document.getElementById('radiomessage').innerHTML = "You must select a gender!";
  }

}
 


 //the error message
 function setErrorFor(input, message){
    
     const formGroup = input.parentElement; //Getting the form itself
     const small = formGroup.querySelector('small');
 
     //attach the error message to the small
     small.innerText = message;
 
     //add error class
     formGroup.className = 'form-group error'
 }


 //the success message
 function setSuccessFor(input , message){
    
   const formGroup = input.parentElement; //Getting the form itself
   const small = formGroup.querySelector('small');
 
     //attach the error message to the small
     small.innerText = message;
 
     //add error class
     formGroup.className = 'form-group success'
 }





