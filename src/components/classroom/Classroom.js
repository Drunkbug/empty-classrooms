import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Classroom = (props) => (
    <div>
        <li
            className='list-group-item d-flex'>
            <div className='p-2'>
                {props.classroomName}
            </div>
            <div className='ml-auto p-2 align-items-center'>            
                <button className='btn btn-danger'>
                    Edit
                </button>
            </div>


        </li>
    </div>
);


Classroom.propTypes = {
    classroomName: PropTypes.string.isRequired,
    cid: PropTypes.string.isRequired,
};

export default Classroom;