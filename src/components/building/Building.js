import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Building extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <li
                    className='list-group-item d-flex align-items-center'>
                    <div className='p-2'>
                        {this.props.buildingName}
                    </div>
                    <div className='ml-auto p-2 align-items-center'>
                        <span className="badge badge-primary badge-pill float-left">{this.props.totalClassrooms}</span>
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
    totalClassrooms: PropTypes.number.isRequired,
};

export default Building;