import React,{ useState } from "react";

export default function AddIngredientForm()  {

    const [ingredient,setIngredient] = useState({
        iName:'',
        iType:'',
        iQuantity:'',
        iMeasurement:'',
    });

    const iNameChangeHandler = (e) => {
        setIngredient({...ingredient,iName:e.target.value});
    }

    const iTypeChangeHandler = (e) => {
        setIngredient({...ingredient,iType:e.target.value});
    }

    const iQuantityChangeHandler = (e) => {
        setIngredient({...ingredient,iQuantity:e.target.value});
    }

    const iMeasurementChangeHandler = (e) => {
        setIngredient({...ingredient,iMeasurement:e.target.value});
    }


    const sendData=(e)=>{
        e.preventDefault();

    }

    return (
        <div className="AddIngredientForm">
            <form onSubmit={sendData}>
                <input type="text"
                placeholder="Name"
                onChange={iNameChangeHandler}
                />
                <br/>
                <input type="text" //This needs to be a dropdown at somepoint, with all of the type selections, keeping it as a text input for now, placeholder for now
                placeholder="Type"
                onChange={iTypeChangeHandler}
                />
                <br/>
                <input type="number"
                placeholder="Quantity of item"
                onChange={iQuantityChangeHandler}
                />
                <br/>
                <input type="text" //This needs to be a dropdown at somepoint, with all of the type selections, keeping it as a text input for now, placeholder for now
                placeholder="Measurement"
                onChange={iMeasurementChangeHandler}
                />
                <br/>

            </form>
        </div>
    )

}