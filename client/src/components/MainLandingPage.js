import React from "react";
import Login from "./Login";
// this is the fist page to load it has the name of the site as well as our login feature and links to the page change functionality  
const MainLandingPage = ({ handlePageChange, currentPage }) => {
  return (
    <div className="flex flex-col justify-center items-center w-2/4 h-screen bg-gray-200 bg-opacity-90">
      <p className="text-7xl my-6">Top Pic</p>
      <p className="text-xl">Find Your Inspiration</p>
      <div className="flex justify-center items-center w-2/4 h-1/6 mt-10">
        <Login handlePageChange={handlePageChange} />
      </div>
 
      <div>
        <p className="m-1 absolute top-0 left-0 bg-gray-200 rounded-lg">
          <p>
            <a href="https://github.com/andycwilliams/TopPic">
              view the github repository for this project
            </a>
          </p>
        </p>
      </div>
    </div>
  );
};
// there the class above is a button that sends you to the github for this project.
//  you may notice that there is a Continue without Signing In on the main page the code behind that is on the app.js page.
export default MainLandingPage;
