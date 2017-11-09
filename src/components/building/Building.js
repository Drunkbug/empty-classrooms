import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { startSetClassrooms } from 'src/actions/classrooms';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class Building extends React.Component {
    constructor(props) {
        super(props);
        this.onButtonClick = this.onButtonClick.bind(this);
    }

    onButtonClick() {
        // this.props.setClassrooms(this.props.id);
        this.props.history.push(`/building/${this.props.id}/classroom/`);
    }

    render() {
        return (
            <div>
                <li
                    className='list-group-item d-flex align-items-center'>
                    <div className='p-2'>
                        <a onClick={this.onButtonClick}>
                            {this.props.buildingName}
                        </a>
                    </div>
                    <div className='ml-auto p-2 align-items-center'>
                        <span className="badge badge-primary badge-pill float-left">{this.props.totalClassrooms}</span>
                    </div>
                    <Link to={`/building/${this.props.id}`} className='btn btn-danger'>
                        Edit
                    </Link>


                </li>
            </div>);
    }
}
const mapStateToProps = (state) => {
    return {};
};

const mapDispatchToProps = (dispatch) => {
    return {
        setClassrooms: (id) => dispatch(startSetClassrooms(id)),
    };
};


Building.propTypes = {
    buildingName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    totalClassrooms: PropTypes.number.isRequired,
    setClassrooms: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
};

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(Building));

