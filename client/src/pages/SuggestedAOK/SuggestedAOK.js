import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Wrapper from "../../components/Wrapper";
import CustomNav from "../../components/Nav";
import AOKCard from "../../components/AOKCard";
import "./SuggestedAOK.css";
import Ripples from "../../images/ripples.jpg";

class SuggestedAOK extends Component {
    render() {
        return (
            <Wrapper backgroundImage={Ripples}>
                <CustomNav />
                    <Grid>
                        <Row>
                            <Col md={6} mdOffset={3}>
                                <AOKCard suggestion="Hold the door open for someone else." />
                            </Col>
                        </Row>
                    </Grid>
            </Wrapper>
        );
    }
}

export default SuggestedAOK;