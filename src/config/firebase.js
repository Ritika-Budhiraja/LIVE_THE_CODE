import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyASznZKyTI44wWVCGDdd9GydNPAMIr1Rz8",
    authDomain: "mitr-77a77.firebaseapp.com",
    projectId: "mitr-77a77",
    storageBucket: "mitr-77a77.appspot.com",
    messagingSenderId: "581041628165",
    appId: "1:581041628165:web:71e719d9782e8ffafce86c",
    measurementId: "G-6PRCM0JR1N"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app;