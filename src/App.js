import { render } from '@testing-library/react';
import React from 'react';
import './App.css';
import Login from './componets/Login';
import Logout from './componets/LogOut';

function App() {
  return (
    <div className="App">
      <Login />
      <Logout />
      
    </div>
  );
}




export default App;
