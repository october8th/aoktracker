import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import "./Facebook.css";

let buttonText = "Log In";

const responseFacebook = (response) => {
    // setter
    localStorage.setItem('myData', response.id);
    buttonText = "Logged In";
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
                    textButton = {buttonText}
                    id="facebookLogin"
                />
            </div>
        );
    }
}

export default FacebookComponent;