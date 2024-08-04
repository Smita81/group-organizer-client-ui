import { Link } from "react-router-dom";
import "./navBar.css"

export const NavBar = () => {
    return (
    <div className="nav-bar"> 
     <ul className="nav-list">
     <li className="nav-list-items">  
        <Link to="/">Home</Link>
        </li>
     <li className="nav-list-items" > <Link to="/">Members</Link>
     </li>
     </ul>
    
    </div>
);
};