import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import "./Facebook.css";

const responseFacebook = (response) => {
    console.log(response);
}

class FacebookComponent extends Component {

    render() {
        return (
            <div style={{display: "flex", flexWrap: "wrap"}}>
                <FacebookLogin
                    appId="158697921487245"
                    autoLoad
                    fields="name,email,picture"
                    style={{height: "10px"}}
                    cssClass="btnFacebook"
                    scope="public_profile,email"
                    callback={responseFacebook}
                    icon="fab fa-facebook-square"
                    textButton = "&nbsp;&nbsp;Log In"
                />
            </div>
        );
    }
}

export default FacebookComponent;