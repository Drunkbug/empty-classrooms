import React from 'react';
import Building from './Building';
import PropTypes from 'prop-types';

const Buildings = (props) => {
    return (
        <div className='container'>
            <ul className='list-group'>
                {props.buildings.length === 0 && <p>Please add building to get started!</p>}
                {props.buildings.map((building) => (
                    <Building 
                        key={building}
                        buildingName={building}
                        deleteVisibility={props.deleteVisibility}
                        handleDeleteBuilding={props.handleDeleteBuilding}
                    />
                ))}
            </ul>
        </div>
    );
};


Buildings.propTypes = {
    buildings: PropTypes.arrayOf(PropTypes.string).isRequired,
    deleteVisibility: PropTypes.bool.isRequired,
    handleDeleteBuilding: PropTypes.func.isRequired,
};

export default Buildings;
