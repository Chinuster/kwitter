function add_username(){
    var username=document.getElementById("username_box").value;
    localStorage.setItem("username",username);
    window.location="kwitter_room.html";
}
