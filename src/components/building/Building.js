import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Building = (props) => (
    <div>
        <li
            className='list-group-item d-flex align-items-center'>
            <div className='p-2'>
                <Link to={`/building/${props.id}/classroom`}>
                    {props.buildingName}
                </Link>
            </div>
            <div className='ml-auto p-2 align-items-center'>
                <span className="badge badge-primary badge-pill float-left">{props.totalClassrooms}</span>
            </div>
            <Link to={`/building/${props.id}`} className='btn btn-danger'>
                Edit
            </Link>


        </li>
    </div>
);


Building.propTypes = {
    buildingName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    totalClassrooms: PropTypes.number.isRequired,
};

export default Building;