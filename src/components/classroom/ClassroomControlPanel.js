import React from 'react';
import AddClassroom from './AddClassroom';
import PropTypes from 'prop-types';

//import BuildingListFilter from './BuildingListFilter';
//            <BuildingListFilter />
const ClassroomControlPanel = (props) => (
    <div className='container'>
        <div className='float-right ml-1'>
            <AddClassroom id={props.bid} />
        </div>
    </div>
);


ClassroomControlPanel.propTypes = {
    bid: PropTypes.string.isRequired,
};

export default ClassroomControlPanel;
