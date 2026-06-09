import { useState } from 'react'
import './App.css'
import { useReducer } from 'react';

function App() {
  const [count, setCount] = useState(0); 

  let Counter_act = {
    INCREMENT : "increment", 
    DECREMENT : "decrement", 
    REST : "rest"
  }
  let reducerFn = (state,CounterAction) => {

     switch (CounterAction.type) {
       case Counter_act.INCREMENT :
         return {...state, count: state.count + 1 }; 
       case Counter_act.DECREMENT : 
         return {...state, count: state.count - 1};     
       case Counter_act.REST : 
         return {...state, count: 0};
        default : return state

     }
  }

 const [state, dispatch] = useReducer(reducerFn,{count:0});



//  console.log(state,dispatch);
  return (
    <>
      <section id="center">
          <h1>setstate hook</h1>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        > Increase </button>
        <p>{count}</p>
        {/* using use reducer */}
        <div>
            <h1>UseReducer Hook </h1>
        <button
          type="button"
          className="counter"
          onClick={() => dispatch({type: Counter_act.INCREMENT})}
        > Increment </button>
        <button
          type="button"
          className="counter"
          onClick={() => dispatch({type: Counter_act.DECREMENT})}
        > Decrement </button>
        <button
          type="button"
          className="counter"
          onClick={() => dispatch({type: Counter_act.REST})}
        > Reset</button>
        <p>{state.count}</p>
        </div>
      </section>

    </>
  )
}

export default App
// in my service page  implement this animated process section,  and give the updated css,js,and service page, and in conttact page for the section section left items remove and keep the map only- add the breadcrumbs navigation in the hero section above the title . and retain the live header, and footer logo only in this  design. update these changes and give the files with working form and give the finilized version name it as sano-final give all