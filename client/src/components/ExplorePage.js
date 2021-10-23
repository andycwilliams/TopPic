import React from 'react';
import Logout from './LogOut';
import ImageUpload from './ImageUpload/ImageUpload';
import '../App.css';
import Product from './Product';
import products from '../data/products.json'
// here is our imports


// this is the explore page this is the second thing to open when the application is started you can get here when you click continue without signing in or by logging in.
const ExplorePage = () => {
    return (
        // This is the front end for the image upload.
        <div className='flex flex-col justify-center items-center bg-photo-collage bg-no-repeat bg-fixed bg-cover'>
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
                            
        <div>
          <p className=" text-center my-3 bg-gray-200 rounded-lg"><p><a href="https://toppic-project3.herokuapp.com/">return to homepage</a></p></p>
        </div>
                
            </div>
            <div className= 'm-1 absolute bottom-0 left-0'>
                    <Logout />
            </div>
        </div>
    )
}
// the two buttons above are the return to homepage and the logout button the return to homepage button reloads the deployed heroku website and the logout logs the user out and then returns them to the homepage.

export default ExplorePage;

// this exports the homepage