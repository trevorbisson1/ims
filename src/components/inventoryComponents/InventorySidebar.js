import React from "react";
//import Grouping from "./Groupings";
import Inventory from "./Inventory";
import "../../App.css"

// This function needs to locate the inventory component on the page page, then
// pass the props to the component where it will useEffect to update the function
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