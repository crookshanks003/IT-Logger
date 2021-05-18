import { useState } from "react";
import { addTech } from "../../action/techActions";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";

function AddTechModal({ addTech }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const onSubmit = () => {
        if (firstName === "" || lastName === "") {
            M.toast({ html: "Please add First Name and last Name" });
        } else {
            const newTech = {
                firstName,
                lastName,
            };
            addTech(newTech);
            M.toast({ html: `${firstName} added as technician` });
        }
    };

    return (
        <div id="add-tech-modal" className="modal">
            <div className="modal-content">
                <h4>Add New Technician</h4>
                <div className="row">
                    <div className="input-feild">
                        <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                        <label htmlFor="firstName" className="active">
                            First Name
                        </label>{" "}
                    </div>
                </div>
                <div className="row">
                    <div className="input-feild">
                        <input
                            type="text"
                            name="firstName"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                        <label htmlFor="firstName" className="active">
                            Last Name
                        </label>{" "}
                    </div>
                </div>
                <div className="row">
                    <a
                        href="#!"
                        onClick={onSubmit}
                        className="modal-close btn waves-effect waves-light blue">
                        Add
                    </a>
                </div>
            </div>
        </div>
    );
}

export default connect(null, { addTech })(AddTechModal);
