import React from "react";
import Grouping from "./Groupings";

function Inventory(props) {
    //Variable for pasing the correct items to the groupings component
    const groupings = [[props.inventory[0]]];
    //flag for checking if a value was added to the groupings array
    let addedFlag = 0;
    //console.log(JSON.stringify(props.inventory[0].pType));
    //iter through the entire props array
    for(let i = 1; i < props.inventory.length; i++)
    {
        //console.log("Props position: "+JSON.stringify(i));
        //array for iter through the groupings array, checking if it is in the same type
        for(let y = 0; y < groupings.length; y++){
            //console.log("Groupings Position: "+JSON.stringify(y));
            //if the same type add to the same type in group
            if(groupings[y][0].pType == props.inventory[i].pType ) {
                groupings[y].push(props.inventory[i]);
                addedFlag = 1;
            }
    
        }
        //if different, add to a new grouping
        if(addedFlag == 0){
            groupings.push([props.inventory[i]]);
        }
        //reset flag
        else{
            addedFlag = 0;
        }

    }
    //console.log(JSON.stringify(groupings));
    return (
        <div className="Inventory">
            {
                groupings.map((group,index)=>{
                    return (
                    <div>
                        <Grouping className="AGroup" group={group}/>
                        <br/>
                    </div>
                    )
                }

                )
            }
                
        </div>
        );
}

export default Inventory;