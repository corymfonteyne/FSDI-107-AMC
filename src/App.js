
import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import AboutMe from "./components/aboutMe";
import Catalog from "./components/catalog";
import ShoppingList from "./components/shoppingList";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';



function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
    

      <h1>Arbor Mill Customs</h1>


      <div className="about-me">
        <AboutMe></AboutMe>
      </div>

      <div className="catalog">
        <Catalog></Catalog>
      </div>

      <div className="shop-list">
      <ShoppingList></ShoppingList>
      </div>

      <Footer></Footer>
    </div>
  
  );
}

export default App;
