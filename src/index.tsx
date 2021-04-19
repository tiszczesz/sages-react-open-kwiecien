import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

window.React = React
window.ReactDOM = ReactDOM

const vdiv = React.createElement('div', {
  id: '123', style: {
    color: 'black', background: 'hotpink', padding: '20px'
  }
},
  React.createElement('p', {},
    'Bob ma kota ',
    React.createElement('input')
  )
)
ReactDOM.render(vdiv, document.getElementById('root'))

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
