import React, { Component } from "react";
import { Grid, Row, Col, PageHeader, Alert } from "react-bootstrap";
import superagent from "superagent";
import AOKModal from "../../components/AOKModal";
import { Input, SubmitBtn } from "../../components/Form";
import Wrapper from "../../components/Wrapper";
import Nav from "../../components/Nav";
import Ripples from "../../images/ripples.jpg";
import "./LogInPage.css";

class LogInPage extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            username: "",
            password: "",
            show: false
        }
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleLogin = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            console.log(`Username: ${this.state.username} \n Password: ${this.state.password}`);
        }
        this.handleClose();
    }

    if !(this.handleLogin) {
        render() {
            return(
            <Wrapper>
                <Nav />
                <Grid>
                    <Row>
                        <Col md={12}>
                            <PageHeader>
                                You Must Be Logged In to See this Page
                            </PageHeader>
                            <SubmitBtn onClick={this.handleShow}>
                                Log In
                            </SubmitBtn>
                        </Col>
                    </Row>
                </Grid>
            </Wrapper>
            )
        }
    } else {

    render() {
        return (
            <Wrapper>
                <Nav />
                <Grid>
                    <Row>
                        <Col md={12}>
                            <PageHeader>
                                Welcome, {this.state.userName}!
                            </PageHeader>
                        </Col>
                    </Row>
                    <AOKModal
                        show={this.state.show}
                        hide={this.handleClose}
                        title="Log Into Page"
                        submit={this.handleLogin}
                        close={this.handleClose}
                    >
                        <Input
                            type="text"
                            value={this.state.userName}
                            onChange={this.handleInputChange}
                            name="username"
                            placeholder="Username"
                        />
                        <Input
                            type="password"
                            value={this.state.password}
                            onChange={this.handleInputChange}
                            name="password"
                            placeholder="Password"
                        />
                    </AOKModal>
                </Grid>
            </Wrapper>
        );
    }
}}

export default LogInPage;