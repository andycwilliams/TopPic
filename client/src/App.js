// import { render } from "@testing-library/react";
import "./App.css";
import React, { useState } from "react";
import MainLandingPage from "./components/MainLandingPage";
import ExplorePage from "./components/ExplorePage";

function App() {
  const handlePageChange = (e) => {
    e.preventDefault();
    console.log("clicked to change pages");
    //TODO: CREATE FUNCTION TO HANDLE PAGE CHANGE... SWITCH CASE? ROUTER-DOM
  };
  return (
    <div>
      <div className='flex flex-col justify-center items-center h-screen bg-photo-collage bg-no-repeat bg-fixed bg-cover'>
        <button onClick={() => fetch("/api").then(res => console.log(res))}>Click for api</button>
      <MainLandingPage />

  const renderPage = () => {
    console.log('RENDER APPJS component', currentPage);
    //Sswitch case 
    switch (currentPage) {
      case 'Main':
        return <MainLandingPage handlePageChange={handlePageChange} currentPage={'Main'} />;
      case 'Explore':
        return <ExplorePage />;
      default:
        return <MainLandingPage handlePageChange={handlePageChange} currentPage={'Main'} />
    }
  }

  return (
    <div>
      <div className='flex flex-col justify-center items-center h-screen bg-photo-collage bg-no-repeat bg-fixed bg-cover'>
        {/* By default its render MAin Planding page  */}
        {renderPage()}
        {/* hide or  show this button once the user logins in without signin   */}
        {currentPage === 'Explore' ? <div></div> :
          <div className='flex justify-center items-center w-2/4 h-1/6 bg-gray-200 bg-opacity-90'>
            {/* on click of this button its render the explore page  */}
            <a href='/' name='Explore' onClick={(e) => handlePageChange('Explore', e)} > Continue without Signing In</a>
          </div>
        }
      </div>

    </div>
  );
}

export default App;
