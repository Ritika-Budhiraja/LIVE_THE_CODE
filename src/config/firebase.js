import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyASznZKyTI44wWVCGDdd9GydNPAMIr1Rz8",
    authDomain: "mitr-77a77.firebaseapp.com",
    projectId: "mitr-77a77",
    storageBucket: "mitr-77a77.appspot.com",
    messagingSenderId: "581041628165",
    appId: "1:581041628165:web:71e719d9782e8ffafce86c",

  };

const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
export default app;