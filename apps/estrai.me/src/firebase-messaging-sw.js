importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.16.1/firebase-messaging.js');

firebase.initializeApp({
  apiKey: 'AIzaSyD4cnxAH8bU-I3ZJy9T8MItB92_WGVqCCc',
  authDomain: 'raffle-1dd52.firebaseapp.com',
  projectId: 'raffle-1dd52',
  storageBucket: 'raffle-1dd52.appspot.com',
  messagingSenderId: '123552527109',
  appId: '1:123552527109:web:7d5d012f5739d8be303d6c',
  measurementId: 'G-M4E7953243',
});
const messaging = firebase.messaging();
