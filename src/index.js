import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//allows to route to another page when you click on it/navagation/easier/quicker
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  //browserrouter takes a page bulids it and when someone takes it off it puts another one
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
