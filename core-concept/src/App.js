import React, { useState, useEffect } from 'react';
import './App.css';

function App(){
  const AppStyle = {
      width: "70%",
      margin : "auto"
  }
 
  const [user, setUser] = useState([])
  useEffect(()=>{
     fetch('https://jsonplaceholder.typicode.com/comments')
     .then(res => res.json())
     .then(data => setUser(data))
  }, [])

  return (
     <div style={AppStyle}>
       <h1>hello react js </h1>
       <ParsonInfo></ParsonInfo>
       {
        console.log(user)
       }
        {
          user.map(usrInfo => <ParsonInfo name={usrInfo.name} email={usrInfo.email} post={usrInfo.body}></ParsonInfo> )
        }
     </div>
  )
}

function ParsonInfo(props){
  const parsonStyle ={
     wodth : "100%",
     padding : "20px 10px",
     border: "2px solid black",
     margin : "20px 0px"
  }
   return (
     <div style={parsonStyle}>
       <h2>User Name :  <span style={{color:"red"}}>{props.name} </span></h2>
       <h2>User Email: <span style={{color:"green"}}>{props.email}</span> </h2>
       <p style={{textAlign :"center"}}>{props.post}</p>
     </div>
   )
}



export default App;
