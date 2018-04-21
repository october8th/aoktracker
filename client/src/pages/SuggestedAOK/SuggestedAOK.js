import React, { Component } from "react";
import { Grid, Row, Col, PageHeader } from "react-bootstrap";
import Wrapper from "../../components/Wrapper";
import CustomNav from "../../components/Nav";
import ConfirmBtn from "../../components/ConfirmBtn";
import AOKCard from "../../components/AOKCard";
import "./SuggestedAOK.css";
import Ripples from "../../images/gold_ripples.jpg";
import API from "../../utils/API";
const querystring = require('query-string');

class SuggestedAOK extends Component {

    state = {
        confirmations: 0,
        spanClass: "glyphicon glyphicon-star-empty"
    }

    handleButtonClick = () => {
       if(this.state.spanClass =="glyphicon glyphicon-star-empty")
       {
            var uid = localStorage.getItem('myData');
            if(uid == "undefined"){uid = '1234567891234';}
            const postData = querystring.stringify({
            // Value taken from title input
            myuserid: uid,
            });
            API.updateDaok(postData)
                .then( res =>
                    this.grabConfirms())
                .catch(err => console.log(err));
            //this.setState({ spanClass: "glyphicon glyphicon-star" }); 
            //console.log(uid);
        }


    }

    grabConfirms = () => {
        API.getDaok()
            .then( res =>
                this.setState({confirmations: res.data.howMany})
                )
            .catch(err => console.log(err));
        var uid = localStorage.getItem('myData');
        if(uid == "undefined"){uid = '1234567891234';}
        const postData = querystring.stringify({
          // Value taken from title input
          myuserid: uid,
          });

        API.checkDaok(postData)
        .then( res =>
            {
                //console.log(res.data)
                this.setState((res.data === null) ? { spanClass: "glyphicon glyphicon-star-empty" } : { spanClass: "glyphicon glyphicon-star" })
            });
    }

    componentDidMount() {
        this.grabConfirms();
    };

    render() {
        return (
                <Wrapper backgroundImage={Ripples}>
                    <CustomNav />
                    <Grid>
                        <Row>
                           <Col md={12}>
                                <PageHeader className="headerStyle" style={{marginTop: "100px"}}>
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