import  "./navbar.css";

import CartWidget from "./CartWidget";
const NavBar = () => {
   const styleH2 = { color:"black",fontSize: "30px" }
   
   return(
        <nav className= "navbar" >
            <h2 style= { styleH2 } > Estilismo</h2>

            <ul>
                <li>
                    Camperas de Jean 
                </li>
                <li>Shorts</li>
                <li>Accesorios</li>
            </ul>

            <CartWidget />
        </nav>
    )
}

export default NavBar