import React, { Component } from "react";
import CustomNav from "../../components/Nav";
import Wrapper from "../../components/Wrapper";
import Heading from "../../components/Heading";
import { Col, Row, Container } from "../../components/Grid";
import AOKModal from "../../components/AOKModal";
import { Input, Textarea, SubmitBtn } from "../../components/Form";
import { Button } from "react-bootstrap";
import "./MessageBoard.css";
import Ripples from "../../images/ripples.jpg";

class AOKMessageBoard extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: "",
            date: "",
            summary: ""
        };
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.name && this.state.date && this.state.summary) {
            console.log(`Name: ${this.state.name} \n Date: ${this.state.date} \n Summary: ${this.state.summary}`);
        }
    }

    render() {
        return (
            <Wrapper backgroundImage={Ripples}>
                <CustomNav />
                <Heading>
                    <h1>
                        This Is the AOK List
                    </h1>
                </Heading>
                <Container>
                    <h5>
                        Add a New Act of Kindness
                        
                    </h5>
                    <AOKModal>
                        <Input
                            type="text"
                            value={this.state.name}
                            onChange={this.handleInputChange}
                            name="name"
                            placeholder="Your Name"
                        />
                        <Input
                            type="date"
                            value={this.state.date}
                            onChange={this.handleInputChange}
                            name="date"
                            placeholder="Date of AOK"
                        />
                        <Textarea
                            value={this.state.summary}
                            onChange={this.handleInputChange}
                            name="summary"
                            placeholder="This is what happened and how it inspired me."
                        />
                        <SubmitBtn
                            type="submit"
                            onClick={this.handleFormSubmit}
                        />
                    </AOKModal>
                </Container>
            </Wrapper>
        );
    }
}

export default AOKMessageBoard;