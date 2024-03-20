import React, { useState } from "react";

const [invetoryItem,setInventoryItem] = useState({
    pName:'',
    pType:'',
    pQuantity:'',
    pMeasurementType:''
})

function pNameChangeHandler=(e)=>{
    setInventoryItem{(...invetoryItem,pName:e.target.value)}
}

function AddInventoryForm(props) {


    return (
        <div>
            <form>

            </form>
        </div>
    )
}

export default AddInventoryForm;