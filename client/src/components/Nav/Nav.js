import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Facebook from "../Facebook";

const Nav = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
            AOKTracker
        </Link>
        <div className="ml-auto">
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
                <li
                    className={
                        window.location.pathname === "/messageboard"
                            ? "nav-item active"
                            : "nav-item"
                    }
                >
                    <Link to="/messageboard" className="nav-link">
                        AOK Message Board
                    </Link>
                </li>
                <li className="nav-item">
                    <Facebook />
                </li>
            </ul>
        </div>
    </nav>
);

export default Nav;
