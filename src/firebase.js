// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// import { getStorage } from "firebase/storage";


// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_KEY,
//   authDomain: "tutorial-5a2cf.firebaseapp.com",
//   projectId: "tutorial-5a2cf",
//   storageBucket: "tutorial-5a2cf.appspot.com",
//   messagingSenderId: "585126334212",
//   appId: "1:585126334212:web:8539eafc56885e1b4c4a51"
// };

// const app = initializeApp(firebaseConfig);
// export const db = getFirestore(app);
// export const auth = getAuth();
// export const storage = getStorage(app);

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  apiKey: "AIzaSyCHZOI2Eby8pebi7dad1wM-y-FkBrwb74I",
  authDomain: "eduapp-27da8.firebaseapp.com",
  projectId: "eduapp-27da8",
  storageBucket: "eduapp-27da8.appspot.com",
  messagingSenderId: "190219366368",
  appId: "1:190219366368:web:4aa1fafac139aedcba8585",
  measurementId: "G-ZHEPK9FWTX"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
