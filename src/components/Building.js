import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Building extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classrooms: [102, 103],
        };
    }

    render() {
        return (
            <div>
                <li
                    className='list-group-item d-flex align-items-center'>
                    <div className='p-2'>
                        <Link to={'building/' + this.props.buildingName}
                            style={{ textDecoration: 'none' }} 
                        >
                            {this.props.buildingName}
                        </Link>
                    </div>
                    <div className='ml-auto p-2 align-items-center'>
                        <span className="badge badge-primary badge-pill float-left">{this.state.classrooms.length}</span>
                    </div>
                    {this.props.deleteVisibility &&
                        (<button
                            type='button'
                            className='btn btn-danger'
                            onClick={(e) => {
                                this.props.handleDeleteBuilding(this.props.buildingName);
                            }}>
                            Delete
                        </button>)
                    }

                </li>
            </div>
        );
    }
}

Building.propTypes = {
    buildingName: PropTypes.string.isRequired,
    deleteVisibility: PropTypes.bool.isRequired,
    handleDeleteBuilding: PropTypes.func.isRequired,
};