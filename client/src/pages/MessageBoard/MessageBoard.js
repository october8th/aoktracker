import React, { Component } from "react";
import CustomNav from "../../components/Nav";
import Wrapper from "../../components/Wrapper";
import Heading from "../../components/Heading";
import AOKModal from "../../components/AOKModal";
import AOKListItems from "../../components/AOKListItems";
import { Input, Textarea, SubmitBtn } from "../../components/Form";
import API from "../../utils/API";
import { Button, ListGroup, ListGroupItem, Panel, Grid, Row, Col, Image, PageHeader } from "react-bootstrap";
import "./MessageBoard.css";
import Ripples from "../../images/ripples.jpg";
//import AOKs from "../../../src/AOK.json";

const querystring = require('query-string');
console.log(AOKListItems);
//var AOKs = [];

class AOKMessageBoard extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            AOKs: [],
            image: "",
            date: "",
            title: "",
            link: "",
            story: "",
            lat: "",
            lng: "",
            notes: [],
            showAokModal: false,
            showNoteModal: false
        }
    }    
    
    componentDidMount() {
        this.loadActs();
        this.grabLoc();
    };

    grabLoc = () => {
        API.getLoc()
            .then( res =>
                this.setState({lat: res.data.location.lat})
                )
            .catch(err => console.log(err));
        API.getLoc()
            .then( res =>
                this.setState({lng: res.data.location.lng})
                )
            .catch(err => console.log(err));

    };

    loadActs = () => {
        API.getActs()
            .then(res =>
                this.setState({AOKs:res.data, image: "", date: "", title: "", link: "", story: ""})
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
            /*const postData = querystring.stringify({
          // Value taken from title input
          
          image: `${this.state.image}`,
          date: `${this.state.date}`,
          title: `${this.state.title}`,
          story: `${this.state.story}`,
          inspiration: `${this.state.link}`,
          location: `${this.state.lat} , ${this.state.lng}`
          
        });*/ 
        API.saveNewAct({
            image: this.state.image,
            date: this.state.date,
            title: this.state.title,
            story: this.state.story,
            inspiration: this.state.link,
            location: [this.state.lat, this.state.lng]
        }).then( res => this.loadActs())
            .catch(err => console.log(err));

          // Also, remove the values entered in the input and textarea for note entry
        }
        this.setState({ showAokModal: false })
    };
    
    render() {

        let aokClose = () => this.setState({ showAokModal: false });
        let noteClose = () => this.setState({ showNoteModal: false });

        return (
            <Wrapper backgroundImage={Ripples}>
                <CustomNav />
                <Grid className="gridStyle">
                    <Row>
                        <Col md={12}>
                            <PageHeader className="headerStyle">
                                This Is the AOK List
                            </PageHeader>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8} mdOffset={2}>
                            <h3 id="aokListSubheading">
                                Add a New Act of Kindness
                            </h3>
                            <Button
                                bsStyle="primary"
                                onClick={() => this.setState({ showAokModal: true })}
                            >
                                Click Me!
                            </Button>
                            <AOKModal 
                                show={this.state.showAokModal}
                                hide={aokClose}
                                title="Add Your Act of Kindness"
                                submit={this.handleFormSubmit}
                                close={aokClose}
                            >
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
                                    placeholder="Did this inspire you to do your own act of kindness?"
                                />
                                <Textarea
                                    value={this.state.story}
                                    onChange={this.handleInputChange}
                                    name="story"
                                    placeholder="This is what someone else did for me."
                                />
                            </AOKModal>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={8}>
                            {this.state.AOKs.map(aok => (
                                <AOKListItems
                                    key={aok._id}
                                    title={aok.title}
                                    date={aok.date}
                                    image={aok.image}
                                    story={aok.story}
                                    link={aok.inspiration}
                                    showCreateNote={() => this.setState({ showNoteModal: true })}
                                />
                            ))}
                            <AOKModal
                                show={this.state.showNoteModal}
                                hide={noteClose}
                                title="Add a Note to this AOK"
                                submit={this.handleNoteSubmit}
                                close={noteClose}
                            >
                                <Input
                                    type="text"
                                    value={this.state.noteName}
                                    onChange={this.handleInputChange}
                                    name="noteName"
                                    placeholder="Your Name"
                                />
                                <Input
                                    type="date"
                                    value={this.state.noteDate}
                                    onChange={this.handleInputChange}
                                    name="noteDate"
                                />
                                <Textarea
                                    value={this.state.message}
                                    onChange={this.handleInputChange}
                                    name="noteMessage"
                                    placeholder="Say something kind."
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