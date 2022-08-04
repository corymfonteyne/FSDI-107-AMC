

import "./quantityPicker.css;"

const QuantityPicker = () => {

    const increase = () => {
        console.log('click on react');
    };

    return (
    <div className="quantity-picker"> 
        <button onClick={increase}>+</button>
        <label>1</label>
        <button>-</button>
    </div>
    );
};

export default QuantityPicker;