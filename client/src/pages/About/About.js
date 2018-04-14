import React from "react";
import Heading from "../../components/Heading";
import Wrapper from "../../components/Wrapper";
import { Grid, Row, Col } from "react-bootstrap";
import "./About.css";
import Ripples from "../../images/ripples.jpg";

const About = props => (
    <Wrapper backgroundImage={Ripples}>
        
        <div className="container">
            <Heading>
                <h1>
                    About AOKTracker
                </h1>
            </Heading>
            <div id="info">
                <h4>
                    The purpose of the AOKTracker is to connect people with a common goal of spreading kindness around.
                </h4>
                <h4>
                    It is entirely anonymous, so everyone can share their experiences freely.
                </h4>
                <h4>
                    Below, you'll find links to an Acts of Kindness List/Message board, where you can add an AOK that you have experienced, 
                </h4>
                <h4>
                    as well as how it might have inspired you to perform an AOK of your own.  You can also leave notes about any AOK on the list for the author.
                </h4>
            </div>
            <div id="links">
            </div>
            <blockquote id="quote">
                <h3>
                    "Remember there's no such thing as a small act of kindness.  Every act creates a ripple with no logical end." --Scott Adams
                </h3>
            </blockquote>
            <a onClick={props.onClick}>
                Click to Return to the Top
            </a>
        </div>
    </Wrapper>
);

export default About;