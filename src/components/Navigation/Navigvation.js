import React from "react";
import { NavLink } from "react-router-dom";


function Navigation (props)
{
    return (
        <div className="Navigation">
            <NavLink to='/'> Home </NavLink>
            <NavLink to='/Inventory'> Inventory </NavLink>
        </div>
    )
}

export default Navigation;