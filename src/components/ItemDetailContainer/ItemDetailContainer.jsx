import { useState, useEffect } from 'react'
import { getProducts } from '../../data/data'
import { useParams } from 'react-router-dom'
import ItemDetail from "./ItemDetail.jsx"



const ItemDetailContainer = () => {
 const [product, setProducts] =useState ({})
 const { idProduct} = useParams()

 useEffect( () => {
    getProducts()
    .then((data)  => {
        const findProduct = data.find ( (product)=>product.id ==="idProduct"   )
        serProduct (findProduct)
    } )
 }, [] )



  return (
    <ItemDetail product= {product} />
 )
}

export default ItemDetailContainer
