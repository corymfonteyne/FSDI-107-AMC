

import "./home.css";
import {Link} from "react-router-dom";



const Home = () => {
    return (
        <div className="home">
            <h1>Arbor Mill Customs</h1>

            <div>
            <img src ="/images/Artboard9.png"  alt="logo" />
            </div>

            <h4>North Berwick, ME</h4>
            <h5>(603) 969-4578</h5>

            <Link className="btn btn-lg btn-dark" to="/catalog">
                check out our amazing catalog
            </Link>
        </div>

    );
};

export default Home;