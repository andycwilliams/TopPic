import React from "react";
import Logout from "./LogOut";
import ImageUpload from "./ImageUpload/ImageUpload";
import "../App.css";
import Product from "./Product";
import products from "../data/products.json";


// This is the explore page this is the second thing to open when the application is started you can get here when you click continue without signing in or by logging in.
const ExplorePage = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-photo-collage bg-no-repeat bg-fixed bg-cover">
      <div>
        <div>
          <ImageUpload />
        </div>
        <div className="bg-gray-200 py-4 dark:bg-gray-800">
          <div className="md:mx-2 md:mx-auto">
            {products.map((product) => (
              <Product product={product} key={product.id} />
            ))}
          </div>
        </div>
      </div>
      <div className="m-1 absolute bottom-0 left-0">
        <Logout />
      </div>
    </div>
  );
};
// The class directly above this is the logout button that displays the google logout functionality. 
export default ExplorePage;
