const products = [
    {
      id: "gr123",
      name:"Chaqueta yinyang",
      descripcion:"jeans",
      stock: 1,
      price: 60000,
      image:"/img/yinyang.JPG",
      category:"Camperas"
    },
    {
      id: "pl123",
      name:"Chaqueta leon",
      descripcion:"jeans",
      stock: 1,
      price: 60000,
      image:"/img/campeojo2.JPG",
      category:"Camperas"
    },
    {
      id: "ft123",
      name:"Pantalon minimalista",
      descripcion:"jeans",
      stock: 2,
      price: 30000,
      image:"/img/jeancata1.JPG",
      category:"Pantalones"
    },
    {
      id: "yu123",
      name:"Pantalon summer",
      descripcion:"jeans",
      stock: 2,
      price: 55000,
      image:"/img/jeanmora.JPG",
      category:"Pantalones"
    },
    {
      id: "sx123",
      name:"Accesorios",
      descripcion:"",
      stock: 4,
      price: 8000,
      image:"/img/accesorio1.jpg",
      category:"Accesorios"
    },
  ]

const getProducts = () => {
    return new Promise ((resolve, reject) => {
        setTimeout (()=>{
            resolve (products)
        }, 2000)
    }
)
}
export { getProducts}