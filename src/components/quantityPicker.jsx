

import "./quantityPicker.css";
import {useState} from "react";

const QuantityPicker = () => {
        const [quantity, setQuantity] = useState(1);

    const increase = () => {
        console.log('click on react');

        //quantity = 100; never do this!!
        let next = quantity + 1;
        setQuantity(next);
    };
    const decrease = () => {
        console.log('click on react');
        let previous = quantity - 1;
        if(previous > 0)
        setQuantity(previous);
    };

    return (
    <div className="quantity-picker"> 
        <button onClick={decrease}>-</button>
        <label>{quantity}</label>
        <button onClick={increase}>+</button>
    </div>
    );
};

export default QuantityPicker;