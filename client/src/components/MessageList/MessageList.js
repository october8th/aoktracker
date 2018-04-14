import React from "react";
import { Grid, Row, Col, Image, ListGroup, ListGroupItem } from "react-bootstrap";

const MessageListItem = props => (
    <ListGroup>
        <ListGroupItem>
            <div className="container">
                <Row>
                    <Col xs={4} md={2}>
                        <Image src={props.image} thumbnail />
                    </Col>
                    <Col xs={8} md={10}>
                        <p>
                            {props.story}
                        </p>
                    </Col>
                </Row>
            </div>
        </ListGroupItem>
        <ListGroupItem>
            Link: {props.link}
        </ListGroupItem>
    </ListGroup>
);

export default MessageListItem;
