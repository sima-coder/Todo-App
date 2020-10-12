import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyAnIZOHbWHAjHyrCilO58aWJcCEpE2GX0A",
    authDomain: "todo-app-a6413.firebaseapp.com",
    databaseURL: "https://todo-app-a6413.firebaseio.com",
    projectId: "todo-app-a6413",
    storageBucket: "todo-app-a6413.appspot.com",
    messagingSenderId: "862494997405",
    appId: "1:862494997405:web:6d411990827e6f9d900d74"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;