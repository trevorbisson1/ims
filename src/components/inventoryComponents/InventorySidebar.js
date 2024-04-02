import React from "react";
import "../../App.css"

// This function needs to locate the inventory component on the page page, then
// pass the props to the component where it will useEffect to update the function
function InventorySidebar(props){
    return (
        <div className="InventorySidebar">
        {
            props.InventorySidebar[0].map((group,index)=>{
                return (
                <div className="InventorySubComponentSelection" onClick={() => props.InventorySidebar[1](group)}>
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