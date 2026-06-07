import React, { useEffect, useState } from 'react'
import { Outlet,Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
const Products = () => {
  let [count,setCount] = useState(0);
  let [count1,setCount1] = useState(0);
    // useEffect(()=>{
    //   console.log("This Effect will run after every render")
    // });
    // useEffect(()=>{
    //   console.log("This Effect will run only in initial render!")
    // },[]);

    // second render
    useEffect(()=>{
      console.log("This is Effect will run only dependency change")
    },[count]);
    useEffect(()=>{
      console.log("This is Effect will run only dependency change " + count1)
    },[count1]);
    // first render
    console.log("Initial Render");
  return (
    <div>
      <h1>Products - {count} - {count1}</h1>
         <Button variant="primary" onClick={()=>{setCount(count + 1)}} >Increase</Button>
         <Button variant="primary" onClick={()=>{setCount1(count1 + 1)}} >Increase1</Button>
        <Link to="list">List</Link>
        <Link to="details">Details</Link>
      <Outlet/>
    </div>
  )
}

export default Products
// useeffect state code will excecute after return statement code.
//  fist jsx, then initial render, then useeffect
// useeffect 3 ways: 
// 1. passing only annoymous function - this will run after every re-render (state updated each time)!
// 2. function + empty Array [] - will run only on initial render(1st render)
// 3. function + Array with state [state] - only when state change - we can pass multiple states so when ever any state excecute, statements from inside sideeffect will excecute.;ike [state1,state2,state3]


