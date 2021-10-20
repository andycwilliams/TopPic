import { render } from "@testing-library/react";
import "./App.css";
import React, { useEffect } from "react";
import MainLandingPage from "./components/MainLandingPage";
import ExplorePage from "./components/ExplorePage";


function App() {

  const handlePageChange = (e) => {
    e.preventDefault();
    console.log('clicked to change pages')
    //TODO: CREATE FUNCTION TO HANDLE PAGE CHANGE... SWITCH CASE? ROUTER-DOM
  }
  return (
    <div>
      <div className='flex flex-col justify-center items-center h-screen bg-photo-collage bg-no-repeat bg-fixed bg-cover'>

      <MainLandingPage />

        <div className='flex justify-center items-center w-2/4 h-1/6 bg-gray-200 bg-opacity-90'>
          <a href='/' onClick={handlePageChange}>Continue without Signing In</a>
        </div>

      </div>
    {/*^^ FIX PAGE TO ROUTE TO EXPLORE PAGE ON BUTTON CLICK ^^ THIS SHOULD NOT BE DISPLAYING UNTIL BUTTON IS CLICKED*/}
    <ExplorePage />
  </div>
  );
}

export default App;
