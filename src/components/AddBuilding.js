import React from 'react';
import PropTypes from 'prop-types';

export default class AddBuilding extends React.Component {

    render() {
        return (
            <div className='container'>
                <form onSubmit={console.log('todo')}>
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

};