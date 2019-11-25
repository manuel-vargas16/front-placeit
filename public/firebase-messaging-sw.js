importScripts('https://www.gstatic.com/firebasejs/5.7.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/5.7.2/firebase-messaging.js');

const firebaseConfig = {
  apiKey: "AIzaSyDWFlij3mYaSJg1s0HVuWiF5556NN6O7fQ",
  authDomain: "notificacionespush-d7c99.firebaseapp.com",
  databaseURL: "https://notificacionespush-d7c99.firebaseio.com",
  projectId: "notificacionespush-d7c99",
  storageBucket: "notificacionespush-d7c99.appspot.com",
  messagingSenderId: "104942081680",
  appId: "1:104942081680:web:7a3138fa88bd3e95"
};

firebase.initializeApp( firebaseConfig );

const messaging = firebase.messaging();