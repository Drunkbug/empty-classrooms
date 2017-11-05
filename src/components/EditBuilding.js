import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeBuilding } from '../actions/buildings';
import { setBuildingName } from '../actions/buildings';


class EditBuilding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: this.props.building && this.props.building.name,
        };
        this.onNameChange = this.onNameChange.bind(this);
        this.onNameSubmit = this.onNameSubmit.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.onBack = this.onBack.bind(this);
    }

    onNameChange(e) {
        const name = e.target.value;
        this.setState(() => ({ name }));
    }

    onNameSubmit(e) {
        e.preventDefault();
        const name = e.target.elements.buildingName.value;
        const id = this.props.building.id;
        this.props.dispatch(setBuildingName(id, name));

    }

    onRemove() {
        this.props.dispatch(removeBuilding(this.props.building.id));
        this.props.history.push('/');
    }

    onBack() {
        this.props.history.push('/');
    }

    render() {
        return (
            <div className='container'>
                <form onSubmit={this.onNameSubmit}>
                    <div className='form-inline'>
                        Building Name:
                        <input
                            type='text'
                            className='form-control'
                            placeholder='Building Name'
                            name='buildingName'
                            value={this.state.name}
                            onChange={this.onNameChange}
                        />
                        <button type="submit" className="btn btn-primary">Save Change</button>
                    </div>
                </form>
                <button
                    type='button'
                    className='btn btn-danger'
                    onClick={this.onRemove} >
                    Remove
                </button>
                <button
                    type='button'
                    className='btn btn-success'
                    onClick={this.onBack} >
                    Back
                </button>
            </div>
        );
    }
}


const mapStateToProps = (state, props) => {
    return {
        building: state.buildings.find((building) => building.id === props.match.params.id),
    };
};

EditBuilding.propTypes = {
    dispatch: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    building: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(EditBuilding);
