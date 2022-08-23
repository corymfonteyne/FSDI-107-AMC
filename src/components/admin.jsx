

import "./admin.css"
import { useState } from "react";

const Admin = () => {
    const [product, setProduct] = useState({});
    const [coupon, setCoupon] = useState({});


    const saveProduct = () => {
        console.log("Product saved!")
        console.log(product);   
    };

    const textChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        let copy = {...product,};
        copy[name] = value;
        setProduct(copy);
    };

    const saveCoupon = () => {
        console.log(coupon);
    };

    const couponChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        let copy = {...coupon,};
        copy[name] = value;
        setCoupon(copy);
    };

    return (
        <div className="admin">
            <h1>Store Administrator</h1>

            <div className="parent">
                <section className="products">
                 <h3>Register Product</h3>

                 <div className="my-form">
                    <label>Title:</label>
                    <input name="title" onChange={textChange} 
                    type="text"/>
                    </div>
                 <div className="my-form">
                    <label>Price:</label>
                    <input name="price" onChange={textChange} type="number"/>
                    </div>
                 <div className="my-form">
                    <label>Image:</label>
                    <input name="image" onChange={textChange}
                     type="text"/>
                    </div>
                 <div className="my-form">
                    <label>Category:</label>
                    <input name="category" onChange={textChange} type="text"/>
                    </div>
                    <div className="my-form">
                    <button className="btn btn-md btn-info" onClick={saveProduct}>Save Product</button>
                    </div>
                </section>

                <section className="list">
                    <h3>Discount Codes</h3>

                    <div className="my-form">
                    <label>Code</label>
                    <input name="code" onChange={couponChange} type="text"/>
                    </div>

                    <div className="my-form">
                    <label>Discount</label>
                    <input name="discount" onChange={couponChange} type="text"/>
                    </div>

                    <div className="my-form">
                    <button onClick={saveCoupon} className="btn btn-primary">Save</button>
                    </div>

                </section>
                    
            </div>
        </div>
    );  
};


export default Admin;