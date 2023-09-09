import auth from '../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';
import {getUserData} from './firestore';

function login(data, callback) {  //callback = (error, result)

    signInWithEmailAndPassword(auth, data.email, data.password).then((userCredential) => {
        const user = userCredential.user;
        const uid = user.uid;
    
        // now using uid get all user data from firestore
        getUserData(uid, (error, results) => {
            if(error){
                //handle errors
                callback(error, null)
            }
            if(results){
                // use this result to show data in profile
                callback(null, data)
            } else {
                callback("user not exist", null)
            }
        })
        

    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error("auth error - "+errorCode+" "+errorMessage);
        callback(error, null)
    });
};

export default login;