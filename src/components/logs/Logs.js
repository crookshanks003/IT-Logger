import { useEffect } from "react";
import { connect } from "react-redux";
import Preloader from "../layout/Preloader";
import LogItem from "./LogItem";
import { getLogs } from "../../action/logActions";

function Logs({ log: { filter, logs, loading }, getLogs }) {
    useEffect(() => {
        getLogs();
    }, []);

    const content = filter ? filter : logs;

    if (loading === true || logs === null) {
        return <Preloader />;
    }
    return (
        <ul className="collection with-header">
            <li className="collection-header">
                <h4 className="center">System Logs</h4>
            </li>
            {!loading && content.length === 0 ? (
                <p className="center">No logs to display...</p>
            ) : (
                content.map(log => <LogItem log={log} key={log.id} />)
            )}
        </ul>
    );
}
const mapStateToProps = state => ({
    log: state.log,
});
export default connect(mapStateToProps, { getLogs })(Logs);
