import React from 'react'
const ProductDetails = ({Pname,Pprice,Pdesc}) => {
  
  console.log(Pname,Pprice,Pdesc)
    return (
    <section>
       <h3>{Pname}</h3>
       <p>{Pprice}</p>
       <p>{Pdesc}</p>
    </section>
  )
}

export default ProductDetails
