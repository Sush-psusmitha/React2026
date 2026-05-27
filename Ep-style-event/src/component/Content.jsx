import React from 'react'
import styled from 'styled-components'

let Button = styled.button 
    `background-color: blue;
     color:white;
     width:80px;
     height:30px;
     `
     let NewBtn = styled(Button)
     `
     color: yellow;
     background-color: red;
     `
     let headingStyle = {
    backgroundColor:"Orange", color:"white",
    boxShadow:"7px 7px 4px grey"
    };
    let user = "Sush"
const Content = () => {
     function printMe(e){
      // console.log("Hellow printme triggered - ",e.target.innerText); 

      user = "priya";
      console.log(user)
         
     }

     function printme1(event){
      // console.log(event.target," -arguments pass cheyali ante, must use aonymouse function ()=>{}")
     }
    
  return (
    <main>
      <h1 style={headingStyle}>Main Content - {user}</h1>
      <Button onClick={printMe}>Click Me</Button>
      <NewBtn onClick={(e)=>{printme1(e)}}>Copy</NewBtn>
    </main>
  )
}

export default Content
