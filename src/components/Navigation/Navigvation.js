import React from "react";
import { NavLink } from "react-router-dom";
import "../../App.css";


function Navigation (props)
{
    return (
        <div className="Navigation">
            <NavLink to='/' className="NavLink"> Home </NavLink>
            <NavLink to='/Inventory' className="NavLink"> Inventory </NavLink>
            <NavLink to='/AddProduct' className="NavLink"> Add a Product </NavLink>
            <NavLink to='/AddIngredient' className="NavLink"> Add a Ingredients </NavLink>
        </div>
    )
}

export default Navigation;