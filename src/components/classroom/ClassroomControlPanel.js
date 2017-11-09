import React from 'react';
import AddClassroom from './AddClassroom';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//import BuildingListFilter from './BuildingListFilter';
//            <BuildingListFilter />
const ClassroomControlPanel = (props) => (
    <div className='container'>
        <div className='float-right ml-1'>
            <AddClassroom id={props.id} />
            <div className='container'> <Link className='btn btn-success' to='/'>Back </Link></div>
        </div>
    </div>
);


ClassroomControlPanel.propTypes = {
    id: PropTypes.string.isRequired,
};

export default ClassroomControlPanel;
