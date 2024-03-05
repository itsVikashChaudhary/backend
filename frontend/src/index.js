// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import ShopoContextProvider from './context/ShopContext'

ReactDOM.render(
    <ShopoContextProvider>
      <App />
    </ShopoContextProvider>
    
 ,
  document.getElementById('root')
);
