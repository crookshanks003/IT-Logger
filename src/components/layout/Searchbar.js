import React, { useRef, useState } from "react";
import { connect } from "react-redux";
import { filterLog, clearFilter } from "../../action/logActions";

function Searchbar({ filterLog, clearFilter }) {
    const text = useRef("");
    const searchLog = e => {
        e.preventDefault();
        if (text.current.value !== "") {
            filterLog(e.target.value);
        } else {
            clearFilter();
        }
    };

    return (
        <div>
            <nav style={{ marginBottom: "30px" }} className="blue">
                <div class="nav-wrapper">
                    <form>
                        <div class="input-field">
                            <input
                                id="search"
                                type="search"
                                onChange={searchLog}
                                ref={text}
                                required
                            />
                            <label className="label-icon" htmlFor="search">
                                <i className="material-icons">search</i>
                            </label>
                            <i className="material-icons">close</i>
                        </div>
                    </form>
                </div>
            </nav>
        </div>
    );
}

export default connect(null, { clearFilter, filterLog })(Searchbar);
