import React from "react";
import { NavLink } from "react-router-dom";


function Navigation (props)
{
    return (
        <div className="Navigation">
            <NavLink to='/'> Home </NavLink>
            <NavLink to='/Inventory'> Inventory </NavLink>
            <NavLink to='/AddProduct'> Add a Product </NavLink>
            <NavLink to='/AddIngredient'> Add a Ingredients </NavLink>
        </div>
    )
}

export default Navigation;