import React from "react";
import Nav from "../../components/Nav";
import Wrapper from "../../components/Wrapper";
import Heading from "../../components/Heading";
import Col from "../../components/Grid";
import Row from "../../components/Grid";
import Container from "../../components/Grid";
import "./MessageBoard.css";
import Ripples from "../../images/ripples.jpg";

const MessageBoard = () => (
    <Wrapper backgroundImage={Ripples}>
        <Nav />
        <Heading>
            <h1>
                This Is the AOK List
            </h1>
        </Heading>

    </Wrapper>
);

export default MessageBoard;