import React from "react";
import Jumbotron from "../../components/Jumbotron";
import Wrapper from "../../components/Wrapper";
import Ripples from "./images/ripples.jpg";

const Main = () => (
    <Wrapper backgroundImage={Ripples}>
        <Jumbotron>
            <h1>RAOKTracker</h1>
        </Jumbotron>
    </Wrapper>
);

export default Main;