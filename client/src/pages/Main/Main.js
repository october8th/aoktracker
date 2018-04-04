import React, { Component } from "react";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from "react-scroll";
import Heading from "../../components/Heading";
import Wrapper from "../../components/Wrapper";
import ScrollBtn from "../../components/ScrollBtn";
import Ripples from "./images/ripples.jpg";
import About from "../About";

class Main extends Component {
    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    componentDidMount() {
        Events.scrollEvent.register("begin", function() {
            console.log("begin", arguments);
        });

        Events.scrollEvent.register("end", function() {
            console.log("end", arguments);
        });
    }

    scrollToTop() {
        scroll.scrollToTop();
    }
    
    scrollTo() {
        scroller.scrollTo("About", {
            duration: 1500,
            delay: 100,
            smooth: true,
            containerId: "About",
            offset: 50
        });
    }

    scrollToWithContainer() {
        let goToContainer = new Promise((resolve, reject) => {
            Events.scrollEvent.register("end", () => {
                resolve();
                Events.scrollEvent.remove("end");
            });

            scroller.scrollTo("scroller-container", {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart"
            });
        });

        goToContainer.then(() =>
            scroller.scrollTo("scroll-container-second-element", {
                duration: 800,
                delay: 0,
                smooth: "easeInOutQuart",
                containerId: "scroll-container"
            })
        );
    }

    componentWillUnmount() {
        Events.scrollEvent.remove("begin");
        Events.scrollEvent.remove("end");
    }

    render() {
        return(
            <Wrapper backgroundImage={Ripples}>
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
                <element name="About">
                    <About />
                </element>
            </Wrapper>
        );
    }
}

export default Main;