import React, { Component } from "react";

class Sticky extends Component {
    render() {
        const { classsName, enter, exit, children } = this.props;
        return (<div
            className={`Sticky ${className}`}
            data-sticky
            data-sticky-enter={enter}
            data-sticky-exit={exit}
        >
            {children}
        </div>);
    }
}

Sticky.propTypes = {
    className: React.PropTypes.string,
    enter: React.PropTypes.string,
    exit: React.PropTypes.string,
    children: React.PropTypes.node
};

export default Sticky;