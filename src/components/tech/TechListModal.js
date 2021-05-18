import { useState, useEffect } from "react";
import { connect } from "react-redux";
import { getTech } from "../../action/techActions";

function TechListModal({ techs: { tech, loading }, getTech }) {
    useEffect(() => {
        getTech();
    }, []);

    return (
        <div id="tech-list-modal" className="modal">
            <div className="modal-content">
                <h4>Technicians</h4>
                <ul className="collection">
                    {!loading && tech ? (
                        tech.map(person => (
                            <li className="collection-item" key={person.id}>
                                {person.firstName} {person.lastName}
                            </li>
                        ))
                    ) : (
                        <p className="collection-item">No techs added...</p>
                    )}
                </ul>
            </div>
        </div>
    );
}

const mapStateToComponent = state => ({
    techs: state.tech,
});

export default connect(mapStateToComponent, { getTech })(TechListModal);
