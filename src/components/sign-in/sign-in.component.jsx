import "./sign-in.styles.scss";
import signInWithGooglePopUp from "../../utilities/firebase.utility";
import { signInUserAuthWithEmailAndPassword } from "../../utilities/firebase.utility";
import { createUserProfile } from "../../utilities/firebase.utility";
import { useState } from "react";
import CustomButton from "../customButton/custom-button.component";
import FormInput from "../Form-input/form-input.component";
const defaultFormFields = {
  email: "",
  password: "",
};
const SignInForm = () => {
  const loggerIn = async () => {
    const { user } = await signInWithGooglePopUp();
    const userRefDoc = await createUserProfile(user);
  };
  const [formFields, setFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const onSubmitHandle = async (event) => {
     event.preventDefault();
     console.log('event clciked')
     try {
        const response = await signInUserAuthWithEmailAndPassword(email, password)
        console.log(response)
     } catch (error) {
        console.log(error.code)
     }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFields({
      ...formFields,
      [name]: value,
    });
  };
  return (
    <div className="sign-up-form">
      <h2>I already have an account</h2>
      <span>sign in with email and password</span>
      <form onSubmit={onSubmitHandle}>
        <FormInput
          label="email"
          type="email"
          required
          value={email}
          onChange={handleChange}
          name="email"
        />
        <FormInput
          label="password"
          type="password"
          required
          value={password}
          onChange={handleChange}
          name="password"
        />

        <div className="buttons-container">
          {" "}
              <CustomButton type="submit">SIGNIN</CustomButton>
          <CustomButton type = "button" buttonType="google" onClick={loggerIn}>
            GOOGLE SIGN 
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
