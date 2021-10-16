import { render } from "@testing-library/react";
import "./App.css";
import ImageUpload from "./componets/ImageUpload/";
import React, { useEffect } from "react";
// import Login from "./components/Login";
// import Logout from "./components/LogOut";

function App() {
  return (
    <div className="App">
      <ImageUpload />
      <header className="App-header">
        <p>
          Test <code>Firebase</code> here.
        </p>
      </header>
      {/* <Login />
      <Logout /> */}
    </div>
  );
}

export default App;
