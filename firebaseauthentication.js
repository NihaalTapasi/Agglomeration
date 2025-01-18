import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";
import { getDatabase, ref, push, set } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";



const firebaseConfig = {
  apiKey: "AIzaSyBIfFs_76KN0Mx6vLbeni8j2QIqEDfOOLE",
  authDomain: "authentication-final-4e0cf.firebaseapp.com",
  databaseURL: "https://authentication-final-4e0cf-default-rtdb.firebaseio.com/",
  projectId: "authentication-final-4e0cf",
  storageBucket: "authentication-final-4e0cf.firebasestorage.app",
  messagingSenderId: "899696975212",
  appId: "1:899696975212:web:3aa5337e8d6014de98a749"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

const submit = document.getElementById('submit');

submit.addEventListener("click", function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value; 
  const email = document.getElementById('email').value; 
  const password = document.getElementById('password').value;


  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      alert("Account created successfully!");
      
   
      

      window.location.href = "loginpage.html"; 
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert("Enter all details!");
    });
});

const signinFormDB = ref(database, 'details of all people');


function savedata(name, email, phonenumber, project, college) {
  const newsigninform = push(signinFormDB);

  set(newsigninform, {
    name: name,
    email: email,
    phonenumber: phonenumber,
    projects: project, 
    college: college,
  })
  .then(() => {
    console.log("Data saved successfully!");
  })
  .catch((error) => {
    console.error("Error saving data:", error);
  });
}


