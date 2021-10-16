// import { render } from "@testing-library/react";
import React, { useEffect } from "react";
import "./App.css";
// import Login from "./components/Login";
// import Logout from "./components/LogOut";
import firebase from "./Firebase/firebase";

function App() {
  useEffect(() => {
    console.log(firebase);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Test <code>Firebase</code> here.
        </p>
      </header>
      <Login />
      <Logout />
    </div>
  );
}

export default App;
