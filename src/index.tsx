import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

window.React = React
window.ReactDOM = ReactDOM

interface UserPet {
  id: number;
  name: string;
}

interface User {
  name: string;
  color: string;
  pets: UserPet[];
}

const users: User[] = [
  { name: 'Alice', color: 'hotpink', pets: [{ id: 1, name: 'cat' }, { id: 2, name: 'fish' }] },
  { name: 'Bob', color: 'lightblue', pets: [{ id: 123, name: 'Snake' }] },
  { name: 'Kate', color: 'lightgreen', pets: [{ id: 123, name: 'parrot' }] },
]

const UserProfile = (props: { user: User }) => React.createElement('div', {
  id: '123', style: { color: 'black', background: props.user.color, padding: '20px' }
},
  props.user.pets.map(pet => React.createElement('p', { key: pet.id }, props.user.name + ' have a  ' + pet.name)),
  'Add more : ',
  React.createElement('input')
)

ReactDOM.render(React.createElement('div', {},
  UserProfile({ user: users[0] }),
  UserProfile({ user: users[1] }),
  UserProfile({ user: users[2] }),
), document.getElementById('root'))

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
