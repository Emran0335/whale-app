import React from "react";
import Illustration from "../components/Illustration";
import SignupForm from "../components/SignupForm";
import '../style/layout.css';

const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <SignupForm />
      </div>
    </>
  );
};

export default Signup;
