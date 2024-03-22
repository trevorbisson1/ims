import React,{useState,useEffect} from "react";
import Item from './Item'
import "../../App.css"

function Grouping(props) {

    const [groupingDisplay, changeGroupDisplay] = useState("");

    useEffect( ()=>{
        window.addEventListener("click",changeGroupDisplay);

        return ()=>{
            window.addEventListener("click",changeGroupDisplay);
        }
    }

    )

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