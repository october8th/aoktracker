import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Facebook from "../Facebook";

const Nav = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
            AOKTracker
        </Link>
        <div>
            <ul className="navbar-nav">
                <li
                    className={
                        window.location.pathname === "/about"
                            ? "nav-item active"
                            : "nav-item"
                    }
                >
                    <Link to="/about" className="nav-link">
                        About
                    </Link>
                </li>
                <li>
                    <Facebook />
                </li>
            </ul>
        </div>
    </nav>
);

export default Nav;
