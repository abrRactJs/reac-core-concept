import React, { useState,useEffect } from 'react';
import './App.css';

function App() {

  const containerStyle = {
    width: "85%",
    margin: "50px auto",
  };



  return (
    <div style={containerStyle}>
      <Hello></Hello>
      <Counter></Counter>
      <Users></Users>
      <Todos></Todos>
    </div>
  );
}


function Counter(){
  const [count, setCount] = useState(0);
  const decressHandle = ()=> setCount(count - 1) ;
  return(
     <div>
       <h1>Count: {count}</h1>
       <button onClick={decressHandle}>Decress</button>
       <button onClick={ () => setCount(count + 1) }>Incress</button>
     </div>
  )
}


function Hello() {
  return (
    <div>
      <h2>Hello react js</h2>
    </div>
  )
}


function Users(){
  const [user, setUsers] = useState([]);
  useEffect( ()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => setUsers(data))
    
  } )
  return(
    <div>
       <h2> Dynamic User Infirmation : {user.length} </h2>
       <ul>
        {
          user.map(userName => <li>{userName.name}</li>)
        }
        {
          
          user.map(userPhone => <li>{userPhone.phone}</li>)
        }
       </ul>
    </div>
  )
}


function Todos(){
  const [user , setUser] = useState([])
  useEffect( ()=>{
     fetch("https://jsonplaceholder.typicode.com/todos")
     .then(res => res.json())
     .then(data => setUser(data))
  },[] )
  return (
    <div>
       <h2>Todos list here </h2>
       {
        console.log(user)
       }
       <ul>
        {
          user.map(userName => <li>{userName.title}</li> )
        }
       </ul>
    </div>
  )
}




export default App;
