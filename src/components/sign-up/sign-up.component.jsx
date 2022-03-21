import "./sign-up.styles.scss";
import { useState } from "react";
import { createUserAuthWithEmailAndPassword } from "../../utilities/firebase.utility";
import CustomButton from "../customButton/custom-button.component";
import { createUserProfile } from "../../utilities/firebase.utility";
import FormInput from "../Form-input/form-input.component";
const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUpForm = () => {
  const [formFields, setFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const onSubmitHandle = async (event) => {
    event.preventDefault();
    if (password != confirmPassword) {
      alert("password not match ");
      return;
    }

    try {
      const { user } = await createUserAuthWithEmailAndPassword(
        email,
        password
      );
       await createUserProfile(user, { displayName });
       setFields(defaultFormFields)
    } catch (error) {
      if (error.code == "auth/email-already-in-use") {
        alert("email already exitst");
      }
      console.log("user not created", error.message);
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
        <h2>I don't have an account</h2>
        <span>create account with email and password</span>
      <form onSubmit={onSubmitHandle}>
           <FormInput
              label="name"
          name="displayName"
          type="text"
          value={displayName}
          required
          onChange={handleChange}
        />
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
           <FormInput
           label="confirmPassword"
          type="password"
          required
          value={confirmPassword}
          onChange={handleChange}
          name="confirmPassword"
        />
       <CustomButton buttonType = "google" type="submit">SIGNUP</CustomButton>
      </form>
    </div>
  );
};

export default SignUpForm;
