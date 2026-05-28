import React from 'react'
import ProductDetails from './ProductDetails'

const ProductItem = ({product}) => {
// console.log(product)
    
  return (
    <div>
      <h1>Displaying Product Items</h1>
      
      <ProductDetails  
       Pname ={product.name}
       Pprice= {product.price}
       Pdesc={product.description}
      />
    </div>
  )
}

export default ProductItem
