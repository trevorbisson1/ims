import React from "react";
import Item from './item'

function Grouping(props) {
    return (
        <div> 
            <h1>{props.group[0].pType}</h1>
            {
                props.group.map((item,index)=>{
                    return <Item item = {item}/>
                }
                )
            }
        </div>
    )
}

export default Grouping;