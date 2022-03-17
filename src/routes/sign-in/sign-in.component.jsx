import signInWithGooglePopUp from "../../utilities/firebase.utility";
import { createUserProfile } from "../../utilities/firebase.utility";
const SignIn = () => {
   const loggerIn = async () => {
      const {user} = await signInWithGooglePopUp()
      const userRefDoc = await createUserProfile(user)
   }
  return (
    <div>
        <h1>sign in component working</h1>
        <button onClick={loggerIn}>click</button>
    </div>
  );
};

export default SignIn;
