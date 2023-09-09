import { collection, collection, doc, doc, getDocs, getFirestore, increment, query, setDoc, where } from 'firebase/firestore'
import app from '../config/firebase'

const db = getFirestore(app)

const getAllBlogs = async (callback) => {
    const collection = collection(db, "blogs");
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

const getBlogsByUid = async (uid, callback) => {
    const collection = collection(db, "blogs");
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

   }
*/
const addBlog = async (data, callback) => {
    const docRef = doc(collection(db, "blogs"));
    try {
        await setDoc(docRef, data);
        callback(null, "Added Successfully")
    } catch (error) {
        console.log(error)
        callback(error, null)
    }
}

const updateBlogLike = async(blogId, callback) => {
    const docRef = doc(db, "blogs", blogId);
    await setDoc(docRef, {
        likes : increment(1)
    });
}

const uppdateBlogViews = async(blogId, callback) => {
    const docRef = doc(db, "blogs", blogId);
    await setDoc(docRef, {
        views : increment(1)
    });
}

export default {getAllBlogs, getBlogsByUid, addBlog, updateBlogLike, uppdateBlogViews};