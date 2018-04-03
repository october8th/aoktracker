import React from "react";
import "./Wrapper.css";

const Wrapper = props => (
    <div 
        className="wrapper" 
        style={{ 
            backgroundImage: `url(${props.backgroundImage})`,
            backgroundSize: `cover`,
            backgroundPosition: `center`,
            height: `100vh`,
            backgroundAttachment: `fixed` 
        }}
    >
        {props.children}
    </div>
);

export default Wrapper;