
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyAoLpjcMKE3MTfEIzBlNDwK7zSVu6xqfxQ",
    authDomain: "kppnmajene-059.firebaseapp.com",
    projectId: "kppnmajene-059",
    storageBucket: "kppnmajene-059.appspot.com",
    messagingSenderId: "546221480890",
    appId: "1:546221480890:web:93a2127b46557acc6d5b83",
    measurementId: "G-1LWFGCZKYE"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  window.firebaseConfig = { auth, db };
