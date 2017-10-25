import React from 'react';
import AddBuilding from './AddBuilding';
import EditBuildings from './EditBuildings';
import PropTypes from 'prop-types';

const ControlPanel = (props) => {
    return (
        <div className='jumbotron'>
            <div className='container'>
                { props.panelTitle && <h5>{props.panelTitle}</h5> }
                <AddBuilding handleAddBuilding={props.handleAddBuilding} />
                <EditBuildings 
                    handleEditBuildings={props.handleEditBuildings} 
                    deleteVisibility={props.deleteVisibility}
                />
            </div>
        </div>
    );
};

ControlPanel.propTypes = {
    panelTitle: PropTypes.string.isRequired,
    handleAddBuilding: PropTypes.func.isRequired,
    handleEditBuildings: PropTypes.func.isRequired,
    deleteVisibility: PropTypes.bool.isRequired,
};

export default ControlPanel;

