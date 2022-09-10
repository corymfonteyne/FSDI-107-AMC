

import "./admin.css"
import { useState } from "react";
import DataService from "../services/dataService";

const Admin = () => {
    const [product, setProduct] = useState({});
    const [coupon, setCoupon] = useState({});
    const [showProdSuccess, setShowProdSuccess] = useState(false);


    const saveProduct = async() => {
        console.log("Product saved!")
        console.log(product);  
        
        // use the service to send it to the server

        let fixProd = {...product};
        fixProd.price = parseFloat(fixProd.price);

        let service = new DataService();
        let savedProd = await service.saveProduct(fixProd);

        if(savedProd && savedProd._id){
            setShowProdSuccess(true);

            setTimeout(() =>{
                setShowProdSuccess(false);
            },3000);
        }
        console.log(savedProd);
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

        let copy = {...coupon};
        copy.discount = parseFloat(copy.discount);

        let service = new DataService();
        service.saveCoupon(copy);
    };

    const couponChange = (e) => {
        let value = e.target.value;
        let name = e.target.name;

        let copy = {...coupon,};
        copy[name] = value;
        setCoupon(copy);
    };

    const loadCoupons = async () => {
        let service = new DataService();
        let allCoupons = await service.getCoupons();
        console.log(allCoupons);
    };

    useEffect(() => {
        loadCoupons();
    }, []);

    return (
        <div className="admin">
            <h1>Store Administrator</h1>

            {showProdSuccess ? <div className="alert alert-success">
                Product Saved
            </div> : null}

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