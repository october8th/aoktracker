import React, { Component } from "react";
import CustomNav from "../../components/Nav";
import Wrapper from "../../components/Wrapper";
import Heading from "../../components/Heading";
import { Col, Row, Container } from "../../components/Grid";
import AOKModal from "../../components/AOKModal";
import { Input, Textarea, SubmitBtn } from "../../components/Form";
import { Button, ListGroup, ListGroupItem, Panel } from "react-bootstrap";
import "./MessageBoard.css";
import Ripples from "../../images/ripples.jpg";
import actsOfKindness from "../../test-data/AOK.js";

class AOKMessageBoard extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            actsOfKindness = [],
            name: "",
            date: "",
            title: "",
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
            const userData = {
                name: this.state.name,
                date: this.state.date,
                summary: this.state.summary
            }
            actsOfKindness.push(userData);
            console.log(actsOfKindness);
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
                        <Input
                            type="text"
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            name="title"
                            placeholder="Summary Title"
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
                    {this.state.actsOfKindness.map(act => (
                        <Panel>
                            <Panel.Heading>
                                {act.title}
                            </Panel.Heading>
                            <Panel.Body>
                                <ListGroup>
                                    <ListGroupItem>
                                        Name: {act.name}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Date: {act.date}
                                    </ListGroupItem>
                                    <ListGroupItem>
                                        Summary: {act.summary}
                                    </ListGroupItem>
                                </ListGroup>
                            </Panel.Body>
                        </Panel>
                    ))}
                </Container>
            </Wrapper>
        );
    }
}

export default AOKMessageBoard;