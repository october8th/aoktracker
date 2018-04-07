import React, { Component } from "react";
import FacebookLoginWithButton from "react-facebook-login";

const responseFacebook = (response) => {
    console.log(response);
}

class FacebookComponent extends Component {

    render() {
        return (
            <FacebookLoginWithButton
                appId="158697921487245"
                autoLoad
                fields="name,email,picture"
                scope="public_profile,user_friends,user_actions.books"
                callback={responseFacebook}
            />
        );
    }
}

export default FacebookComponent;