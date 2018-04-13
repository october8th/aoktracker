import React, { Component } from "react";
import { FormGroup, ControlLabel, FormControl, Button } from "react-bootstrap";

class AOKForm extends Component {

    
    render() {
        
        const FieldGroup = ({ id, label, ...props }) => {
            return (
                <FormGroup controlId={id}>
                    <ControlLabel>{label}</ControlLabel>
                    <FormControl {...props} />
                </FormGroup>
            );
        }

        return (
            <form>
                <FieldGroup
                    id="AOKuserName"
                    type="text"
                    label="AOKuserName"
                    name="name"
                    placeholder="Your Name"
                />
                <FieldGroup
                    id="AOKdate"
                    type="date"
                    label="AOKdate"
                    name="date"
                    placeholder="Date of AOK in MM/DD/YYYY Format"
                />
                <FormGroup controlId="AOKsummary">
                    <ControlLabel>
                        Summary of AOK
                    </ControlLabel>
                    <FormControl 
                        componentClass="textarea" 
                        name="summary"
                        placeholder="This is what I experienced and how it made me feel." 
                    />
                </FormGroup>
            </form>
        );
    }
}

export default AOKForm;