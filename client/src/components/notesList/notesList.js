import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";
import { SubmitBtn } from "../Form";
import "./notesList.css";

class notesList extends Component {
    constructor(props, context) {
        super(props, context);
    }
    
    render() {
        return (
            <div>
                {this.props.name} / {this.props.date}: {this.props.message}
            </div>
        );
    }
}

export default notesList;


