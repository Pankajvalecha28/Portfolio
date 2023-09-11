import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav class="navbar navbar-dark bg-dark fixed-top navbar-expand-lg">
        <div class="container-fluid">
          <Link class="navbar-brand" to="/">
            CRUD
          </Link>
          
          <div>  <Link class="navbar-brand btn btn-primary" to="/Data">
            View Data
          </Link></div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
