import React from 'react';

export default class Building extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            classrooms: [102, 103]
        }
    }

    render() {
        return(
            <div className='container'>
                <li key={this.props.building} 
                    className='list-group-item d-flex justify-content-between align-items-center'>
                    {this.props.buildingName}
                    <span className="badge badge-primary badge-pill">{this.state.classrooms.length}</span>
                </li>
            </div>
        );
    }
}