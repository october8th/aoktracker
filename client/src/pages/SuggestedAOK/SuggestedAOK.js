import React, { Component } from "react";
import { Grid, Row, Col } from "react-bootstrap";
import Wrapper from "../../components/Wrapper";
import CustomNav from "../../components/Nav";
import ConfirmBtn from "../../components/ConfirmBtn";
import AOKCard from "../../components/AOKCard";
import "./SuggestedAOK.css";
import Ripples from "../../images/ripples.jpg";

class SuggestedAOK extends Component {

    state = {
        confirmations: 0
    }

    handleButtonClick = () => {
        this.setState({ confirmations: this.state.confirmations + 1});
    }

    render() {
        return (
            <Wrapper backgroundImage={Ripples}>
                <CustomNav />
                    <Grid>
                        <Row>
                            <Col md={6} mdOffset={3}>
                                <AOKCard 
                                    suggestion="Hold the door open for someone else." 
                                    counter={this.state.confirmations}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6} mdOffset={3}>
                                <h4>
                                    Did you do today's AOK?  Click on the star to confirm.
                                    <ConfirmBtn 
                                        onClick={this.handleButtonClick}>
                                        <span className="glyphicon glyphicon-star-empty"></span>
                                    </ConfirmBtn>
                                </h4>
                            </Col>
                        </Row>
                    </Grid>
            </Wrapper>
        );
    }
}

export default SuggestedAOK;