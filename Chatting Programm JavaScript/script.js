//----------------------------------------------------------------------------------------------------
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-app.js";

//The firebase database added by me(chuks)
// import {getDatabase} from "firebase/database";
//https://javascript-firebase-chat-app-default-rtdb.firebaseio.com/  will come back to this
import {getDatabase, ref, set, onValue, get, child, onChildAdded, push, remove } from "https://www.gstatic.com/firebasejs/9.8.4/firebase-database.js";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxE_33ZzQkHCDwjBXcIQDJHt-FcHokZZI",
  authDomain: "javascript-firebase-chat-app.firebaseapp.com",
  databaseURL: "javascript-firebase-chat-app-default-rtdb.firebaseio.com",
  projectId: "javascript-firebase-chat-app",
  storageBucket: "javascript-firebase-chat-app.appspot.com",
  messagingSenderId: "900398398471",
  appId: "1:900398398471:web:e8da50469d1b05dcd53ea2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

//-----------------------------------------------------------------------------------------------------------
window.deleteMessage = function(){
  alert("The database is now empty!")
  var emptyList = document.getElementById("dmessages");
  emptyList.innerHTML = "";
  return remove(ref(db), 'Communications');
  
}



window.sendMessage = function(){
  //get the message from the input
  // console.log("i am being called")
  var message = document.getElementById("message").value;
  var userName = document.getElementById("username").value;
  //save the message to database

   const id = push(child(ref(db),'Communications')).key;

   set(ref(db, 'Communications/' + id),{
    "sender": userName,
    "message": message
  });
  
  document.getElementById("message").value = " ";
  document.getElementById("message").placeholder = "message";
  

  //prevent from submitting
  return false;
  
}

//listen fot incoming messages my own work


// const dbRef = ref(db);
// get(child(dbRef, "Communications")).then((snapshot) => {
//   if(snapshot.val().sender == document.getElementById("username").value){
//     console.log(snapshot.val().sender)
//   }
//   else{
//     console.log("it doesn't exist!")
//   }
// });


//listen for incoming messages (version 2 ft my work)
const newMsg = ref(db, 'Communications/');
onChildAdded(newMsg, (data) => {
  var initialusername = document.getElementById("username").value;

  if(data.val().sender == initialusername){

    const senderdata = data.val().sender;
    const dataMsg = data.val().message;
// const data =snapshot.val().sender + ": " + snapshot.val().message;

    var time = new Date().toLocaleTimeString([], {hour:'2-digit', minute: '2-digit'});
    var timeData = "";
    timeData += "<p class='time'>"
    timeData += time;
    timeData += "</p>";

    var messData = "";
    messData += "<p class = 'md'>"
    messData += dataMsg;
    messData += "</p>"
    
    var uData = "";
    uData += "<p class='ud'>"
    uData += senderdata;
    uData += "</p>";
    
    var html = "";
    html += "<li class='list'>";
    html += uData;
    html += messData;
    html += timeData;
    html += "</li>"; 

    var line = "";
    line += "<div class='line' >";
    line += html;
    line +="</div>";  

  document.getElementById("dmessages").innerHTML += line;
  }
  else{
    const senderdata2 = data.val().sender;
    const data2 = data.val().message;
    // const data =snapshot.val().sender + ": " + snapshot.val().message;

    var time = new Date().toLocaleTimeString([], {hour:'2-digit', minute: '2-digit'});
    var timeData = "";
    timeData += "<p class='time time2'>"
    timeData += time;
    timeData += "</p>";

    var messData = "";
    messData += "<p class = 'md md2'>"
    messData += data2;
    messData += "</p>"
    
    var uData = "";
    uData += "<p class='ud ud2'>"
    uData += senderdata2;
    uData += "</p>";
    
    var html = "";
    html += "<li class='list list2'>";
    html += uData;
    html += messData;
    html += timeData;
    html += "</li>"; 

    var line = "";
    line += "<div class='line' >";
    line += html;
    line +="</div>";  
  

  document.getElementById("dmessages").innerHTML += line;
  }

});
























// //listen for incoming messages (ft my hacking)
// const starCountRef = ref(db, "Communications");
// onValue(starCountRef, (snapshot)=>{
//     const senderdata = snapshot.val().sender;
//     const data = snapshot.val().message;
// // const data =snapshot.val().sender + ": " + snapshot.val().message;

//     var time = new Date().toLocaleTimeString([], {hour:'2-digit', minute: '2-digit'});
//     var timeData = "";
//     timeData += "<p class='time'>"
//     timeData += time;
//     timeData += "</p>";

//     var messData = "";
//     messData += "<p class = 'md'>"
//     messData += data;
//     messData += "</p>"
    
//     var uData = "";
//     uData += "<p class='ud'>"
//     uData += senderdata;
//     uData += "</p>";
    
//     var html = "";
//     html += "<li class='list'>";
//     html += uData;
//     html += messData;
//     html += timeData;
//     html += "</li>"; 
  

//   document.getElementById("dmessages").innerHTML += html;
  
// });

