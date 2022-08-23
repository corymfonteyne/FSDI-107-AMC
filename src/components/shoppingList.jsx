
import "./shoppingList.css";
import { useState } from "react";

const ShoppingList = () => {
    const [text,setText] = useState("");
    const [items, setItems] = useState([]);

    //creata a state variable: items []
    //when user saves, you append the text to the items array
    //on return, map items to li

    const save = () => {
        console.log(text);

        let clone = [...items];
        clone.push(text);
        setItems(clone);
    };

    const textChange = (e) => {
        let value = e.target.value;
        setText(value);
        
    };

    return(
        <div className="shop-list">
            <h1>Your Shopping List</h1>
    
            <div className="form">
                <label><b>Add to List:</b></label>
                <input onChange={textChange} type="text" />
                <button onClick={save} className="btn btn-sm btn-primary">Add</button>
            </div>

            <ul>
                {items.map((items) => (
                    <li>{items}</li>
                ))}
            </ul>
    
        </div>
    
    );

};

export default ShoppingList;
    

        