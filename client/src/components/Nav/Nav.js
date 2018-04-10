import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "./Nav.css";
import Facebook from "../Facebook";

class CustomNav extends Component {
    render() {
        return (
            <Navbar collapseOnSelect>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">
                            AOKTracker
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem componentClass={ Link } href="/about" to="/about" className="link">
                            About
                        </NavItem>
                        <NavItem componentClass={ Link } href="/messageboard" to="/messageboard" className="link">
                            AOK List
                        </NavItem>
                        <NavItem componentClass={ Link } href="#" to="#" className="link">
                            <Facebook />
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default CustomNav;
