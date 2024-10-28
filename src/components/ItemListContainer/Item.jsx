import React from 'react'
import { Link } from 'react-router-dom'

const Item = ({ product } ) => {
  return (
    <Link to ={ "/detail/"+product.id } className="item" >
        <img src={product.image} className="img-item" width={400} alt="" />
        <p className= "text-item">{product.name} </p>
        <p className="text-item"> ${product.price} </p>
    </Link> 
  )
}

export default Item
