import React from 'react';
import Building from './Building';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getVisibleBuildings from '../selectors/buildings';

const Buildings = (props) => {
    return (
        <div className='container'>
            <ul className='list-group'>
                {props.buildings.length === 0 && <p>No Result!</p>}
                {props.buildings.map((building) => (
                    <Building 
                        key={building.id}
                        buildingName={building.name}
                        deleteVisibility={props.deleteVisibility}
                        handleDeleteBuilding={props.handleDeleteBuilding}
                    />
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        buildings: getVisibleBuildings(state.buildings, state.buildingfilters),
    };
};

const ConnectedBuildings = connect(mapStateToProps)(Buildings);

Buildings.propTypes = {
    buildings: PropTypes.arrayOf(PropTypes.object).isRequired,
    deleteVisibility: PropTypes.bool.isRequired,
    handleDeleteBuilding: PropTypes.func.isRequired,
};

export default ConnectedBuildings;
