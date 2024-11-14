import { useState } from "react";
import Login from "./login.jsx";
import Signup from "./signup.jsx";
import "../styles/login.css";



let Authpage = () => {
  let [activeTab, setTab] = useState(0);

  return (
    <div className="login-page">
      <div className="login-inbox">
        <h3>Log in</h3>
        <div className="login-button-group">
          <button onClick={() => setTab(0)}>Sign-in</button>
          <button onClick={() => setTab(1)}>Sign-up</button>
        </div>

        <div className="login-content">
          {activeTab === 0 ? <Login /> : <Signup />}
        </div>
      </div>
    </div>
  );
};

export default Authpage;
