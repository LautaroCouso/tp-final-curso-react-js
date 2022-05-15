import firebase from 'firebase/compat/app';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC5cNUIN20CntgMEIgch9HWNEGVK7NHI8g',
  authDomain: 'tp-final-curso-react-js.firebaseapp.com',
  projectId: 'tp-final-curso-react-js',
  storageBucket: 'tp-final-curso-react-js.appspot.com',
  messagingSenderId: '29613371496',
  appId: '1:29613371496:web:d67b62aa5d98c671244bdd'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.auth = firebase.auth();

export default firebase;
