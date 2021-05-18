import { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { clearCurrent, editLog } from "../../action/logActions";
import { connect } from "react-redux";

function EditLogModal({ log: { current }, clearCurrent, editLog }) {
    const [message, setMessage] = useState("");
    const [imp, setImp] = useState(false);
    const [tech, setTech] = useState("");

    useEffect(() => {
        if (current) {
            setMessage(current.msg);
            setImp(current.imp);
            setTech(current.tech);
        }
    }, [current]);
    const onSubmit = () => {
        if (message === "" || tech === "") {
            M.toast({ html: "Please add technician and message" });
        } else {
            const newLog = {
                msg: message,
                imp,
                tech,
                date: new Date(),
                id: current.id,
            };
            editLog(newLog);
            M.toast({ html: "Log updated successfully!" });
            clearCurrent();
        }
    };

    return (
        <div id="edit-log-modal" className="modal" style={modalStyle}>
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
                        Save
                    </a>
                </div>
            </div>
        </div>
    );
}

const modalStyle = {
    width: "75%",
    height: "70%",
};

const mapStateToProp = state => ({
    log: state.log,
});

export default connect(mapStateToProp, { clearCurrent, editLog })(EditLogModal);
