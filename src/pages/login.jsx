import { useState } from "react";
import "../styles/login.css";

let Login = () => {


  let[email,setEmail] = useState("");
  let [password,setPassword] = useState("");

  return (

        <div className="login-content">
          <input type="text" id="usernameX" />
          <input type="text" id="passwordX" />

          <button>Login</button>
        </div>
  );
};

export default Login;
