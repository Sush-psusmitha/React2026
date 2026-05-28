import React from 'react'
import styled from 'styled-components'
import CounterApp from './CounterApp'
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
    let user = "Sush";
         function printMe(e){
      user = "priya";
      console.log(user)
         
     }
     function printme1(event){
      console.log(event.target.innerText)
     }
    
const Content = () => {
  return (
    <main>   
      <CounterApp/>
    </main>
  )
}

export default Content
