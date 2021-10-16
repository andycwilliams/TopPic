import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import Login from './componets/Login';
import Logout from './componets/LogOut';
import ImageUpload from './componets/ImageUpload/';

function App() {
  return (
    <div className="App">
      {/* <Login />
      <Logout /> */}
      <ImageUpload/>
    </div>
  );
}




export default App;
