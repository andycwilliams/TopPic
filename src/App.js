import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import './index.css';
import Login from './componets/Login';
import Logout from './componets/LogOut';
import Product from './componets/Product';
import products from './data/products.json';

function App() {
  return (
    <div>
      <div>
        <img src={process.env.PUBLIC_URL + '/images/TopPicLogo200x200.png'} alt='Logo'/>
      </div>
      <div>
        <Login />
        <Logout />
      </div>
    
    <div className="bg-gray-200 py-4 dark:bg-gray-800">
      <div className="md:w-1/4 mx-2 md:mx-auto">
        {products.map((product) => (
          <Product product={product} key={product.id} />
          ))}
          
      </div>
    </div>
    </div>
  );
}




export default App;
