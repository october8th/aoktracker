import React, { Component } from "react";
import { Grid, Row, Col, Image, Button, Panel } from "react-bootstrap";
import AOKModal from "../AOKModal";
import { Input, Textarea, SubmitBtn } from "../Form";
import NotesList from "../../components/notesList";
import API from "../../utils/API";
import "./AOKListItems.css";



class AOKListItems extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false,
        }
    }



    openNote = () => {
        this.setState({ open: !this.state.open });
    }

    componentDidMount(){
        console.log(this.props.noteID);
        for (var i = 0; i < this.props.notes.length; i++) {
            console.log(this.props.notes[i].message);
        }
        
    }

    newNote = () => {
        localStorage.setItem('noteID',this.props.noteID);

        {this.props.showCreateNote()};
        
    }


    render() {
        return (
            <Grid id="listItemsGrid">
                <Row className="aboutSections">
                    <Col md={10}>
                        <h4>
                            <b>{this.props.title} / {this.props.date}</b>
                        </h4>
                    </Col>
                    <Col md={2}>
                        <Button onClick={this.newNote} style={{margin: "10px 0"}} >
                            Add a Note
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
                        <Button onClick={this.openNote} style={{margin: "10px 0"}}>
                            See Notes
                        </Button>  
                    </Col>
                </Row>
                <Row>
                    <Col md={12}>
                        <Panel id="collapsible-note-panel" expanded={this.state.open}>
                            <Panel.Collapse>
                                <Panel.Body>
                                    {this.props.notes.map(note => (
                                    <NotesList
                                    key={note._id}
                                    name={note.name}
                                    date={note.date}
                                    message={note.message}
                                    />
                                    ))}

                                    
                                </Panel.Body>
                            </Panel.Collapse>
                        </Panel>
                    </Col>
                </Row>
            </Grid>
        )
    }
}  


export default AOKListItems;