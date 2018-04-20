import React, { Component } from "react";
import { Grid, Row, Col, Image, Button } from "react-bootstrap";
import AOKNote from "../AOKNote";
import AOKModal from "../AOKModal";
import { Input, Textarea, SubmitBtn } from "../Form";
import API from "../../utils/API";
import "./AOKListItems.css";

class AOKListItems extends Component {
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);

        this.state = {
            notes: [],
            name: "",
            date: "",
            message: "",
            show: false,
            open: false
        }
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    componentDidMount() {
        this.loadNotes();
    }

    loadNotes() {
        API.getNotes()
            .then(res => console.log(res));
    }

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    }

    addNote = event => {
        event.preventDefault();
        if(this.state.name && this.state.message) {
            console.log(`Name: ${this.state.name} \n Message: ${this.state.message}`);

            API.addNote({
                name: this.state.name,
                date: this.state.date,
                message: this.state.message
            }).then(res => this.loadNotes())
            .catch(err => console.log(err));
        }
    }

    render() {
        return (
            <Grid id="listItemsGrid">
                <Row className="aboutSections">
                    <Col md={9}>
                        <h4>
                            <b>{this.props.title} / {this.props.date}</b>
                        </h4>
                    </Col>
                    <Col md={3}>
                        <Button onClick={this.handleShow}>
                            Add Note to this AOK
                        </Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={3}>
                        <Image src={this.props.image} className="thumbnail" responsive />
                    </Col>
                    <Col md={9}>
                        <Row>
                            <Col md={1}>
                                <b>
                                    Story:
                                </b>
                            </Col>
                            <Col md={11}>
                                {this.props.story}
                            </Col>
                        </Row>
                        <Row>
                            <Col md={1}>
                                <b>
                                    Inspire:
                                </b>
                            </Col>
                            <Col md={11}>
                                {this.props.link}
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Button onClick={() => this.setState({ open: !this.state.open })}>
                            See Notes on this AOK
                        </Button>
                        {this.state.notes.map(note =>(
                            <AOKNote
                                key={note._id}
                                open={this.state.open}
                                name={note.name}
                                date={note.date}
                                message={note.message}
                            />
                        ))}
                    </Col>
                </Row>
                <AOKModal
                    show={this.state.show}
                    hide={this.handleClose}
                    title="Add a Note to this AOK"
                    submit={this.addNote}
                    close={this.handleClose}
                >
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
                    />
                    <Textarea
                        value={this.state.message}
                        onChange={this.handleInputChange}
                        name="message"
                        placeholder="Say something kind."
                    />
                </AOKModal>
            </Grid>
        )
    }
}  


export default AOKListItems;