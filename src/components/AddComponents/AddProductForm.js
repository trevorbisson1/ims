import React,{ useState } from "react";

export default function AddProductForm()  {

    const [product,setProduct] = useState({
        pName:'',
        pType:'',
        pQuantity:'',
        pIngredients:[],
    });

    const pNameChangeHandler = (e) => {
        setProduct({...product,pName:e.target.value});
    }

    const pTypeChangeHandler = (e) => {
        setProduct({...product,pType:e.target.value});
    }

    const pQuantityChangeHandler = (e) => {
        setProduct({...product,pQuantity:e.target.value});
    }

    const pIngredientsChangeHandler = (e) => { //Not sure how i want to treat this yet, need to think about how to incorperate this, placeholder for now
        setProduct({...product,pIngredients:e.target.value});
    }

    const sendData=(e)=>{
        e.preventDefault();

    }

    return (
        <div className="AddIngredientForm">
            <form onSubmit={sendData}>
                <input type="text"
                placeholder="Name"
                onChange={pNameChangeHandler}
                />
                <br/>
                <input type="text" //This needs to be a dropdown at somepoint, with all of the type selections, keeping it as a text input for now, placeholder for now
                placeholder="Type"
                onChange={pTypeChangeHandler}
                />
                <br/>
                <input type="number"
                placeholder="Quantity of item"
                onChange={pQuantityChangeHandler}
                />
                <br/>
                <input type="text" //Not sure how i want to treat this yet, need to think about how to incorperate this, placeholder for now
                placeholder="Ingredients in product"
                onChange={pIngredientsChangeHandler}
                />
                <br/>

            </form>
        </div>
    )

}