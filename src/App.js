import { render } from "@testing-library/react";
import "./App.css";
import Login from "./componets/Login";
import Logout from "./componets/LogOut";
import ImageUpload from "./componets/ImageUpload/";
// import { render } from "@testing-library/react";
import React, { useEffect } from "react";
// import Login from "./components/Login";
// import Logout from "./components/LogOut";
import firebase from "./Firebase/firebase";

function App() {
  useEffect(() => {
    console.log(firebase);
  }, []);

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
