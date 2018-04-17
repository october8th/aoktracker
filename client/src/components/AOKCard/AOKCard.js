import React from "react";
import Heading from "../Heading";
import ConfirmBtn from "../ConfirmBtn";
import "./AOKCard.css";

const styles = {
    questionAlign: {
        textAlign: "left",
        marginTop: 10
    }
}

const AOKCard = props => (
    <div id="cardDiv">
        <div className="well large" id="cardStyle">
            <p id="cardTitle">
                Today's Recommended Act of Kindness:
            </p>
            {props.suggestion}
            <p className="confirmCounter">
                {props.counter} people have done today's AOK!
            </p>
            <p className="confirmCounter" style={styles.questionAlign}>
                Did you do today's AOK?  Click on the star to confirm.
                <ConfirmBtn onClick={props.onClick}>
                    <span className="glyphicon glyphicon-star-empty"></span>
                </ConfirmBtn>
            </p>
        </div>
    </div>
);

export default AOKCard;