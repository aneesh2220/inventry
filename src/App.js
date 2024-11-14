import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import FormI from "./pages/form.jsx";
import Dashboard from "./pages/dashboard.jsx";

function App() {
  return (
    <div className="App">
      <Dashboard/>
    </div>
  );
}

export default App;
