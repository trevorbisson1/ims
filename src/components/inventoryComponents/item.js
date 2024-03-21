import React from "react";

function Item(props) {
    return (
        <div className="Item">
            <h5>{props.item.pName}</h5>
            <h6>Quantity: {props.item.pQuantity}</h6>
        </div>
    );
}

export default Item;