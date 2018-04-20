import React, { Component } from "react";
import { Grid, Row, Col, Image, Button } from "react-bootstrap";
import AOKNote from "../AOKNote";
import AOKModal from "../AOKModal";
import { Input, Textarea, SubmitBtn } from "../Form";
import API from "../../utils/API";
import "./AOKListItems.css";

class AOKListItems extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <Grid id="listItemsGrid">
                <Row className="aboutSections">
                    <Col md={9}>
                        <h4>
                            <b>{this.props.title} / {this.props.date}</b>
                        </h4>
                    </Col>
                    <Col md={3}>
                        <Button onClick={this.props.showCreateNote}>
                            Add Note to this AOK
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <Image src={this.props.image} className="thumbnail" responsive />
                    </Col>
                    <Col md={9}>
                        <Row>
                            <Col md={1}>
                                <b>
                                    Story:
                                </b>
                            </Col>
                            <Col md={11}>
                                {this.props.story}
                            </Col>
                        </Row>
                        <Row>
                            <Col md={1}>
                                <b>
                                    Inspire:
                                </b>
                            </Col>
                            <Col md={11}>
                                {this.props.link}
                            </Col>
                        </Row>
                    </Col>
                </Row>  
            </Grid>
        )
    }
}  


export default AOKListItems;