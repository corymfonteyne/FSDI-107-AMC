

import "./cart.css";
import {useContext} from "react";
import StoreContext from "./../store/storeContext";
import ProductInCart from "./../components/productInCart";

const Cart = () => {
    const cart = useContext(StoreContext).cart;

    const getNumItems  = () => {
        let sum  = 0;
        // count the number of products in cart array
        for (let i = 0; i < cart.length; i++) {
          let prod = cart[i];
          sum += prod.quantity;
        }
        return sum;
      };
      const getTotal = () => {
        let total = 0;
        for (let i = 0; i < cart.length; i++) {
            let prod = cart[i];
            total += prod.quantity * prod.price;
            }
        return total.toFixed(2);
      };

    return (
        <div className="cart">
            <h4>Ready to Checkout?</h4>
            <h5>We have {getNumItems()} items ready for you</h5>

            <div className="parent">

                <div className="products">
                    {cart.map((prod) => <ProductInCart key={prod.id} data={prod}></ProductInCart>)}
                </div>

                <div className="side-menu">
                    <h3>Your total is: {getTotal()}</h3>
                </div>

            </div>
           
        </div>
    );
};

export default Cart;