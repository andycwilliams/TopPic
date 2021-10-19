import { render } from "@testing-library/react";
import "./App.css";
// import ImageUpload from "./components/ImageUpload/";
import React, { useEffect } from "react";
import Login from "./components/Login";
// import Logout from "./components/LogOut";

function App() {
  return (
    <div className='flex flex-col justify-center items-center w-screen h-screen bg-photo-collage bg-no-repeat bg-cover'>
      <div className='flex flex-col justify-center items-center w-2/4 h-2/6 bg-gray-200 bg-opacity-90'>
        <p className='text-5xl my-3'>Top Pic</p>
        <p>Your Inspiration Station</p>
      </div>
      <div className='flex justify-center items-center w-2/4 h-1/6 bg-gray-200 bg-opacity-90'>
        <div className='flex justify-center items-center w-2/4'>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default App;
