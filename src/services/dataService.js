import axios from "axios";

const catalog = [
    {
        _id: "test-1",
        title: "test-a",
        price: 10,
        category: "test-category",
        image: "testimage1.jpg",
    },
    {
        _id: "test-2",
        title: "test-b",
        price: 20,
        category: "test-category",
        image: "testimage2.jpg",
    },
    {
        _id: "test-3",
        title: "test-c",
        price: 30,
        category: "test-category",
        image: "testimage3.jpg",
    },
    {
        _id: "test-4",
        title: "test-d",
        price: 40,
        category: "test-category",
        image: "testimage4.jpg",
    },
    {
        _id: "test-5",
        title: "test-e",
        price: 50,
        category: "test-category",
        image: "testimage5.jpg",
    },
    {
        _id: "test-6",
        title: "test-f",
        price: 60,
        category: "test-category",
        image: "testimage6.jpg",
    },
    {
        _id: "test-7",
        title: "test-g",
        price: 70,
        category: "test-category",
        image: "testimage7.jpg",
    },
];

class DataService {

    serverURL = "http://127.0.0.0:5000"

    async getCatalog() {
        //call the server
        //get the list of products and return it 
        let res = await axios.get(this.serverURL + "/api/catalog");
        return res.data;
        // return catalog;
    }
    async saveProduct(prod){
        let res = await axios.post(this.serverURL + "/api/catalog", prod);
        return res.data;
    }
    async getCoupons(){
        let res = await axios.get(this.serverURL + "/api/coupons");
        return res.data;
    }
    async saveCoupons(coupon){
        let res = await axios.post(this.serverURL + "/api/coupons", coupon);
        return res.data;
    }
}

export default DataService; 