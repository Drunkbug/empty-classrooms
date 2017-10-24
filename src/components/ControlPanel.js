import React from 'react';
import AddBuilding from './AddBuilding';

const ControlPanel = (props) => {
    return (
        <div className="jumbotron">
            <div className="container">
            { props.panelTitle && <h5>{props.panelTitle}</h5> }
            <AddBuilding handleAddBuilding={props.handleAddBuilding} />
            </div>
        </div>
    );
}

export default ControlPanel;