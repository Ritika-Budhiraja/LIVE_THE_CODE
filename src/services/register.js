import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { addUserData } from './firestore';
import app from '../config/firebase'

function register(data, callback) {   // data = {name,email, password.....} & callback = (error, data)

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, data.email, data.password).then((userCredential) => {
        const user = userCredential.user;
        const uid = user.uid;
        console.log("uid", uid)

        // now using uid add all user data in firestore
        try {
            addUserData(uid, data)
            callback(null, { code: 1, message: "User Regsitered" })
        } catch (error) {
            callback(error, null)
        }

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("auth error", error);
    });
}

export default register;