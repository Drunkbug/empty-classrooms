import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Building extends React.Component {
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
                    <Link to={`/building/${this.props.id}`} className='btn btn-danger'>
                        Edit
                    </Link>


                </li>
            </div>
        );
    }
}

Building.propTypes = {
    buildingName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default Building;