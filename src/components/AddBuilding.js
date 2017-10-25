import React from 'react';
import PropTypes from 'prop-types';

export default class AddBuilding extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddBuilding = this.handleAddBuilding.bind(this);
        this.state = {
            error: undefined,
        };
    }

    handleAddBuilding(e) {
        e.preventDefault();
        const buildingName = e.target.elements.buildingName.value.trim();
        const error = this.props.handleAddBuilding(buildingName);
        this.setState(() => ({error}));

        if (!error) {
            e.target.elements.buildingName.value = '';
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleAddBuilding}>
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
                {
                    this.state.error && 
                    <div className="alert alert-danger" role="alert">
                        {this.state.error}
                    </div>
                }
            </div>
        );
    }
}

AddBuilding.propTypes = {
    handleAddBuilding: PropTypes.func.isRequired,
};