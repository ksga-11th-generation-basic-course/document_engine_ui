import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCNA-_7bzt3PO58hUv65BZXr4aMAvnEMjo",
  authDomain: "docengine-7e623.firebaseapp.com",
  projectId: "docengine-7e623",
  storageBucket: "docengine-7e623.appspot.com",
  messagingSenderId: "814285348673",
  appId: "1:814285348673:web:0c603976d14aa4413ccbc0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();
const providerFacebook = new FacebookAuthProvider();
export const storage = getStorage(app);
export { auth, providerGoogle, providerFacebook };
