import React, { useState } from "react";

import InventorySidebar from "./InventorySidebar";
import Inventory from "./Inventory";
import CartSidebar from "../CartComponent/CartSidebar";
//import Grouping from "./Groupings";
import "../../App.css"

function InventoryWrapper(props) {

    const [selectGroup,ChangeSelectedGroup] = useState(["FALSE"]);


    //Variable for pasing the correct items to the groupings component
    const groupings = [[props.InventoryWrapper[0]]];
    //flag for checking if a value was added to the groupings array
    let addedFlag = 0;
    //console.log(JSON.stringify(props.inventory[0].pType));
    //iter through the entire props array
    for(let i = 1; i < props.InventoryWrapper.length; i++)
    {
        //console.log("Props position: "+JSON.stringify(i));
        //array for iter through the groupings array, checking if it is in the same type
        for(let y = 0; y < groupings.length; y++){
            //console.log("Groupings Position: "+JSON.stringify(y));
            //if the same type add to the same type in group
            if(groupings[y][0].pType === props.InventoryWrapper[i].pType ) {
                groupings[y].push(props.InventoryWrapper[i]);
                addedFlag = 1;
            }
    
        }
        //if different, add to a new grouping
        if(addedFlag === 0){
            groupings.push([props.InventoryWrapper[i]]); //!!!!!! needs a key added, causing error !!!!!!!
        }
        //reset flag
        else{
            addedFlag = 0;
        }

    }

    console.log(JSON.stringify(selectGroup));
    return(
        <div className="InventoryWrapper">
        <InventorySidebar InventorySidebar={[groupings,ChangeSelectedGroup]}/>
        <Inventory inventory={selectGroup}/>
        <CartSidebar/>
        </div>
    )
}

export default InventoryWrapper;