import React from "react";
import { Container, Row, Col } from "../Grid";

export const CommentPost = props => (
    <li className="list-group-item">
        <Container>
            <Row>
                <Col size="xs-4 sm-2">
                    <h5>
                        {props.name}:
                    </h5>
                </Col>
                <Col size="xs-8 sm-9">
                    <p>
                        {props.message}
                    </p>
                </Col>
            </Row>
        </Container>
    </li>
);
