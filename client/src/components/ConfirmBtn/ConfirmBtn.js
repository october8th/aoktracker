import React from "react";
import { Button } from "react-bootstrap";
import "./ConfirmBtn.css";

const ConfirmBtn = props => (
    <Button
        id="confirmBtnStyle"
        {...props}
    >
        {props.children}
    </Button>
);

export default ConfirmBtn;