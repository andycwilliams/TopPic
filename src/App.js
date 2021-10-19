import { render } from "@testing-library/react";
import "./App.css";
import React, { useEffect } from "react";
import Login from "./components/Login";
import ExplorePage from "./components/ExplorePage";


function App() {
  return (
    <div>
    <div className='flex flex-col justify-center items-center h-screen bg-photo-collage bg-no-repeat bg-fixed bg-cover'>

      <div className='flex flex-col justify-center items-center w-2/4 h-2/6 bg-gray-200 bg-opacity-90'>
        <p className='text-7xl my-6'>Top Pic</p>
        <p className='text-xl'>Find Your Inspiration</p>
      </div>

      <div className='flex justify-center items-center w-2/4 h-1/6 bg-gray-200 bg-opacity-90'>
        <Login />
      </div>

      <div className='flex justify-center items-center w-2/4 h-1/6 bg-gray-200 bg-opacity-90'>
        <a href='/'>Continue without Signing In</a>
      </div>
      
    </div>
    {/*FIX PAGE TO ROUTE TO EXPLORE PAGE ON BUTTON CLICK */}
    <ExplorePage />
    </div>

  );
}

export default App;
