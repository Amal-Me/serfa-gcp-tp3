  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyA3yHDcc13AW2bW2w-Vx0GybzXSU0WykrI",
    authDomain: "apptick-414810.firebaseapp.com",
    projectId: "apptick-414810",
    storageBucket: "apptick-414810.appspot.com",
    messagingSenderId: "776871754545",
    appId: "1:776871754545:web:865dc4630393a840508e10",
    measurementId: "G-604D39DY6M"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);