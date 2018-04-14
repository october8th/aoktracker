import React, { Component } from "react";
import CustomNav from "../../components/Nav";
import Wrapper from "../../components/Wrapper";
import Heading from "../../components/Heading";
import AOKModal from "../../components/AOKModal";
import AOKPost from "../../components/MessageList";
import { Input, Textarea, SubmitBtn } from "../../components/Form";
import API from "../../utils/API";
import { Button, ListGroup, ListGroupItem, Panel, Grid, Row, Col, Image } from "react-bootstrap";
import "./MessageBoard.css";
import Ripples from "../../images/ripples.jpg";
//for testing purposes
import AOKs from "../../test-data/AOK.js";

class AOKMessageBoard extends Component {
        
        state = {
            AOKs,
            image: "",
            date: "",
            title: "",
            link: "",
            story: ""
        };
    

    componentDidMount() {
        this.loadActs();
    }

    loadActs = () => {
        API.getActs()
            .then(res =>
                console.log(res.data)
            )
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.title && this.state.date && this.state.story) {
            console.log(`Image: ${this.state.image} \n Date: ${this.state.date} \n Title: ${this.state.title} \n Story: ${this.state.story} \n Link: ${this.state.link}`);
        }
    };

    render() {
        return (
            <Wrapper backgroundImage={Ripples}>
                <CustomNav />
                <Grid className="gridStyle">
                    <Row>
                        <Col md={8} mdOffset={2}>
                            <Heading>
                                <h1>
                                    This Is the AOK List
                                </h1>
                            </Heading>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} mdOffset={2}>
                            <h3>
                                Add a New Act of Kindness
                            </h3>
                            <AOKModal>
                                <Input
                                    type="text"
                                    value={this.state.image}
                                    onChange={this.handleInputChange}
                                    name="image"
                                    placeholder="Load Your Image"
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
                                <Input
                                    type="text"
                                    value={this.state.link}
                                    onChange={this.handleInputChange}
                                    name="link"
                                    placeholder="What inpired you to do this act of kindness?"
                                />
                                <Textarea
                                    value={this.state.story}
                                    onChange={this.handleInputChange}
                                    name="story"
                                    placeholder="This is what I did as an act of kindness for someone else."
                                />
                                <SubmitBtn
                                    type="submit"
                                    onClick={this.handleFormSubmit}
                                />
                            </AOKModal>
                        </Col>
                    </Row>
                </Grid>
            </Wrapper>
        );
    }
}

export default AOKMessageBoard;