import React from "react";
import { Grid, Row, Col, Image } from "react-bootstrap";
import "./AOKListItems.css";

const AOKListItems = props => (
    <Grid id="listItemsGrid">
        <Row className="aboutSections">
            <Col md={12}>
                <h4>
                    <b>{props.title} -- {props.date}</b>
                </h4>
            </Col>
        </Row>
        <Row>
            <Col md={3}>
                <Image src={props.image} className="thumbnail" responsive />
            </Col>
            <Col md={9}>
                <Row>
                    <Col md={1}>
                        <b>
                            Story:
                        </b>
                    </Col>
                    <Col md={11}>
                        {props.story}
                    </Col>
                </Row>
                <Row>
                    <Col md={1}>
                        <b>
                            Inspire:
                        </b>
                    </Col>
                    <Col md={11}>
                        {props.link}
                    </Col>
                </Row>
            </Col>
        </Row>
    </Grid>
);

export default AOKListItems;