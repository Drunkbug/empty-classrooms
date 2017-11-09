import React from 'react';
import PropTypes from 'prop-types';
import { startAddClassroom } from 'src/actions/classrooms';
import { startAddClassroomToBuilding } from 'src/actions/buildings';
import { connect } from 'react-redux';

class AddClassroom extends React.Component {
    constructor(props) {
        super(props);
        this.onNameSubmit = this.onNameSubmit.bind(this);
        this.state = {
            error: undefined,
        };
    }

    onNameSubmit(e) {
        e.preventDefault();
        const name = e.target.elements.classroomName.value;  
        
        if (name) {
            this.props.onAddClassroom(this.props.id, name);
            e.target.elements.classroomName.value = '';            
            this.setState(() =>({ error: undefined }));
            // this.props.history.push();
        } else {
            this.setState(() => ({ error: 'Name should not be empty!' }));
        }

    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.onNameSubmit}>
                    <div className='form-inline'>
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Classroom Name'
                            name='classroomName'
                        />
                        <button type="submit" className="btn btn-primary">Add Classroom</button>
                    </div>
                    {this.state.error && <p>{this.state.error}</p>}
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
        // addedCid: state. addclassroom.payload.cid,        
        //buildings: getVisibleBuildings(state.buildings, state.buildingfilters),

    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onAddClassroom: (id, name) => dispatch(startAddClassroom(id, name)),
    };
};

AddClassroom.propTypes = {
    // dispatch: PropTypes.func.isRequired,
    onAddClassroom: PropTypes.func.isRequired,
    id: PropTypes.string.isRequired,
    // history: PropTypes.object.isRequired,
};

//export default withRouter(AddClassroom);
export default connect(mapStateToProps, mapDispatchToProps)(AddClassroom);
