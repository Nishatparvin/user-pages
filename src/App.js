import React,{useState} from 'react';
import logo from './logo.svg';

import FetchUser from './Component/FetchUser/FetchUser';
import Header from './Component/Header/Header';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <FetchUser></FetchUser>
      
    </div>
  );
}

export default App;
