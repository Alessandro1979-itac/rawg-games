import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBdNabSHlGJJMcgyeU1yWl43CvSkvFiWCI',
  authDomain: 'rawg-games-c2145.firebaseapp.com',
  projectId: 'rawg-games-c2145',
  storageBucket: 'rawg-games-c2145.appspot.com',
  messagingSenderId: '1088824930170',
  appId: '1:1088824930170:web:cb4daac03945b4b05430c3',
  measurementId: 'G-LNQMNEPCLD'
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.EmailAuthProvider = app.auth.EmailAuthProvider;
    this.auth = app.auth();
    this.db = app.firestore();
    this.storage = app.storage();
  }
}

export default new Firebase();
