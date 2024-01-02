// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCt_Qpe9MCU2ALXSLoiX55DSJh2nFK5By0",
    authDomain: "clone-42f3d.firebaseapp.com",
    projectId: "clone-42f3d",
    storageBucket: "clone-42f3d.appspot.com",
    messagingSenderId: "479952034564",
    appId: "1:479952034564:web:f2a6e976aaf6f21bf40e51",
    measurementId: "G-QKSYTGQEG5"
  };

  const firebaseApp =  firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{db, auth};
