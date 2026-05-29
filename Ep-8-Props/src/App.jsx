import Header from "./component/Header"
import Footer from "./component/Footer"
import Content from "./component/Content"
import Shop from "./component/Shop"
import { useState } from "react"
import { createContext } from "react"

export let UserContext = createContext()

function App() {
 let [user, setuser] = useState({uname: "Sushmitha",age:24, email: "abc@gmail.com"}); 


  return (
    <UserContext.Provider value = {{user}} >
    <div className="App">
      <Header/>
      <Content/>
      <Footer/>
    </div>
    </UserContext.Provider>
  )
}

export default App
