import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import Facebook from "../Facebook";
import "./Nav.css";

class CustomNav extends Component {
    render() {
        return (
            <Navbar collapseOnSelect fluid fixedTop>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/" className="link">
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
                        <NavItem componentClass={ Link } href="/suggestedaok" to="/suggestedaok" className="link">
                            Daily Suggested AOK
                        </NavItem>
                        <NavItem componentClass={ Link } href="/aoklist" to="/aoklist" className="link">
                            AOK List
                        </NavItem>
                        <NavItem componentClass={ Link } href="/map" to="/map" className="link">
                            Map
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
