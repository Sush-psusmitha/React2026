import React from 'react'
import { UserContext } from '../App'
import { useContext } from 'react'

const ProductDetails = ({Pname,Pprice,Pdesc}) => {
// console.log(Pname,Pprice,Pdesc)

let {user} = useContext(UserContext); 
// console.log(user.uname)
    return (
        
    <section>   
        <article>
            <p>UserName: {user.uname}</p>
            <p>UserEmail: {user.email}</p>
        </article>
       <h3>{Pname}</h3>
       <p>{Pprice}</p>
       <p>{Pdesc}</p>
    </section>
  )
}

export default ProductDetails
