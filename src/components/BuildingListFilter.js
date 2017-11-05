import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { setTextFilter } from '../actions/buildingfilters';

const BuildingListFilters = (props) => (
    <div className='container mt-1'>
        <input 
            placeholder='Search Building' 
            className='form-control' 
            type='text' 
            defaultValue={props.buildingfilters.text}
            onChange={(e) => {
                props.dispatch(setTextFilter(e.target.value));
            }}
        />
    </div>
);

const mapStateToProps = (state) => {
    return {
        buildingfilters: state.buildingfilters,
    };
};

BuildingListFilters.propTypes = {
    buildingfilters: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired,
};


export default connect(mapStateToProps)(BuildingListFilters);
