import React from 'react';

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
}

export default EditBuildings;