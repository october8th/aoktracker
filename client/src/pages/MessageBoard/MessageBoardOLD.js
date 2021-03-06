import React, { Component } from "react";
import CustomNav from "../../components/Nav";
import Wrapper from "../../components/Wrapper";
import Heading from "../../components/Heading";
import AOKModal from "../../components/AOKModal";
import AOKListItems from "../../components/AOKListItems";
import { Input, Textarea, SubmitBtn } from "../../components/Form";
import API from "../../utils/API";
import { Button, ListGroup, ListGroupItem, Panel, Grid, Row, Col, Image } from "react-bootstrap";
import "./MessageBoard.css";
import Ripples from "../../images/ripples.jpg";
//for testing purposes
import AOKs from "../../AOK.json";
const querystring = require('query-string');
class AOKMessageBoard extends Component {
        
        state = {
            AOKs,
            image: "",
            date: "",
            title: "",
            link: "",
            story: "",
            lat: "",
            lng: ""
        };
    
    componentDidMount() {
        this.loadActs();
        this.grabLoc();
    }

    grabLoc = () => {
        API.getLoc()
            .then(res =>
                console.log(res.data)
            )
            .cath(err => console.log(err))
    };

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
            console.log(`${this.state.image}`);
            const postData = querystring.stringify({
          // Value taken from title input
          image: `${this.state.image}`,
          date: `${this.state.date}`,
          title: `${this.state.title}`,
          story: `${this.state.story}`,
          inspiration: `${this.state.link}`
        });
        fetch('/api/new', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: postData
          })
            // With that done
            .then(function(data) {
              // Log the response
              console.log(data);
              // Empty the notes section
            });

          // Also, remove the values entered in the input and textarea for note entry
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
                    <Row>
                        <Col md={8}>
                            {this.state.AOKs.map(aok => (
                                <AOKListItems
                                    key={aok.id}
                                    title={aok.title}
                                    date={aok.date}
                                    image={aok.image}
                                    story={aok.story}
                                    link={aok.link}
                                />
                            ))}
                        </Col>
                    </Row>
                </Grid>
            </Wrapper>
        );
    }
}

export default AOKMessageBoard;