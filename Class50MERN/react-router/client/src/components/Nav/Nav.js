import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Books from "../../pages/Books";



const Nav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/">
      React Reading List
    </a>
    <Link to="/">Home</Link>
    <Link to="/books">Books</Link>
  </nav>
);

export default Nav;
