
import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import QuantityPicker from "./components/quantityPicker";



function App() {
  return (
    <div className="App">
      <NavBar></NavBar>

      <h1>Arbor Mill Customs</h1>

      <div className="quantity-picker">
        <QuantityPicker></QuantityPicker>
      </div>

      <Footer></Footer>
    </div>
  
  );
}

export default App;
