import { collection, doc, getDocs, increment, query, setDoc, where } from 'firebase/firestore';
import { db } from '../config/firebase';

const getAllideas = async (callback) => {
    const collectionDb = collection(db, "ideas");
    await getDocs(collectionDb)
        .then((docs) => {
            callback(null, docs);
        })
        .catch((error) => {
            console.error(error);
            callback(error, null);
        });
}


/// give docs (Return value)
// can access each doc -> docs.forEach((doc) => {  rest of the code })

// const getideasByUid = async (uid, callback) => {
//     const collection = collection(db, "ideas");
//     const query = query(collection, where("uid" == uid));
//     await getDocs(query).then((docs) => {
//         callback(null, docs)   
//     }).catch((error) => {
//         console.error(error);
//         callback(error, null);
//     });
// }
const getideasByUid = async (uid, callback) => {
    const collectionDb = collection(db, "ideas");
    const queryDb = query(collectionDb, where("uid", "==", uid)); // Use === for comparison
    try {
        const querySnapshot = await getDocs(queryDb);
        const docs = [];

        querySnapshot.forEach((doc) => {
            docs.push(doc.data());
        });

        callback(null, docs);
    } catch (error) {
        console.error(error);
        callback(error, null);
    }
};

/*
   data = {
    user_name : ...
    uid : ....  //user id from firebase auth
    title: ...
    body:....
    image: ....
    fields: [field1, field2]
    likes: ....
    views:.....
    status: ...... // Example -> under review (default value) or Approved

   }
*/
const addidea = async (data, callback) => {
    const docRef = doc(collection(db, "ideas"));
    try {
        await setDoc(docRef, data);
        callback(null, "Added Successfully")
    } catch (error) {
        console.log(error)
        callback(error, null)
    }
}

const updateBlogLike = async (ideaId, callback) => {
    const docRef = doc(db, "ideas", ideaId);
    await setDoc(docRef, {
        likes: increment(1)
    });
}

const updateBlogViews = async (blogId, callback) => {
    const docRef = doc(db, "ideas", blogId);
    await setDoc(docRef, {
        views: increment(1)
    });
}

export { getAllideas, getideasByUid, addidea, updateBlogLike, updateBlogViews };