import TodoApp from "./component/TodoApp"
import Home from "./component/Home"
import Login from "./component/Login"
import Products from "./component/Products"
import SignUp from "./component/SignUp"
import {BrowserRouter as Router,Routes,Route,Link} from "react-router-dom"
import ProductList from "./component/ProductList"
import { ProductDetails } from "./component/ProductDetails"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import NavBar from "./component/Navbar"
import NotFound from "./component/NotFound"
import NewProduct from "./component/NewProduct"
import UpdateProduct from "./component/UpdateProduct"
import WishList from "./component/WishList"

function App() {
  let user = "sush"
  return (
   <div>
   
   <Router>
    <NavBar/>
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
       <Route path="/newProduct" element={<NewProduct/>}/>
       <Route path="/update/:id" element={<UpdateProduct/>}/>
       <Route path="/wishlist" element={<WishList/>}/>
       <Route path="*" element ={<NotFound/>} />
     </Routes>
   </Router>
   </div>
  )
}
export default App
