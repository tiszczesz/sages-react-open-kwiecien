import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

window.React = React
window.ReactDOM = ReactDOM

const user = { name: 'Alice', color: 'hotpink', pets: [{ id: 1, name: 'cat' }, { id: 2, name: 'fish' }] }

const vdiv = React.createElement('div', {
  id: '123', style: { color: 'black', background: user.color, padding: '20px' }
},
  user.pets.map(pet => React.createElement('p', { key: pet.id }, user.name + ' have a  ' + pet.name)),
  'Add more : ',
  React.createElement('input')
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
