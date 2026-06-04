import TodoApp from "./component/TodoApp"
import Home from "./component/Home"
import Login from "./component/Login"
import Products from "./component/Products"
import SignUp from "./component/SignUp"
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import ProductList from "./component/ProductList"
import { ProductDetails } from "./component/ProductDetails"
function App() {
  let user = "sush"
  return (
   <div className="App">
   
   <Router>
     <ol>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/products">Products</Link></li>
      <li><Link to={`/login/${user}`}>Login</Link></li>
      <li><Link to="/signup">Signup</Link></li>
      <li><Link to="/todoapp">Todo App</Link></li>
    </ol>
     <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/products" element={<Products/>}>
          <Route index element={<ProductList/>}/>
          <Route path="list" element={<ProductList/>}/>
          <Route path="details" element={<ProductDetails/>}  />
       </Route>
       <Route path="/signup" element={<SignUp/>} />
       <Route path="/login/:newUser" element={<Login/>} />
       <Route path="/todoapp" element={<TodoApp/>} />
     </Routes>
   </Router>
   </div>
  )
}
export default App
// path = url lo emi unapudu
// element = component dispaly cheyadaniki
// Link = act as a tag 
// to = it act as href, for navigation

//index = if we have multiple child under 1 parent route, we should render initial child as default, for that index will be used eg: <Route index element={<ProductList/>}/>