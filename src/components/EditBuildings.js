import React from 'react';
import PropTypes from 'prop-types';

const EditBuildings = (props) => {
    return (
        <div>
            {props.deleteVisibility ? (
                <button className="btn btn-success"
                    onClick={props.handleEditBuildings}>
                    Done
                </button>
            ) : (
                <button 
                    className="btn btn-danger" 
                    onClick={props.handleEditBuildings}>
                    Edit
                </button>
            )}
        </div>
    );
};

export default EditBuildings;

EditBuildings.propTypes = {
    deleteVisibility: PropTypes.bool.isRequired,
    handleEditBuildings: PropTypes.func.isRequired,
};