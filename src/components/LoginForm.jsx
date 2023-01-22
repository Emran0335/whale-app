import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./subcomponents/Button";
import TextInput from "./subcomponents/TextInput";

const LoginForm = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  return (
    <form action="#">
      <TextInput
        type="text"
        placeholder="Enter email"
        icon="alternate_email"
        required
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
      />
      <TextInput
        type="text"
        placeholder="Enter email"
        icon="lock"
        required
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
      />
      <Button type="submit">
        <span>Submit Now</span>
      </Button>
      <div className="info">
        Don't have an account? <Link to="/signup">Signup</Link> instead.
      </div>
    </form>
  );
};

export default LoginForm;
