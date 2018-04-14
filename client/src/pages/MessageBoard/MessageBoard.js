import React, { Component } from "react";
import CustomNav from "../../components/Nav";
import Wrapper from "../../components/Wrapper";
import Heading from "../../components/Heading";
import AOKModal from "../../components/AOKModal";
import MessageListItem from "../../components/MessageList";
import { Input, Textarea, SubmitBtn } from "../../components/Form";
import API from "../../utils/API";
import { Button, ListGroup, ListGroupItem, Panel } from "react-bootstrap";
import "./MessageBoard.css";
import Ripples from "../../images/ripples.jpg";

class AOKMessageBoard extends Component {
        
        state = {
            acts: [],
            image: "",
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
        if (this.state.title && this.state.link && this.state.story) {
            API.saveNewAct({
                image: this.state.image,
                title: this.state.title,
                link: this.state.link,
                story: this.state.story
            })
            .then(res => this.loadActs())
            .catch(err => console.log(err));
        }
    };

    render() {
        return (
            <Wrapper backgroundImage={Ripples}>
                <CustomNav />
                <Heading>
                    <h1>
                        This Is the AOK List
                    </h1>
                </Heading>
                <div className="container">
                    <h5>
                        Add a New Act of Kindness
                        
                    </h5>
                    <AOKModal>
                        <Input
                            type="text"
                            value={this.state.image}
                            onChange={this.handleInputChange}
                            name="image"
                            placeholder="Load Your Image"
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
                </div>
            </Wrapper>
        );
    }
}

export default AOKMessageBoard;