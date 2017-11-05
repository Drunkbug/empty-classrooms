import React from 'react';
import Building from './Building';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getVisibleBuildings from 'src/selectors/buildings';

const BuildingList = (props) => {
    return (
        <div className='container'>
            <ul className='list-group'>
                {props.buildings.length === 0 && <p>No Result!</p>}
                {props.buildings.map((building) => (
                    <Building 
                        key={building.id}
                        id={building.id}
                        buildingName={building.name}
                        totalClassrooms={building.classrooms.length}
                    />
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        buildings: getVisibleBuildings(state.buildings, state.buildingfilters),
        //buildings: getVisibleBuildings(state.buildings, state.buildingfilters),

    };
};


BuildingList.propTypes = {
    buildings: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(BuildingList);
