import React from "react";
// import { Button } from "react-bootstrap";
// import { NavLink as Link,} from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import useAuth from "../../hooks/useAuth";
import "./Header.css";

const Header = () => {
  const {user} = useAuth()
  return (
    <>
      <div className="nav-container sticky=top" >
        <nav className="logo">
          <h2><span style={{color:'skyblue'}}>Medi</span>Plus</h2>
        </nav>
        <nav className="item">
            <ul className="ul">
                <li><Link  to="/home">Home</Link></li>
                <li><Link to="/services">Services</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li ><Link to="/appointment">Appoitnment</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li>signed in : { user.email?
                user.displayName: "" 
                }</li>
            </ul>
        </nav>
      </div>
    </>
  );
};

export default Header;
 