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
        this.scrollTo = this.scrollTo.bind(this);
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

    scrollToBottom() {
        scroll.scrollToBottom();
    }
    
    scrollTo() {
        scroller.scrollTo("About", {
            duration: 1500,
            delay: 100,
            smooth: true,
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
            <Wrapper backgroundImage={Ripples}>
                <div className="container">
                    <Heading>
                        <h1>
                            AOKTracker
                        </h1>
                    </Heading>
                    <section>
                        <h5>
                            <Link activeClass="active" id="scrollDown" to="About" spy={true} smooth={true} duration={1500}>
                                Scroll to About
                            </Link>
                        </h5>
                    </section>
                </div>
                <element name="About">
                    <About />
                </element>
            </Wrapper>
        );
    }
}

export default Main;