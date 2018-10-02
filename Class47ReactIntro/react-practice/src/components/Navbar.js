import React from "react";
//import "../styles/Navbar.css";

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

const Navbar = () => (
  <nav className="navbar" style={styles.navbar}>
    <a href="/" style={styles.a}>Welcome</a>
  </nav>
);

const styles = {
  navbar: {
    background: "#6a1b9a",
    height: 60,
  },
  
  a: {
    color: "white",
    fontSize: "1.3rem",
    textSecoration: "none",
    margin: 5,
    lineHeight: 3
  }
}

export default Navbar;
