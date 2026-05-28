import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';

const Button = styled.button
`width: 150px;
  height: 50px; 
  background-color: blue; 
  color:white;
`
const CounterApp = () => {
    let [count,setCount] = useState(0); 
    let [data,setData] = useState("Error")
    let message;
    function handleIncrease(){
        setCount((prevCount)=> prevCount+1 );
    }
    function handleDecrease(){
        setCount((prevCount) => prevCount-1);
    }
    function resetCount(){
        setCount( count = 0)
    }

    if(count < 10){
        message = (
            <div>
                <h3>You Clicked {count} times</h3>
                 <p>Still {10 - count} </p>
            </div>
        )
    }
    else if(count === 10){
        message = (
              <div>
                <h3>You Clicked {count} times</h3>
                 <p>You Unlocked a 10% discount</p>
            </div>
        )
    }else if (count < 20){
        message = (
              <div>
                <h3>You Clicked {count} times</h3>
                 <p>Keep Click for 20% discount</p>
            </div>
        )
    }
    else{
         message = (
              <div>
                <h3>You Clicked {count} times</h3>
                 <p>Click Master</p>
            </div>
        ) 
    }

    let displayComp = () => {
        switch (data) {
            case "loading": return <LoadComp/>
            break;
            case "Success": return <SuccessComp/>
            break;
            case "Error": return <FailedComp/>
            break;
        }
    }

  return (
    <div>
        <h1>Click to unlock rewards🎉 </h1>
       <Button onClick={handleIncrease}>Click Me!</Button>
         {message}
         {count >=30 && <Button onClick={resetCount}>Reset Click</Button>}
         {/* ternary openator */}
        {/* {count >= 10 ? <p>You Unloacked a 10% discount</p> : <p> Click 10 time to unlock Rewards!</p>} */}

        {/* && - operater  if && before statement is ture only then after && statment will excecute */}
        {/* {count >= 15 && <p>You are Click Master</p>} */}

       {displayComp()}
       
    </div>
  )
}

export default CounterApp; 

function LoadComp(){
    return (
        <h5>Loading...😒</h5>
    )
}
function SuccessComp(){
    return (
        <h5>Successfull 💖</h5>
    )
}
function FailedComp(){
    return(
        <h5>Error😢</h5>
    )
}
