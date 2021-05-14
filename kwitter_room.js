
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyB34hIcL5hpQ0HnehJedlD4oiLKbBNIHLU",
      authDomain: "social-website-b5852.firebaseapp.com",
      projectId: "social-website-b5852",
      storageBucket: "social-website-b5852.appspot.com",
      messagingSenderId: "817257090852",
      appId: "1:817257090852:web:1dce5d6ce6c5ba2e8dedb1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
