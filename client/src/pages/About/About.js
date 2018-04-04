import React from "react";
import Nav from "../../components/Nav";
import Heading from "../../components/Heading";
import Wrapper from "../../components/Wrapper";
import "./About.css";
import Ripples from "../../images/ripples.jpg";

const About = props => (
    <Wrapper backgroundImage={Ripples}>
        <Nav />
        <div className="container">
            <Heading>
                <h1>
                    This is the About Page!
                </h1>
            </Heading>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec feugiat odio mi, quis feugiat enim egestas sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam tincidunt augue id elit tincidunt fringilla. Nam eget leo molestie, aliquet orci in, feugiat dui. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque quis auctor odio. Maecenas consectetur eros purus, sed semper nisl dignissim vitae. Nunc quam leo, lacinia nec eleifend vitae, aliquam sit amet neque. Donec varius ornare felis, sed aliquam nibh dictum id. Mauris sagittis, augue et pulvinar posuere, eros leo egestas dui, quis interdum nisi elit at ligula. Nam sit amet congue nisi. Sed posuere lorem nec feugiat accumsan. Curabitur suscipit elementum ultrices. Proin sodales sem sed mauris vulputate efficitur.
            </p>
            <p>
                Morbi laoreet ultricies urna, sed blandit libero blandit id. Praesent diam lorem, aliquam et congue nec, ornare eu erat. Praesent sagittis malesuada sem vel vulputate. In vestibulum justo pulvinar ligula finibus rhoncus. Duis in suscipit magna. Praesent a massa libero. Etiam semper ipsum nec turpis blandit, vitae tristique dui ornare.
            </p>
            <p>
                Phasellus vitae sem eros. Nullam sit amet rhoncus orci. Nunc cursus tempor ante id lacinia. Curabitur in nunc id ipsum dignissim sodales nec laoreet urna. Ut eget orci metus. Vestibulum at interdum tortor, non sagittis turpis. Suspendisse sodales ante at lorem mattis tincidunt. Phasellus laoreet elit velit, ut congue nulla placerat quis. Etiam a diam volutpat, scelerisque diam vitae, porta sem.
            </p>
            <p>
                Nullam nec libero ac purus cursus tincidunt. Proin ex enim, vestibulum vel rhoncus mollis, tincidunt eget augue. Integer aliquam eu sapien in porta. Fusce finibus mi massa, at aliquet lacus sollicitudin id. Integer cursus ultrices auctor. In dictum, eros non congue posuere, elit orci tempor risus, bibendum gravida odio nulla et neque. Sed efficitur, ipsum nec auctor ultricies, dolor sem porttitor quam, sed tincidunt orci nisi vitae nunc. Praesent purus urna, egestas non ex quis, accumsan pellentesque diam. Donec in tincidunt urna.
            </p>
            <p>
                Maecenas commodo, elit vel luctus placerat, mauris risus vulputate augue, quis laoreet elit diam semper justo. Curabitur finibus, enim sed ultricies posuere, leo orci elementum metus, scelerisque lobortis ligula enim non metus. Ut sit amet justo ac arcu dignissim mollis at condimentum justo. Nam lobortis diam non lacus semper efficitur. Vestibulum in ex consequat, laoreet mi sed, ornare urna. Mauris sit amet ante velit. Phasellus quis mi eget arcu accumsan auctor. Sed sed nunc semper, imperdiet neque non, tempus dolor. Vestibulum at diam vel lectus tincidunt scelerisque auctor a ipsum. Aenean vel nisi sit amet nulla ultrices cursus. Vestibulum velit tortor, suscipit ac enim ac, egestas accumsan tortor. Etiam dignissim eleifend lorem, venenatis tempus velit pulvinar eu. Curabitur egestas quam eget dolor lobortis, dignissim pellentesque massa luctus. Vivamus porttitor ipsum non tortor consequat facilisis. Donec lacinia urna ex, quis placerat ligula tempus id.
            </p>
            <br />
            <br />
            <a onClick={props.onClick}>
                Click to Return to the Top
            </a>
        </div>
    </Wrapper>
);

export default About;