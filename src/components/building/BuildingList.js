import React from 'react';
import Building from './Building';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import getVisibleBuildings from 'src/selectors/buildings';
import { startSetBuildings } from 'src/actions/buildings';

class BuildingList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // this.props.setBuildings();
    }

    render() {
        return (<div className='container'>
            <ul className='list-group'>
                {this.props.buildings.length === 0 && <p>No Result!</p>}
                {this.props.buildings.map((building) => (
                    <Building
                        key={building.id}
                        id={building.id}
                        buildingName={building.name}
                        totalClassrooms={building.classrooms.length}
                    />
                ))}
            </ul>
        </div>);
    }
}

const mapStateToProps = (state) => {
    return {
        //buildings: getVisibleBuildings(state.buildings, state.buildingfilters),
        buildings: [],
    };
};


const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        //setBuildings: () => dispatch(startSetBuildings()),
    };
};


BuildingList.propTypes = {
    buildings: PropTypes.arrayOf(PropTypes.object).isRequired,
    setBuildings: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BuildingList);
