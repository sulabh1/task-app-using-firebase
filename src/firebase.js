// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAsrIEgBMA0i2p-eRiz2C46913GsnsbszI",
//   authDomain: "todo-app-cp-35c7a.firebaseapp.com",
//   projectId: "todo-app-cp-35c7a",
//   storageBucket: "todo-app-cp-35c7a.appspot.com",
//   messagingSenderId: "627977742473",
//   appId: "1:627977742473:web:3d1827163091bf281a3e58",
//   measurementId: "G-P5F3CQW4JJ",
// };

import firebase from "firebase";
const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAsrIEgBMA0i2p-eRiz2C46913GsnsbszI",
  authDomain: "todo-app-cp-35c7a.firebaseapp.com",
  projectId: "todo-app-cp-35c7a",
  storageBucket: "todo-app-cp-35c7a.appspot.com",
  messagingSenderId: "627977742473",
  appId: "1:627977742473:web:3d1827163091bf281a3e58",
  measurementId: "G-P5F3CQW4JJ",
});
const db = firebaseApp.firestore();
export default db;
