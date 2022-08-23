

import "./navBar.css";
import {Link} from "react-router-dom"

const NavBar = () => {
    return (
        <div className="NavBar">

        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
            <Link class="navbar-brand" to="#">Navbar</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/home">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/catalog">
                Catalog
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/list">
                My List
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </li>

            </ul>
            <form className="d-flex" role="search">
              <Link className="btn btn-lg" to="/cart">
                Cart
              </Link>
            </form>
            </div>
        </div>
        </nav>

        </div>
    );
}


export default NavBar;