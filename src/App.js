// import logo from './logo.svg';
import './App.css';
import React from 'react';
import NavBar from './Navbar';
import ContactList from './ContactList';

class App extends React.Component{
  constructor(){
    super();
    this.state= {
        users:[],
    }
}

 componentDidMount(){

  fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({ users: json },()=>console.log(this.state))); 
}

OnHandleDeleteUser=(id)=>{
  console.log('Deleted');
  const {users}= this.state;
  const newUsers= users.filter((user)=> user.id!==id);
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
})
  .then((response) => response.json())
  .then((json) => this.setState({users: newUsers}))
  .catch((error)=>{
    console.log('error',error);
  })
}

getCount=()=>{
  const {users}= this.state;
  let count=0;
  users.forEach((user)=>{
    count+=1;
  })
  return count;
}

addUser=()=>{
  let newUser= {
    id: 11,
    name: "Ervin Howell",
    username: "Antonette",
    email: "Shanna@melissa.tv",
    address: {
      street: "Victor Plains",
      suite: "Suite 879",
      city: "Wisokyburgh",
      zipcode: "90566-7771",
      geo: {
        lat: "-43.9509",
        lng: "-34.4618"
      }
    },
    phone: "010-692-6593 x09125",
    website: "anastasia.net",
    company: {
      name: "Deckow-Crist",
      catchPhrase: "Proactive didactic contingency",
      bs: "synergize scalable supply-chains"
    }
  }
  fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'POST',
  body: JSON.stringify(newUser),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => this.setState((prevState)=>{return {users:[...prevState.users,json]}}))
  .catch((error)=>{
    console.log('error',error);
  })
}
updateUser=(id)=>{
  const {users}= this.state;
  const newUser= users.filter((user)=> user.id===id);
  newUser[0].name= "Abc";
  fetch('https://jsonplaceholder.typicode.com/users', {
  method: 'PUT',
  body: JSON.stringify(
    newUser[0]
  ),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => this.setState({users}))
  .catch((error)=>{
    console.log('error',error);
  })
}
render() {
  const {users, loading}= this.state;
  return (
    <div className="App">
      <NavBar
      addUser={this.addUser}
      count={this.getCount()}/>
      
      <ContactList 
        users={users}
        updateUser={this.updateUser}
        OnHandleDeleteUser={this.OnHandleDeleteUser}/>
        {loading && <h1>loading users...</h1>}
    
    </div>
  );
}
}

export default App;
