import { collection, collection, doc, doc, getDocs, getFirestore, increment, query, setDoc, where } from 'firebase/firestore'
import app from '../config/firebase'

const db = getFirestore(app)

const getAllideas = async (callback) => {
    const collection = collection(db, "ideas");
    await getDocs(collection)
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

const getideasByUid = async (uid, callback) => {
    const collection = collection(db, "ideas");
    const query = query(collection, where("uid" == uid));
    await getDocs(query).then((docs) => {
        callback(null, docs)   
    }).catch((error) => {
        console.error(error);
        callback(error, null);
    });
}

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
const addBlog = async (data, callback) => {
    const docRef = doc(collection(db, "ideas"));
    try {
        await setDoc(docRef, data);
        callback(null, "Added Successfully")
    } catch (error) {
        console.log(error)
        callback(error, null)
    }
}

const updateBlogLike = async(ideaId, callback) => {
    const docRef = doc(db, "ideas", ideaId);
    await setDoc(docRef, {
        likes : increment(1)
    });
}

const uppdateBlogViews = async(blogId, callback) => {
    const docRef = doc(db, "ideas", blogId);
    await setDoc(docRef, {
        views : increment(1)
    });
}

export default {getAllideas, getideasByUid, addBlog, updateBlogLike, uppdateBlogViews};