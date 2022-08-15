
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDAV8mjchgMOgeZM9lrcCSMr-M_IQiHM4E",
      authDomain: "kwitter-c3228.firebaseapp.com",
      databaseURL: "https://kwitter-c3228-default-rtdb.firebaseio.com",
      projectId: "kwitter-c3228",
      storageBucket: "kwitter-c3228.appspot.com",
      messagingSenderId: "347293136774",
      appId: "1:347293136774:web:0e806199b6d483302f1e07"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log(Room_names);
var row="<div class='room_name' id="+Room_names+" onclick='RedirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();
user_name = localStorage.getItem("username");
document.getElementById("head_title").innerHTML="Welcome "+user_name+"!";

function add_room(){
      var room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            pupose:"Adding Room Name"
      });
      localStorage.setItem("room",room_name);
      window.location="kwitter_page.html";
}
function RedirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room name",name);
      window.location="kwitter_page.html";
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("room");
      window.location="index.html";
}