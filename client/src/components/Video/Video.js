import React from "react";
import "./Video.css";

const Video = props => (
    <video id="video" loop autoPlay>
        <source src={props.src} type="video/mp4" />
        <source src={props.src} type="video/ogg" />
        Your browser does not support the video tag.
    </video>
);

export default Video;