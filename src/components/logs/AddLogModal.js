import { useState } from "react";
import { connect } from "react-redux";
import { addLogs } from "../../action/logActions";
import M from "materialize-css/dist/js/materialize.min.js";

function AddLogModal({ addLogs }) {
    const [message, setMessage] = useState("");
    const [imp, setImp] = useState(false);
    const [tech, setTech] = useState("");

    const onSubmit = () => {
        if (message === "" || tech === "") {
            M.toast({ html: "Please add technician and message" });
        } else {
            const newLog = {
                msg: message,
                imp,
                tech,
                date: new Date(),
            };
            addLogs(newLog);
            M.toast({ html: `New log added by ${tech}` });
        }
    };

    return (
        <div id="add-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-feild">
                        <input
                            type="text"
                            name="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
                        <label htmlFor="message" className="active">
                            Message
                        </label>{" "}
                    </div>
                </div>
                <div className="row">
                    <div className="input-feild">
                        <select
                            name="tech"
                            value={tech}
                            className="browser-default"
                            onChange={e => setTech(e.target.value)}>
                            <option value="" disabled>
                                Select Technician
                            </option>
                            <option value="John Doe">John Doe</option>
                            <option value="Sarah Williams">
                                Sarah Williams
                            </option>
                            <option value="Mike Hussey">Mike Hussey</option>
                        </select>
                    </div>
                </div>
                <div className="row">
                    <div className="input-feild">
                        <p>
                            <label>
                                <input
                                    type="checkbox"
                                    name=""
                                    className="filled-in"
                                    checked={imp}
                                    value={imp}
                                    onChange={e => setImp(!imp)}
                                />
                                <span>Needs Attention</span>
                            </label>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <a
                        href="#!"
                        onClick={onSubmit}
                        className="modal-close blue btn waves-effect waves-light">
                        Enter
                    </a>
                </div>
            </div>
        </div>
    );
}

const modalStyle = {
    width: "75%",
    height: "55%",
};

export default connect(null, { addLogs })(AddLogModal);
