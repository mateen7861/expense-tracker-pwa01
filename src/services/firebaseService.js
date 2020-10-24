import firebase from "firebase";

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
const messaging = firebase.messaging();

export function initNotification() {
  Notification.requestPermission().then((permission) => {
    console.log(permission);
    if (permission === "granted") {
      messaging
        .getToken()
        .then((currentToken) => {
          if (currentToken) {
            console.log("tok");
          } else {
            console.log(
              "No Instance ID token available. Request permission to generate one."
            );
          }
        })
        .catch((err) => {
          console.log("An error occurred while retrieving token. ", err);
        });
    }
  });
}
