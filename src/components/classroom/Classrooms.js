import React from 'react';
import Classroom from './Classroom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Classrooms = (props) => {
    return (
        <div className='container'>
            <ul className='list-group'>
                <div>
                    this is the classroom list page. The building is: {props.id}
                </div>
                {props.classrooms.length === 0 && <p>Please add classrooms to get started!</p>}
                {props.classrooms.map((classroom) => (
                    <Classroom 
                        key={classroom.id}
                        buildingName={classroom.name}
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
        classrooms: state.classrooms,
    };
};

const ConnectedClassrooms = connect(mapStateToProps)(Classrooms);

Classrooms.propTypes = {
    id: PropTypes.string.isRequired,
    classrooms: PropTypes.array.isRequired,
    deleteVisibility: PropTypes.bool.isRequired,
    handleDeleteBuilding: PropTypes.func.isRequired,
};

export default ConnectedClassrooms;
