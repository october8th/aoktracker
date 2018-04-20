import React, { Component } from "react";
import { Button, Panel } from "react-bootstrap";

class AOKNote extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div>
                <Panel id="collapsible-note-panel" expanded={this.state.open}>
                    <Panel.Collapse>
                        <Panel.Body>
                            {this.props.noteName} / {this.props.noteDate}: {this.props.noteMessage}
                        </Panel.Body>
                    </Panel.Collapse>
                </Panel>
            </div>
        );
    }
}

export default AOKNote;