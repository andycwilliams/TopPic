import { render } from "@testing-library/react";
import React from "react";
import "./App.css";
import Login from "./components/Login";
import Logout from "./components/LogOut";

function App() {
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
