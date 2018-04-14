import React, { Component } from "react";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import Heading from "../../components/Heading";
import Wrapper from "../../components/Wrapper";
import Ripples from "../../images/ripples.jpg";
import About from "../About";
import "./Main.css";

class Main extends Component {
    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    componentDidMount() {
        Events.scrollEvent.register("begin", function(to, element) {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register("end", function(to, element) {
            console.log("end", arguments);
        });

        scrollSpy.update();
    }

    scrollToTop() {
        scroll.scrollToTop();
    }
    
    scrollTo() {
        scroller.scrollTo("About", {
            duration: 500,
            delay: 10,
            smooth: true,
            isDynamic: true,
            containerId: "About",
            offset: 500
        });
    }

    componentWillUnmount() {
        Events.scrollEvent.remove("begin");
        Events.scrollEvent.remove("end");
    }

    render() {
        return(
            <div id="parentContainer">
            <Wrapper backgroundImage={Ripples}>
                <div className="container">
                    <Heading>
                        <h1 id="mainHeading">
                            AOKTracker
                        </h1>
                        <h3 id="subMainHeading">
                            Creating Ripples of Positive Change
                        </h3>
                    </Heading>
                    <div id="scrollLink">
                        <h3>
                            See What We're About
                        </h3>
                        <h3>
                            <Link activeClass="active" id="scrollDown" to="About" spy={true} smooth={true} isDynamic={true} duration={1500}>
                                <span id="scrollArrow">
                                    <i class="fas fa-arrow-circle-down"></i>
                                </span>
                            </Link>
                        </h3>
                    </div>
                </div>
            </Wrapper>
                <Element name="About" id="aboutContainer">
                    <About 
                        onClick={this.scrollToTop} 
                    />
                </Element>
            
            </div>
        );
    }
}

export default Main;