import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Facebook from "../Facebook";

const Nav = props => (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
            AOKTracker
        </Link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navCollapseContent" aria-controls="navCollapseContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navCollapseContent">
            <ul className="navbar-nav ml-auto">
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
