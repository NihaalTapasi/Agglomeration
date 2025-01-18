import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyBIfFs_76KN0Mx6vLbeni8j2QIqEDfOOLE",
  authDomain: "authentication-final-4e0cf.firebaseapp.com",
  projectId: "authentication-final-4e0cf",
  storageBucket: "authentication-final-4e0cf.firebasestorage.app",
  messagingSenderId: "899696975212",
  appId: "1:899696975212:web:3aa5337e8d6014de98a749"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


const submit = document.getElementById('login');


submit.addEventListener("click", function (event) {
  event.preventDefault();


  
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;


  signInWithEmailAndPassword(auth,email, password)
    .then((userCredential) => {
     
      const user = userCredential.user;
      
      window.location.href = "mainpage.html";
    })
    .catch((error) => {
    
      const errorMessage = error.message;
      alert(`Error: ${errorMessage}`); 
    });
});
