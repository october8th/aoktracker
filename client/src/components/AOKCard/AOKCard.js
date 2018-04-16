import React from "react";
import Heading from "../Heading";
import "./AOKCard.css";

const AOKCard = props => (
    <div id="cardDiv">
        <div className="well large" id="cardStyle">
            <p id="cardTitle">
                Today's Recommended Act of Kindness:
            </p>
            {props.suggestion}
            <p id="confirmCounter">
                {props.counter} people have done today's AOK!
            </p>
        </div>
    </div>
);

export default AOKCard;