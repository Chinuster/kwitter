
//ADD YOUR FIREBASE LINKS'
var firebaseConfig = {
    apiKey: "AIzaSyD_PGB3BvmTUBwvtnLMHJ-PkyyclyyOSyY",
    authDomain: "kwitter-173d9.firebaseapp.com",
    databaseURL: "https://kwitter-173d9-default-rtdb.firebaseio.com",
    projectId: "kwitter-173d9",
    storageBucket: "kwitter-173d9.appspot.com",
    messagingSenderId: "83646245061",
    appId: "1:83646245061:web:b6a914ea9ce150e54ee8ac"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function add_name(){
    var username=document.getElementById("name_input").value;
    firebase.database().ref("/").child(username).update({
        purpose:"add_username"
    });
}