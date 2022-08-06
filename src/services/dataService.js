
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

    getCatalog() {
        //calll the server
        //get the list of products and return it 

        return catalog;
    }
}

export default DataService 