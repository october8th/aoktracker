import React, { Component } from "react";
import { Grid, Row, Col, PageHeader } from "react-bootstrap";
import Wrapper from "../../components/Wrapper";
import CustomNav from "../../components/Nav";
import ConfirmBtn from "../../components/ConfirmBtn";
import AOKCard from "../../components/AOKCard";
import "./SuggestedAOK.css";
import Ripples from "../../images/ripples.jpg";


class SuggestedAOK extends Component {

    state = {
        confirmations: 0,
        spanClass: "glyphicon glyphicon-star-empty"
    }

    handleButtonClick = () => {
        this.setState({ confirmations: this.state.confirmations + 1, spanClass: "glyphicon glyphicon-star" });

    }

    render() {
        return (
                <Wrapper backgroundImage={Ripples}>
                    <CustomNav />
                    <Grid>
                        <Row>
                           <Col md={12}>
                                <PageHeader className="headerStyle">
                                    Daily AOK Suggestion
                                </PageHeader>
                            </Col>
                        </Row>
                        <Row id="aokCardMargin">
                            <Col md={6} mdOffset={3}>
                                <AOKCard 
                                    suggestion="Hold the door open for someone else." 
                                    counter={this.state.confirmations}
                                    onClick={this.handleButtonClick}
                                    spanClass={this.state.spanClass}
                                />
                            </Col>
                        </Row>
                    </Grid>
                </Wrapper>
        );
    }
}

export default SuggestedAOK;