import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Eggplant from './Eggplant';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Eggplant />
  </React.StrictMode>,
  document.getElementById('root')
);
// NOTE:: ReactDom은 only render 1 component

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
