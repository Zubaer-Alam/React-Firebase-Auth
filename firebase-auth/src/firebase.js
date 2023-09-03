import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBFDR1IXKEFuI_vfwjY4BZbG-HegjVS_28",
  authDomain: "auth-development-2051.firebaseapp.com",
  projectId: "auth-development-2051",
  storageBucket: "auth-development-2051.appspot.com",
  messagingSenderId: "722864534211",
  appId: "1:722864534211:web:ebb61528b84c57a2d7a876",
});

const auth = app.auth();

export { auth };

export default app;
