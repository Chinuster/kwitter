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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);

var name=message_data['name'];
var message=message_data['message'];
var like=message_data['like'];
var nameverify="<h4>"+name+"<img class='user_tick'src='tick.png'></h4>";
var like_bt="<button class='btn btn-warning' id="+firebase_message_id+"value="+like+"onclick='updatelike(this.id)'>";
var span_tag="<span class='glyphicon glyphicon-thumbs-up'>like:"+like+"</span></button><hr>";
var message_tag="<h4 class='message_h4'>"+meassage+"</h4>";
var row=nameverify+message_tag+like_bt+span_tag;
document.getElementById("output").innerHTML=row;

//End code
      } });  }); }


getData();
 var username=localStorage.getItem("username");
 var room_name=localStorage.getItem("room name");
function send(){
      var sent_msg=document.getElementById("input_msg").value;
      firebase.database().ref(room_name).push({
            like:0,
            name:username,
            message:sent_msg

      });
      document.getElementById("input_msg").value="";
}

function 
updatelike(message_id){ console.log("clicked on like button - " + message_id);
button_id = message_id;
likes = document.getElementById(button_id).value;
updated_likes = Number(likes) + 1;

firebase.database().ref(room_name).child(message_id).update({ like : updated_likes }); }