import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAo4rA60fXyW0GrYtthne4_1SloQZrL3CE",
  authDomain: "burger-builder-6d165.firebaseapp.com",
  projectId: "burger-builder-6d165",
  storageBucket: "burger-builder-6d165.appspot.com",
  messagingSenderId: "795984870829",
  appId: "1:795984870829:web:9ed1cad2fe899a49b8b524",
  measurementId: "G-XYQHT2MMZP"
};


const app = initializeApp(firebaseConfig);

export const auth= getAuth(app);
