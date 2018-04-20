import React, { Component } from "react";
import { Button, Panel } from "react-bootstrap";

class AOKNote extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            open: false
        };
    }

    render() {
        return (
            <div>
                <Button onClick={() => this.setState({ open: !this.state.open })}>
                    See Notes on this AOK
                </Button>
                <br />
                <Panel id="collapsible-note-panel" expanded={this.state.open}>
                    <Panel.Collapse>
                        <Panel.Body>
                            {this.props.noter}: "{this.props.notes}"
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
            </div>
        );
    }
}

export default AOKNote;