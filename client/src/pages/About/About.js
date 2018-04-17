import React, { Component } from "react";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import { Grid, Row, Col, PageHeader } from "react-bootstrap";
import CustomNav from "../../components/Nav";
import Wrapper from "../../components/Wrapper";
import SuggestedAOK from "../SuggestedAOK";
import Ripples from "../../images/ripples.jpg";
import "./About.css";

const styles = {
    centerText: {
        textAlign: "center",
        marginTop: 20
    }
}

class About extends Component {
    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    componentDidMount() {
        Events.scrollEvent.register("begin", function(to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register("end", function(to, element) {
            console.log("end", arguments);
        });

        scrollSpy.update();
    }

    scrollToTop() {
        scroll.scrollToTop();
    }
    
    scrollTo() {
        scroller.scrollTo("scroll-to-element", {
            duration: 500,
            delay: 10,
            smooth: true,
            isDynamic: true,
            offset: 500
        });
    }

    componentWillUnmount() {
        Events.scrollEvent.remove("begin");
        Events.scrollEvent.remove("end");
    }

    render() {
        return (
            <div id="secondParent">
            <Wrapper backgroundImage={Ripples}>
                <div id="aboutStyle">
                <CustomNav />
                <Grid>
                    <Row>
                        <Col md={12}>
                            <PageHeader className="headerStyle">
                                About AOKTracker
                            </PageHeader>
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
                                To see today's Suggested Daily Act of Kindness, keep scrolling!
                            </h4>
                            <h4 style={styles.centerText}>
                                <Link activeClass="active" id="scrollDown" to="SuggestedAOK" spy={true} smooth={true} isDynamic={true} duration={1500}>
                                    <span className="glyphicon glyphicon-menu-down" style={styles.centerText}></span>
                                </Link>
                            </h4>
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
                </Grid>
                </div>
                </Wrapper>
                <Element name="SuggestedAOK">
                    <SuggestedAOK />
                </Element>
            </div>
        );
    }
} 

export default About;