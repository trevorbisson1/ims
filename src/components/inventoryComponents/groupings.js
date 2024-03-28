import React,{useState,useEffect} from "react";
import Item from './Item'
import "../../App.css"

function Grouping(props) {
    
    return (
        <div className="Grouping"> 
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