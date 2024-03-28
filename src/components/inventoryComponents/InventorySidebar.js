import React from "react";
//import Grouping from "./Groupings";
import Inventory from "./Inventory";
import "../../App.css"

function InventoryLoader(id,group){
    console.log("printing"+JSON.stringify(id));
    return(
        <Inventory inventory={group}/>
    );
}

function InventorySidebar(props){
    return (
        <div className="InventorySidebar">
        {
            props.InventorySidebar.map((group,index)=>{
                return (
                <div className="InventorySubComponentSelection" onClick={() => InventoryLoader(index,group[index])}>
                    <h3 key={index}>{JSON.stringify(group[0].pType)}</h3>
                </div>
                )
            }
        
            )
        }
        </div>
    )
}

export default InventorySidebar;