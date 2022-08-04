
import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import AboutMe from "./components/aboutMe";
import Catalog from "./components/catalog";


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


      <Footer></Footer>
    </div>
  
  );
}

export default App;
