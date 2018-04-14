import React from "react";
import { Panel, Grid, Row, Col, Image } from "react-bootstrap";
import "./AOKPost.css";

const AOKPost = props => (
    <Panel>
        <Panel.Head>
            {props.title}
        </Panel.Head>
        <Panel.Body>
            <Grid>
                <Row>
                    <Col md={3}>
                        <Image href={props.image} responsive className="thumbnail" />
                    </Col>
                    <Col md={9}>
                        <p>
                            {props.story}
                        </p>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        Date: {props.date}
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        Link: {props.link}
                    </Col>
                </Row>
            </Grid>
        </Panel.Body>
    </Panel>
);

export default AOKPost;