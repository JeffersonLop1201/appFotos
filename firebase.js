import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBjyTcvNECFXoohio5dzEYo0xGo5pzY-pY",
  authDomain: "appfotoscartoon.firebaseapp.com",
  projectId: "appfotoscartoon",
  storageBucket: "appfotoscartoon.appspot.com",
  messagingSenderId: "331767735764",
  appId: "1:331767735764:web:7d218479c04102e87fe241",
  measurementId: "G-QCZXF84KLT"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const fire = getFirestore(app);