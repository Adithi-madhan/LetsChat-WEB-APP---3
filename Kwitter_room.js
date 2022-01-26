// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCdvaxyDgY6UBBeVqJcrfB4mYiH94WzfIo",
    authDomain: "project-94-901d5.firebaseapp.com",
    databaseURL: "https://project-94-901d5-default-rtdb.firebaseio.com",
    projectId: "project-94-901d5",
    storageBucket: "project-94-901d5.appspot.com",
    messagingSenderId: "963130081956",
    appId: "1:963130081956:web:680c467328762c5742dc31"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);


  function add_room() 
  {
        room_name = document.getElementById("room_name").value;
  
        firebase.database().ref("/").child(room_name).update({
              purpose : "add room name"
        });
            
        localStorage.setItem("room_name", room_name);
        window.location = "Kwitter_page.html";
  }
  
  
  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Start code
         console.log("Room_names - " + Room_names);
         row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'> #"+Room_names +"</div><hr>";
         document.getElementById("output").innerHTML += row;
        //End code
        });});}
  getData();
  
  function redirectToRoomName(name)
  {
  
        console.log(name);
        localStorage.setItem("room_name" , name);
        window.location = "Kwitter_page.html";
  }
  
  function logout() {
  
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
        window.location = "index.html";
  }
  