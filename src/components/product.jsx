

import "./product.css";
import QuantityPicker from "./quantityPicker";

const Product = (props) => {
    return (
        <div className="product">
            <img src ={"/images/" + props.data.image} alt="product" />

            <h3>{props.data.title}</h3>

            <label><b>Price:</b> {props.data.price.toFixed(2)}</label>
            <label><b>Total:</b> {props.data.price.toFixed(2)}</label>

            <QuantityPicker></QuantityPicker>

        </div>
    );
};

export default Product;