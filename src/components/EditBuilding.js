import React from 'react';
import PropTypes from 'prop-types';
import { addBuilding } from '../actions/buildings';
import { connect } from 'react-redux';

class EditBuilding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
        };
        this.onNameChange = this.onNameChange.bind(this);
        this.onNameSubmit = this.onNameSubmit.bind(this);
    }

    onNameChange(e) {
        const name = e.target.value;
        this.setState(() => ({ name }));
    }

    onNameSubmit(e) {
        e.preventDefault();
        const name = e.target.elements.buildingName.value;
        this.props.dispatch(addBuilding(name));
    } 
    
    render() {
        return (
            <div className='container'>
                {props.match.params.id}
            </div>
        );
    }
}

EditBuilding.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect()(EditBuilding);
