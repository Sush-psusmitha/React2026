import React from 'react'
import { useState } from 'react'
import ProductItem from './ProductItem'

const Shop = () => {
    let [product,setproduct] = useState({
    name: "iPhone",
    price: 10000, 
    description : "8GB Ram with 128GB" })
  return (
    <div>
      <h1>Welcome to my shop</h1>
      <ProductItem product = {product} />
    </div>
  )
}

export default Shop
