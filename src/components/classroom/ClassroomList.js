import React from 'react';
import Classroom from './Classroom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const ClassroomList = (props) => {
    return (
        <div className='container'>
            <ul className='list-group'>
                {props.classrooms.length === 0 && <p>Not Found!</p>}
                {props.classrooms.map((classroom) => (
                    <Classroom 
                        key={classroom.id}
                        id={classroom.id}
                        classroomName={classroom.name}
                    />
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps = (state, props) => {
    const building = state.buildings.find((building) => building.id === props.bid);
    return { 
        classrooms: state.classrooms,    
    };
};

ClassroomList.propTypes = {
    classrooms: PropTypes.array.isRequired,
};

export default  connect(mapStateToProps)(ClassroomList);
