import React,{useState,useEffect} from "react";
//import Grouping from "./Groupings";
//import InventorySidebar from "./InventorySidebar";
import "../../App.css"
import Item from "./Item";


function Inventory(props) {

/*
    Need to create a useEffect function that takes in props,
    that will update the inventory function
*/

    console.log(JSON.stringify(props));
    if(props.inventory[0] === "FALSE"){
        return (
            <div className="Inventory">
                No Grouping selected yet!
            </div>
            );
    }
    else{
        return (
            <div className="Inventory">
                <h3>{props.inventory[0].pType}</h3>
            {
                props.inventory.map((item,index)=>{
                    return <Item item = {item}/>
                }
                )
            }  
            </div>
        )
    }
}

export default Inventory;