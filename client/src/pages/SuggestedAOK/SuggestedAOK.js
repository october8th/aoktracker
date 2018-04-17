import React, { Component } from "react";
import { Grid, Row, Col, PageHeader } from "react-bootstrap";
import Wrapper from "../../components/Wrapper";
import CustomNav from "../../components/Nav";
import ConfirmBtn from "../../components/ConfirmBtn";
import AOKCard from "../../components/AOKCard";
import "./SuggestedAOK.css";
import Ripples from "../../images/ripples.jpg";


const styles = {
    suggestionMargin: {
        marginTop: 100
    }
}

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
                           <Col md={12}>
                                <PageHeader className="headerStyle" style={styles.suggestionMargin}>
                                    Daily AOK Suggestion
                                </PageHeader>
                            </Col>
                        </Row>
                        <Row id="aokCardMargin">
                            <Col md={6} mdOffset={3}>
                                <AOKCard 
                                    suggestion="Hold the door open for someone else." 
                                    counter={this.state.confirmations}
                                />
                            </Col>
                        </Row>
                        <Row style={styles.suggestionMargin}>
                            <Col md={6} mdOffset={3}>
                                <ConfirmBtn onClick={this.handleButtonClick} />
                            </Col>
                        </Row>
                    </Grid>
                </Wrapper>
        );
    }
}

export default SuggestedAOK;