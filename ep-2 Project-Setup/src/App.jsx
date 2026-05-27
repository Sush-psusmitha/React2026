
import './App.css'
import { Fragment } from 'react/jsx-runtime'
function App() {

  let author = "Sushmitha"

  let isLogged = true
  return (
    <>
      <div className='container'>
          <h1 style={{backgroundColor:"blue", color: "white"}}>React JSX 1 </h1>  
          <p >{author}</p>   

          {/* conditional rendering */}
          {isLogged && <p>Welcome to page</p>}     
      </div>
      <label htmlFor="user">UserName</label>
      <input id='user' type="text"/>
      <img src="" alt=""/>
      <br/>
      {/* <button onClick={newFun}></button> */}
    </>
      
  )
}

export default App
