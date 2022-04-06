import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider,signOut,onAuthStateChanged, getAuth, signInWithPopup ,signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import { getFirestore,doc,getDoc,setDoc,collection,writeBatch,query,getDocs} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyC8sVvimVytdOcfboEIarIatKwyPwSJRWo",
  authDomain: "shopping-site-v2-3fb5e.firebaseapp.com",
  projectId: "shopping-site-v2-3fb5e",
  storageBucket: "shopping-site-v2-3fb5e.appspot.com",
  messagingSenderId: "90896672755",
  appId: "1:90896672755:web:5cee4d534b4e705fda1486"
};

const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
   prompt:'select_account'
})

export const auth = getAuth()
const signInWithGooglePopUp = () => signInWithPopup(auth,provider)
export default signInWithGooglePopUp;

export const db = getFirestore()

export const addCollectionAndDocuments = async (collectionKey, itemsToAdd) => {
   const collectionRef = collection(db, collectionKey);
   const batch = writeBatch(db);
   itemsToAdd.forEach((item) => {
      const docRef = doc(collectionRef, item.title.toLowerCase());
      batch.set(docRef, item);
   })
   await batch.commit()
   console.log("katam")
}

export const getCategoriesAndDocuments = async() => {
   const collectionRef = collection(db, 'category');
   const q = query(collectionRef);
   const querySnapShot = await getDocs(q)
   const Category = querySnapShot.docs.reduce((acc, snapShot) => {
      const { title, items } = snapShot.data();
      acc[title.toLowerCase()] = items
      return acc;
   },{})

   return Category;
}


export const createUserProfile = async (user,additionalData = {}) => {
   console.log(user)
   const userRef = doc(db, 'users', user.uid)
   const userSnap = await getDoc(userRef)
   if (!userSnap.exists()) {
      const { displayName, email } = user
      const createdAt = new Date()

      try {
         await setDoc(userRef, {
            displayName,
            email,
            createdAt,
            ...additionalData
         })
      } catch (error) {
         console.log(error.message)
      }
   }

   return userRef
}

export const createUserAuthWithEmailAndPassword = async (email, password) => {
   if (!email || !password) {
      return
   }
   return await createUserWithEmailAndPassword(auth,email,password)
}

export const signInUserAuthWithEmailAndPassword = async (email, password) => {
   if (!email || !password) {
      return
   }
   return await signInWithEmailAndPassword(auth,email,password)
}

export const signOutUser = async () => { await signOut(auth) }

export const onAuthUserStateChange = (callback)=>onAuthStateChanged(auth,callback)

