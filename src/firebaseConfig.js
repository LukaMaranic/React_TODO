import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDeCxViQVvuIs4dV_WC7IE--ngXWD1uGiw",
  authDomain: "monoapi-85701.firebaseapp.com",
  projectId: "monoapi-85701",
  storageBucket: "monoapi-85701.appspot.com",
  messagingSenderId: "437116662087",
  appId: "1:437116662087:web:763a0bb3d1783627801c62",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

signInAnonymously(auth)
  .then(() => {
    console.log("Signed in anonymously");
  })
  .catch((error) => {
    console.error("Anonymous sign-in failed:", error);
  });

export { db, auth };
