// Import the functions you need from the SDKs you need
import * as firebase from 'firebase';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyA_ls-z-p7LP8qMjRP0acTs_EH9GVMkMjI',
  authDomain: 'ait-foodhero.firebaseapp.com',
  projectId: 'ait-foodhero',
  storageBucket: 'ait-foodhero.appspot.com',
  messagingSenderId: '1071813350947',
  appId: '1:1071813350947:web:99d58372bb445f145dc396',
};

// Initialize Firebase
if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const firebaseAuth = firebase.auth();

export { firebaseAuth };
