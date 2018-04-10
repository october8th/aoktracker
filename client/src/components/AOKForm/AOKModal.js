import React, { Component } from "react";
import Input from "./Input.js";
import Textarea from "./textarea.js";
import FormBtn from "./FormBtn.js";

class AOKModal extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        $(this.modal).modal("show");
        $(this.modal).on("hidden.bs.modal", handleModalCloseClick);
    }

    render() {
        return (
            <div>
                <div className="modal fade" ref={modal=> this.modal = modal} id="aokModal" tabIndex="-1" role="dialog" aria-labelledby="aokModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="aokModalLabel">
                                    Add an AOK
                                </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">
                                        $times;
                                    </span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form>
                                    <Input 
                                        name="userName"
                                        placeholder="Your Name"
                                    />
                                    <Textarea
                                        name="aokContent"
                                        placeholder="Summary of AOK you have experienced."
                                    />
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                                    Close
                                </button>
                                <FormBtn>
                                    Submit AOK
                                </FormBtn>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AOKModal;