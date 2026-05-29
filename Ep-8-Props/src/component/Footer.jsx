import {UserContext} from '../App'
function Footer(){

   let date = new Date()
   
    return(
        <footer>
          <h2>Footer</h2>
          <UserContext.Consumer >
           {
            ({user})=>{
                return(
                    <p>{user.uname} - @{date.getFullYear()}</p>
                )
            }
           }
          </UserContext.Consumer>
        </footer>
    )
}
export default Footer