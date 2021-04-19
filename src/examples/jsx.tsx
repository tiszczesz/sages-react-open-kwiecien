import React from 'react'
import ReactDOM from 'react-dom'

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

// const UserProfile2 = (props: { user: User }) => React.createElement('div', {
//   id: '123', style: { color: 'black', background: props.user.color, padding: '20px' }
// },
//   props.user.pets.map(pet => React.createElement('p', { key: pet.id }, props.user.name + ' have a  ' + pet.name)),
//   'Add more : ',
//   React.createElement('input')
// )

const UserProfile = (props: { user: User }) => <div id="z123" className={"user-profile"} style={
  { color: 'black', background: props.user.color, padding: '20px' }
}>
  {props.user.pets.map(pet => <p key={pet.id}> {props.user.name} have a {pet.name}</p>)}
  Add more :
  <input />
</div>

debugger;

ReactDOM.render(<div>
  { /* UserProfile({ user: users[0] })  */}
  <UserProfile user={users[0]} />
  <UserProfile user={users[1]} />
  <UserProfile user={users[2]} />
</div>, document.getElementById('root'))