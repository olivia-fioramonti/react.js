import NavBar from "./components/NavBar/NavBar";

import ItemListContainer from "./components/ItemListContainer/ItemListContainer";


import lips from "./assets/lips.jpg";


import './App.css'


function App() {


  return (
    <div className = "container-app">
      
      <NavBar />
      <ItemListContainer  greeting ={"Bienvenidos a mi Shop Online"} />
      <img src={lips} alt="" />
      <p> Prendas únicas Customizadas</p>
    </div>
  )
}

export default App
