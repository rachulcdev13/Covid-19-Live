import React from "react"
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css";


const Navbar = () => {
    return (
        <> 
            <nav class="navbar navbar-expand-lg bg-primary">
                <div class="container-fluid">  
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                    <NavLink className="navlink" to="/Covid">Covid-19 Live tracker</NavLink> &nbsp;&nbsp;&nbsp;
                    <NavLink className="navlink" to="/Statewise">Covid-19 Live State wise</NavLink>
                    </div>
                </div>
            </nav>


        </>
    )
}
export default Navbar;


