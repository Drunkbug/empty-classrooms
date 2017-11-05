import React from 'react';
import AddBuilding from './building/AddBuilding';
import PropTypes from 'prop-types';

const ControlPanel = (props) => {
    return (
        <div className='jumbotron'>
            <div className='container'>
                <AddBuilding handleAddBuilding={props.handleAddBuilding} />
            </div>
        </div>
    );
};

ControlPanel.propTypes = {
    handleAddBuilding: PropTypes.func.isRequired,
};

export default ControlPanel;

