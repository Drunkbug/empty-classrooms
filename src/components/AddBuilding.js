import React from 'react';
import PropTypes from 'prop-types';
import { addBuilding } from '../actions/buildings';
import { connect } from 'react-redux';

class AddBuilding extends React.Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     name: '',
        // };
        //this.onNameChange = this.onNameChange.bind(this);
        this.onNameSubmit = this.onNameSubmit.bind(this);
    }

    // onNameChange(e) {
    //     const name = e.target.value;
    //     this.setState(() => ({ name }));
    // }

    onNameSubmit(e) {
        e.preventDefault();
        const name = e.target.elements.buildingName.value;
        this.props.dispatch(addBuilding(name));
    } 
    
    render() {
        return (
            <div className='container'>
                <form onSubmit={this.onNameSubmit}>
                    <div className='form-inline'>
                        <input 
                            type='text' 
                            className='form-control' 
                            placeholder='Building Name' 
                            name='buildingName'
                        />
                        <button type="submit" className="btn btn-primary">Add Building</button>
                    </div>
                </form>
            </div>
        );
    }
}

AddBuilding.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

export default connect()(AddBuilding);
