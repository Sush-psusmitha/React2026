import { useContext } from "react"
import { UserContext } from "../App"


function Header(){
   let {user : {uname}} = useContext(UserContext);
    return(
        <header>
        <h1>Todo List</h1>
        <p style={{backgroundColor: "black", width: "30px", height: "30px", textAlign:"center", borderRadius: "50%"}}>{uname.slice(0,1)}</p>
        </header>
    )
}
export default Header