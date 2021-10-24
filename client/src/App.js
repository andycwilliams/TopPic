import "./App.css";
import React, { useState } from "react";
import MainLandingPage from "./components/MainLandingPage";
import ExplorePage from "./components/ExplorePage";

function App() {
  const [currentPage, setCurrentPage] = useState("Main");

  const handlePageChange = (page, e) => {
    e.preventDefault();
    console.log("clicked to change pages", page);
    // TODO: CREATE FUNCTION TO HANDLE PAGE CHANGE... SWITCH CASE? ROUTER-DOM
    setCurrentPage(page);
  };

  const renderPage = () => {
    console.log("RENDER app.js component", currentPage);
    // Switch case
    switch (currentPage) {
      case "Main":
        return (
          <MainLandingPage
            handlePageChange={handlePageChange}
            currentPage={"Main"}
          />
        );
      case "Explore":
        return <ExplorePage />;
      default:
        return (
          <MainLandingPage
            handlePageChange={handlePageChange}
            currentPage={"Main"}
          />
        );
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-photo-collage bg-no-repeat bg-fixed bg-cover">
        {/* By default it renders Main Landing page */}
        {renderPage()}
        {/* Hide or  show this button once the user logins in without signin */}
        {currentPage === "Explore" ? (
          <div></div>
        ) : (
          <div className="hover:bg-blue-300 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50 flex justify-center items-center w-2/4 h-1/6 bg-gray-200 bg-opacity-90">
            {/* Flex justify-center items-center w-2/4 h-1/6 bg-gray-200 bg-opacity-90 */}
            {/* onClick renders the explore page  */}
            <a
              href="/"
              name="Explore"
              onClick={(e) => handlePageChange("Explore", e)}
              // This makes it so when you click the continue without sign in in you can view the rest of the application without signing in
            >
              {" "}
              Continue without Signing In
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;

// ----------------------------------------------------------------

// // import { render } from "@testing-library/react";
// import "./App.css";
// import React, { useEffect } from "react";
// import MainLandingPage from "./components/MainLandingPage";
// import ExplorePage from "./components/ExplorePage";

// function App() {
//   const handlePageChange = (e) => {
//     e.preventDefault();
//     console.log("clicked to change pages");
//     //TODO: CREATE FUNCTION TO HANDLE PAGE CHANGE... SWITCH CASE? ROUTER-DOM
//   };
//   return (
//     <div>
//       <div className='flex flex-col justify-center items-center h-screen bg-photo-collage bg-no-repeat bg-fixed bg-cover'>
//         <button onClick={() => fetch("/api").then(res => console.log(res))}>Click for api</button>
//       <MainLandingPage />

//         <div className='flex justify-center items-center w-2/4 h-1/6 bg-gray-200 bg-opacity-90'>
//           <a href='/' onClick={handlePageChange}>Continue without Signing In</a>
//         </div>

//       </div>
//     {/*^^ FIX PAGE TO ROUTE TO EXPLORE PAGE ON BUTTON CLICK ^^ THIS SHOULD NOT BE DISPLAYING UNTIL BUTTON IS CLICKED*/}
//     <ExplorePage />
//   </div>
//   );
// }

// export default App;

// ----------------------------------------------------------------

// // import { render } from "@testing-library/react";
// import "./App.css";
// import React, { useState } from "react";
// import MainLandingPage from "./components/MainLandingPage";
// import ExplorePage from "./components/ExplorePage";

// function App() {
//   const handlePageChange = (e) => {
//     e.preventDefault();
//     console.log("clicked to change pages");
//     //TODO: CREATE FUNCTION TO HANDLE PAGE CHANGE... SWITCH CASE? ROUTER-DOM
//   };
//   return (
//     <div>
//       <div className='flex flex-col justify-center items-center h-screen bg-photo-collage bg-no-repeat bg-fixed bg-cover'>
//         <button onClick={() => fetch("/api").then(res => console.log(res))}>Click for api</button>
//       <MainLandingPage />

//   const renderPage = () => {
//     console.log('RENDER APPJS component', currentPage);
//     //Sswitch case
//     switch (currentPage) {
//       case 'Main':
//         return <MainLandingPage handlePageChange={handlePageChange} currentPage={'Main'} />;
//       case 'Explore':
//         return <ExplorePage />;
//       default:
//         return <MainLandingPage handlePageChange={handlePageChange} currentPage={'Main'} />
//     }
//   }

//   return (
//     <div>
//       <div className='flex flex-col justify-center items-center h-screen bg-photo-collage bg-no-repeat bg-fixed bg-cover'>
//         {/* By default its render MAin Planding page  */}
//         {renderPage()}
//         {/* hide or  show this button once the user logins in without signin   */}
//         {currentPage === 'Explore' ? <div></div> :
//           <div className='flex justify-center items-center w-2/4 h-1/6 bg-gray-200 bg-opacity-90'>
//             {/* on click of this button its render the explore page  */}
//             <a href='/' name='Explore' onClick={(e) => handlePageChange('Explore', e)} > Continue without Signing In</a>
//           </div>
//         }
//       </div>

//     </div>
//   );
// }

// export default App;
