import React from "react";
import { Link } from "react-router-dom";
import "./ScrollBtn.css";

const ScrollBtn = props => (
    <section>
        <Link to={props.href}
            id="scrollBtn"
            onClick={props.onClick}>
            <span>
            </span>
            Scroll
        </Link>
    </section>
);

export default ScrollBtn;