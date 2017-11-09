import React from 'react';
import Classroom from './Classroom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { startSetClassrooms } from 'src/actions/classrooms';

class ClassroomList extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.setClassroom(this.props.id);
    }

    render() {
        return (
            <div className='container'>
                <ul className='list-group'>
                    {this.props.classrooms.length === 0/* && <p>Not Found!</p>*/}
                    {this.props.classrooms.map((classroom) => (
                        <Classroom
                            key={classroom.cid}
                            id={this.props.id}
                            cid={classroom.cid}
                            classroomName={classroom.name}
                        />
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {

    //const building = state.buildings.find((building) => building.id === props.id);
    // const classrooms = props.setClassroom(props.id);
    return {
        classrooms: state.classrooms,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatch,
        setClassroom: (id) => dispatch(startSetClassrooms(id)),
    };
};

ClassroomList.propTypes = {
    classrooms: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
    setClassroom: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(ClassroomList);
