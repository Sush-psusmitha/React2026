import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AiFillDelete } from "react-icons/ai";
import { removeItem } from '../store/cartSlice';
const WishList = () => {
    let cartProducts = useSelector((state)=>{ return state.cart})
    console.log(cartProducts);
   
    let dispatch =  useDispatch()
    let handleDelete = (reduxItemId) => {
        dispatch( removeItem (reduxItemId))
    }

  return (
    <div>
       { cartProducts.length !==0 ?
         (<section className='products'>
           {
            cartProducts.map( (product) => (
              <Card key={product.id} style={{ width: '18rem' }} className='product'>
                <center>
        <Card.Img variant="top" src={product.image} style={{width: "9rem", height: "12rem"}} />
                </center>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text style={{overflow: "scroll",height:"180px"}}>${product.price}</Card.Text>
        </Card.Body>
        <Card.Footer style={{display: "flex", justifyContent: "space-evenly", alignItems: "center"}}>        
        
        <Button variant="danger" onClick={()=>{
          handleDelete(product.id)
        }}><AiFillDelete/></Button>
        </Card.Footer>
      </Card>
            ) )
           }
       </section>) :  
       <h1>Your cart looks dull</h1>
       }    
     
      </div>
  )
}

export default WishList
