import React from "react";
import Heading from "../../components/Heading";
import Wrapper from "../../components/Wrapper";
import { Grid, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./About.css";
import Ripples from "../../images/ripples.jpg";

const About = props => (
    <Wrapper backgroundImage={Ripples}>
        <Grid className="gridStyle">
            <Row>
                <Col md={8} mdOffset={2}>
                    <Heading>
                        <h1>
                            About AOKTracker
                        </h1>
                    </Heading>
                </Col>
            </Row>
            <Row className="aboutSections">
                <Col md={8} mdOffset={2}>
                    <h4>
                        The purpose of the AOKTracker is to connect people with a common goal of spreading kindness.
                    </h4>
                </Col>
            </Row>
            <Row>
                <Col md={8} mdOffset={2}>
                    <h4>
                        It is entirely anonymous, so everyone can share their experiences freely.
                    </h4>
                </Col>
            </Row>
            <Row>
                <Col md={8} mdOffset={2}>
                    <h4>
                        Below, you'll find links to an Acts of Kindness List/Message board, where you can add an AOK that you have experienced, 
                    </h4>
                </Col>
            </Row>
            <Row>
                <Col md={8} mdOffset={2}>
                    <h4>
                        as well as how it might have inspired you to perform an AOK of your own.  You can also leave notes about any AOK on the list for the author.
                    </h4>
                </Col>
            </Row>
            <Row className="aboutSections">
                <Col md={2} mdOffset={2}>
                    <Link href="/aoklist" to="/aoklist" className="routingLinks">
                        AOK List
                    </Link>
                </Col>
                <Col md={2}>
                    <Link href="/suggestedaok" to="/suggestedaok" className="routingLinks">
                        Daily Suggested AOK
                    </Link>
                </Col>
            </Row>
            <Row className="aboutSections" id="quote">
                <Col md={8} mdOffset={2}>
                    <blockquote>
                        <h3>
                            "Remember there's no such thing as a small act of kindness.  Every act creates a ripple with no logical end." --Scott Adams
                        </h3>
                    </blockquote>
                </Col>
            </Row>
            <a className="routingLinks" onClick={props.onClick}>
                Click to Return to the Top
            </a>
        </Grid>
    </Wrapper>
);

export default About;