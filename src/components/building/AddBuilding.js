import React from 'react';
import PropTypes from 'prop-types';
import { startAddBuilding } from 'src/actions/buildings';
import { connect } from 'react-redux';

class AddBuilding extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: undefined,
        };
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
        if (name) {
            this.props.onAddBuilding(name);
            this.setState(() =>({ error: undefined }));
            e.target.elements.buildingName.value = '';
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
                            placeholder='Building Name' 
                            name='buildingName'
                        />
                        <button type="submit" className="btn btn-primary">Add Building</button>
                    </div>
                    {this.state.error && <p>{this.state.error}</p>}
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    return {
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        onAddBuilding: (name) => dispatch(startAddBuilding(name)),
    };
};


AddBuilding.propTypes = {
    onAddBuilding: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBuilding);
