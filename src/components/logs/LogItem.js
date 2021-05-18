import React from "react";
import Moment from "react-moment";
import { connect } from "react-redux";
import { setCurrent, deleteLog } from "../../action/logActions";

function LogItem({ log, setCurrent, deleteLog }) {
    return (
        <li className="collection-item">
            <div>
                <a
                    href="#edit-log-modal"
                    className={`modal-trigger ${
                        log.imp ? "red-text" : "blue-text"
                    }`}
                    onClick={() => setCurrent(log)}>
                    {log.msg}
                </a>
                <br />
                <span className="grey-text">
                    <span className="black-text">ID #{log.id}</span> Updated by{" "}
                    <span className="black-text">{log.tech}</span> on{" "}
                    <Moment
                        format="MMMM Do YYYY h:mm:ss a"
                        className="black-text">
                        {log.date}
                    </Moment>
                </span>
                <a
                    href="#!"
                    className="secondary-content"
                    onClick={() => deleteLog(log.id)}>
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    );
}

export default connect(null, { setCurrent, deleteLog })(LogItem);
