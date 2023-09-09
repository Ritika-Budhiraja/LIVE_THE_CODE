import app from '../config/firebase'
import { doc, getDoc, getFirestore, setDoc } from 'firebase/firestore'

const db = getFirestore(app)

const addUserData = async (uid, data) => {

    await setDoc(doc(db, "users", uid), {
        name: data.name,
        email: data.email,
        number: data.number,
        gender: data.gender,
        dob: data.dob,
        qualification: data.qualification
    }).catch((error => {
        console.error("firestore error - " + error);
    }))

}

const getUserData = async (uid, callback) => {
    const docRef = doc(db, "users", uid);
    try {
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
            const data = docSnap.data();
            callback(null, data)
        } else {
            console.error("firestore error - doc not exist")
            callback("doc not exit", null)
        }
    } catch (error) {
        console.error("firestore error - "+error);
        callback(error, null)
    }
}

export {addUserData, getUserData}


