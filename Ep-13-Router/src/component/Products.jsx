import React from 'react'
import { Outlet,Link } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      Products
        <Link to="list">List</Link>
        <Link to="details">Details</Link>
      <Outlet/>
    </div>
  )
}

export default Products

// outlet - used to helps to render the nested routes, routes ni nested gah rasinaka, router parent ki outlet ani component call chesthey ne nested routers display avathai.


