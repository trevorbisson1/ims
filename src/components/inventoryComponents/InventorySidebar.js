import React from "react";
import Grouping from "./Groupings";

function InventorySidebar(props){
    return (
        <div className="InventorySidebar">
        {
            props.InventorySidebar.map((group,index)=>{
                return (
                <div className="InventorySubComponentSelection">
                    <h3>{JSON.stringify(group[0].pType)}</h3>
                </div>
                )
            }
        
            )
        }
        </div>
    )
}

export default InventorySidebar;