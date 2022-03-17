import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth'
import { getFirestore,doc,getDoc,setDoc} from 'firebase/firestore'
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

export const createUserProfile = async (user) => {
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
            createdAt
         })
      } catch (error) {
         console.log(error.message)
      }
   }

   return userRef
}

