import React, { Component } from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";
import { SubmitBtn } from "../Form";
import "./AOKModal.css";

class AOKModal extends Component {
    constructor(props, context) {
        super(props, context);
    }
    
    render() {
        return (
            <div>
                <Modal
                    show={this.props.show}
                    onHide={this.props.hide}
                    aria-labelledby="aok-modal"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="aok-modal">
                            {this.props.title}
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {this.props.children}
                    </Modal.Body>
                    <Modal.Footer>
                        <SubmitBtn
                            type="submit"
                            onClick={this.props.submit}
                        />
                        <Button
                            onClick={this.props.close}
                        >
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default AOKModal;


