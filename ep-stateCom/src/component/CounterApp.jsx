import React from 'react'
import { useState } from 'react';

const CounterApp = () => {
    let [count,setCount] = useState(0); 

    // passing function as initial value: 
    function returnState(){
        console.log(100)
        return 100;
    }
    //returnState() - if call the function inside state, for every rendering, function call will happen.  like below:
    // let [sample, setSample] = useState(returnState ());
    // if we pass function with call inside anonymous function, call won't happend for each render
    let [sample,setSample] = useState(()=>{return returnState()})

    function handleIncrease(){
        // count+=1;
        // console.log(count);
        // setCount(count+1);
        // to watch previouse state, best practice: 
        setCount((prevCount)=> prevCount+1 );
    }
    function handleDecrease(){
        // count-=1
        // console.log(count);
        setCount((prevCount) => prevCount-1);
    }
  return (
    <div>
        <h1>Counter Application - {count} - {sample}</h1>
        <button onClick={handleIncrease}>Increase</button>
        <button onClick={handleDecrease}>Decrease</button>
        <br/>
    </div>
  )
}

export default CounterApp
