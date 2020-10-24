importScripts("https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js"
);
const firebaseConfig = {
  apiKey: "AIzaSyBbfG6208BZxyHZh20rx-LCMAgFOLSHHJE",
  authDomain: "expense-tracker-b703d.firebaseapp.com",
  databaseURL: "https://expense-tracker-b703d.firebaseio.com",
  projectId: "expense-tracker-b703d",
  storageBucket: "expense-tracker-b703d.appspot.com",
  messagingSenderId: "709090101557",
  appId: "1:709090101557:web:6851aa5be05423de28a47c",
  measurementId: "G-R8FL7174V8",
};
firebase.initializeApp(firebaseConfig);

firebase.messaging();
