import React, {useState} from "react";
import SignInSide from "../User/Signin";
import SignUpForm from "../User/Signup";

function Login() {
  const [alreadyHaveAccount, setAlreadyHaveAccount] = useState(false);
  
  return (
    <div>
      <br />
      <br />
      {
        !alreadyHaveAccount
        ? <SignInSide setAlreadyHaveAccount={setAlreadyHaveAccount}/>
        : <SignUpForm  setAlreadyHaveAccount={setAlreadyHaveAccount}/>
      }
      </div>
  );
}


export default Login;
