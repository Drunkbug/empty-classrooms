import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Classroom = (props) => (
    <div>
        <li
            className='list-group-item d-flex'>
            <div className='p-2'>
                <Link to={`/building/${props.id}/classroom`}>
                    {props.classroomName}
                </Link>
            </div>
            <div className='ml-auto p-2 align-items-center'>            
                <Link to={`/building/${props.id}`} className='btn btn-danger'>
                    Edit
                </Link>
            </div>


        </li>
    </div>
);


Classroom.propTypes = {
    classroomName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default Classroom;