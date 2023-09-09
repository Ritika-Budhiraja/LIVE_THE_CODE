import { collection, doc, getDocs, increment, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { db } from "../config/firebase";

const getAllBlogs = async (callback) => {
    const collectionDb = collection(db, "blogs");
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

const getBlogsByUid = async (uid, callback) => {
    const collectionDb = collection(db, "blogs");
    const queryDb = query(collectionDb, where("uid", "==", uid));
    // await getDocs(query).then((docs) => {
    //     callback(null, docs)   
    // }).catch((error) => {
    //     console.error(error);
    //     callback(error, null);
    // });
    try {
        const querySnapshot = await getDocs(queryDb);
        console.log(querySnapshot);
        const docs = [];
        console.log(uid);
        querySnapshot.forEach((doc) => {
            docs.push(doc.data());
        });
        callback(null, docs);
    } catch (error) {
        console.error(error);
        callback(error.message, null);
    }
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

const updateBlogLike = async (blogId) => {
    const docRef = doc(db, "blogs", blogId);
    await updateDoc(docRef, {
      likes: increment(1)
    });
  };
  
  const updateBlogViews = async (blogId) => {
    const docRef = doc(db, "blogs", blogId);
    await updateDoc(docRef, {
      views: increment(1)
    });
  };

export { getAllBlogs, getBlogsByUid, addBlog, updateBlogLike, updateBlogViews };