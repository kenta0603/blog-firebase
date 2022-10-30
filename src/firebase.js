import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDWzowZkHRphuTTwkbnDVBcOxwF8dZZnZQ",
  authDomain: "blog-1fa7e.firebaseapp.com",
  projectId: "blog-1fa7e",
  storageBucket: "blog-1fa7e.appspot.com",
  messagingSenderId: "126695946715",
  appId: "1:126695946715:web:9a70f2b1f7e2c25f16cffe"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };