import './NavBar.css'
import { NavLink } from "react-router-dom";
function NavBar() {
    return (
        <>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/products">Produtos</NavLink></li>
                <li><NavLink to="/about">Sobre</NavLink></li>               
            </ul>
        </>
    );
}

export default NavBar;