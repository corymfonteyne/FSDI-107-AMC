

import "./quantityPicker.css";
import {useState} from "react";

const QuantityPicker = (props) => {
        const [quantity, setQuantity] = useState(1);

    const increase = () => {
        console.log('click on react');
        //quantity = 100; never do this!!
        let next = quantity + 1;
        setQuantity(next);
        props.onChange(next);
    };

    const decrease = () => {
        console.log('click on react');
        let next = quantity - 1;
        if(next > 0) {
            setQuantity(next);
            props.onChange(next)
        }
    };

    return (
    <div className="quantity-picker"> 
        <button className="btn btn-sm btn-info" onClick={decrease}>-</button>
        <label>{quantity}</label>
        <button className="btn btn-sm btn-info" onClick={increase}>+</button>
    </div>
    );
};

export default QuantityPicker;