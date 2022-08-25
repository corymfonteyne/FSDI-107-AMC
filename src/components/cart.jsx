

import "./cart.css";
import {useContext} from "react";
import StoreContext from "./../store/storeContext";

const Cart = () => {
    const cart = useContext(StoreContext).cart;

    return (
        <div className="cart">
            <h4>Ready to Checkout?</h4>
            <h5>We have {cart.length} items ready for you</h5>
               
            <ul>
                {cart.map(prod => <li key={prod._id}>{prod.title} {prod.image}</li>)}
            </ul>
               
        </div>
    );
};

export default Cart;