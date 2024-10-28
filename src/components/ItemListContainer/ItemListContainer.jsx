import { useState, useEffect } from "react"
import { getProducts } from "../../data/data"
import ItemList from "./ItemList.jsx"
import { useParams } from "react-router-dom"
import "./ItemListContainer.css"

const ItemListContainer = ( {saludo} ) => {
  
 const[products, setProducts] =useState([])
 const { idCategory } = useParams ()

  useEffect(()=>{
   getProducts()
   .then((dataProducts)  => {
    if (idCategory) {
      const filterProducts = dataProducts.filter ( (product) => product.category === idCategory )
      setProducts(filterProducts)
    }else{
     setProducts(dataProducts) 
    }
     
   })
   .catch((error) => {
     console.error(error)

   })
   .finally(() => {
    console.log("finalizo la promesa")

     })  
}, [idCategory])



return (
    <div className ="item-list-container"> 
    <h1>{saludo}</h1> 
    <ItemList products={products} />
    </div>
  )
}

export default ItemListContainer
