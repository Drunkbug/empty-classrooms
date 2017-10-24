import React from 'react';

export default class Building extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classrooms: [102, 103]
        }
    }

    render() {
        return (
            <li key={this.props.building}
                className='list-group-item d-flex align-items-center'>
                <div className='p-2'>
                    {this.props.buildingName}
                </div>
                <div className='ml-auto p-2 align-items-center'>
                    <span className="badge badge-primary badge-pill float-left">{this.state.classrooms.length}</span>
                </div>
                {this.props.deleteVisibility &&
                    (<button 
                        type='button' 
                        className='btn btn-danger'
                        onClick={(e) => {
                            this.props.handleDeleteBuilding(this.props.buildingName)
                        }}>
                        Delete
                    </button>)
                }

            </li>
        );
    }
}